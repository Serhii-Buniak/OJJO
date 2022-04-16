using OJJO.infrastructure.Extensions;
using System.ComponentModel.DataAnnotations;

namespace OJJO.Models.ViewModels;

public record class CategoryViewModel
{
    [Required]
    public string? Name { get; set; }
    [Required]
    public IFormFile? Image { get; set; }
    public Category ConvertToCategory()
    {
        return new Category
        {
            Name = Name,
            Image = Image!.ConvertToImage(),
        };
    }
}
