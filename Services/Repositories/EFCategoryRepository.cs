using Microsoft.EntityFrameworkCore;
using OJJO.Data;
using OJJO.Models;
using OJJO.Services.Repositories.Interfaces;
using System.Diagnostics.CodeAnalysis;

namespace OJJO.Services.Repositories;

public class EFCategoryRepository : ICategoryRepository
{
    private readonly StoreDbContext _context;

    public EFCategoryRepository(StoreDbContext context)
    {
        _context = context;
    }

    public IQueryable<Category>? Categories => _context.Categories!.Include(c => c.Image);

    public async Task AddAsync([NotNull] Category category)
    {
        await _context.AddAsync(category);
        await _context.SaveChangesAsync();
    }

    public bool Contain(long id)
    {
        return Categories!.Any(c => c.Id == id);
    }

    public bool Contain([NotNull] Category category)
    {
        return Categories!.Contains(category);
    }

    public async Task DeleteAsync(long id)
    {
        Category? category = await GetByIdAsync(id);
        _context.Categories!.Remove(category!);
    }

    public async Task<Category> GetByIdAsync(long id)
    {
        return await Categories!.FirstAsync(c => c.Id == id);
    }

    public void Update([NotNull] Category category)
    {
        _context.Update(category);
    }
}