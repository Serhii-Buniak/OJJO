using OJJO.Data;
using OJJO.Models;
using System.Diagnostics.CodeAnalysis;

namespace OJJO.Services.Repositories.Interfaces;

public interface IProductRepository
{
    IQueryable<Product>? Products { get; }

    Task AddAsync([NotNull] Product product);
    Task DeleteAsync(long id);

    bool Contain(long id);
    bool Contain([NotNull] Product product);
    Task Update([NotNull] Product product);
    Task<Product?> GetByIdAsync(long id);
}