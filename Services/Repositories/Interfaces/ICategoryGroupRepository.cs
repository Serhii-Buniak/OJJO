using OJJO.Models;
using System.Diagnostics.CodeAnalysis;

namespace OJJO.Services.Repositories.Interfaces;

public interface ICategoryGroupRepository
{
    IQueryable<CategoryGroup?>? CategoryGroups { get; }

    Task AddAsync([NotNull] CategoryGroup product);
    Task DeleteAsync(long id);

    bool Contain(long id);
    bool Contain([NotNull] CategoryGroup product);

    Task Update([NotNull] CategoryGroup product);
    Task<CategoryGroup> GetByIdAsync(long id);
}