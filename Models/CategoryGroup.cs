using System.ComponentModel.DataAnnotations;

namespace OJJO.Models;

public record class CategoryGroup
{
    public long Id { get; set; }
    [Required]
    public string? Name { get; set; }
    [Required]
    public ISet<Category>? Categories { get; set; }
}