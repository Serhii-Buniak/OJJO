using Microsoft.EntityFrameworkCore;
using OJJO.Data;
using OJJO.Models;
using OJJO.Services.Repositories.Interfaces;
using System.Diagnostics.CodeAnalysis;

namespace OJJO.Services.Repositories;

public class EFProductRepository : IProductRepository
{
    private readonly StoreDbContext _context;

    public EFProductRepository(StoreDbContext context)
    {
        _context = context;
    }

    public IQueryable<Product>? Products => _context.Products!
            .Include(p => p.Category).ThenInclude(c => c!.Image)
            .Include(p => p.Images);

    public async Task AddAsync([NotNull] Product product)
    {
        await _context.AddAsync(product);
        await _context.SaveChangesAsync();
    }

    public bool Contain(long id)
    {
        return Products!.Any(p => p.Id == id);
    }

    public bool Contain([NotNull] Product product)
    {
        return Products!.Contains(product);
    }

    public async Task DeleteAsync(long id)
    {
        Product? product = await GetByIdAsync(id);
        _context.Products!.Remove(product!);
        await _context.SaveChangesAsync();
    }

    public async Task<Product?> GetByIdAsync(long id)
    {
        return await _context.Products!.FindAsync(id);
    }

    public async Task Update([NotNull] Product product)
    {
        _context.Update(product);
        await _context.SaveChangesAsync();
    }
}
