using OJJO.Models;
using System.Diagnostics.CodeAnalysis;

namespace OJJO.Services.Repositories.Interfaces;

public interface ICategoryRepository
{
    IQueryable<Category>? Categories { get; }

    Task AddAsync([NotNull] Category product);
    Task DeleteAsync(long id);

    bool Contain(long id);
    bool Contain([NotNull] Category product);

    void Update([NotNull] Category product);
    Task<Category> GetByIdAsync(long id);
}
