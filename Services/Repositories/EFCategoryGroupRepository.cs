using Microsoft.EntityFrameworkCore;
using OJJO.Data;
using OJJO.Models;
using OJJO.Services.Repositories.Interfaces;
using System.Diagnostics.CodeAnalysis;

namespace OJJO.Services.Repositories;

public class EFCategoryGroupRepository : ICategoryGroupRepository
{
    private readonly StoreDbContext _context;

    public EFCategoryGroupRepository(StoreDbContext context)
    {
        _context = context;
    }

    public IQueryable<CategoryGroup>? CategoryGroups => _context.CategoryGroups!.Include(c => c.Categories)!.ThenInclude(c => c.Image);

    public async Task AddAsync([NotNull] CategoryGroup personGroup)
    {
        await _context.AddAsync(personGroup);
        await _context.SaveChangesAsync();
    }

    public bool Contain(long id)
    {
        return CategoryGroups!.Any(c => c.Id == id);
    }

    public bool Contain([NotNull] CategoryGroup personGroup)
    {
        return CategoryGroups!.Contains(personGroup);
    }

    public async Task DeleteAsync(long id)
    {
        CategoryGroup? personGroup = await GetByIdAsync(id);
        _context.CategoryGroups!.Remove(personGroup!);
    }

    public async Task<CategoryGroup> GetByIdAsync(long id)
    {
        return await CategoryGroups!.FirstAsync(c => c.Id == id);
    }

    public async Task Update([NotNull] CategoryGroup personGroup)
    {
        _context.Update(personGroup);
        await _context.SaveChangesAsync();
    }
}