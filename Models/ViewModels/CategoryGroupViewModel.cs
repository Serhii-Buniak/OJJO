namespace OJJO.Models.ViewModels;

public record class CategoryGroupViewModel
{
    public string? Name { get; set; }
    public long[] CategoriesIds { get; set; } = Array.Empty<long>();
    public CategoryGroup ConvertToCategoryGroup(IQueryable<Category> categories)
    {
        return new CategoryGroup
        {
            Name = Name,
            Categories = categories
                .Where(c => CategoriesIds!
                .Contains(c.Id))
                .ToHashSet(),
        };
    }
}