using OJJO.infrastructure.Extensions;
using System.ComponentModel.DataAnnotations;

namespace OJJO.Models.ViewModels;

public record class ProductViewModel
{
    [Required]
    public string? Name { get; set; }
    [Required]
    public decimal Price { get; set; }
    [Required]
    public long CategoryId { get; set; }
    [Required]
    public IFormFile[]? Images { get; set; }
    [Required]

    public string? DescriptionLong { get; set; }
    public string? DescriptionShort { get; set; }
    public Product ConvertToProduct()
    {
        return new Product
        {
            Name = Name,
            Price = Price,
            CategoryId = CategoryId,
            Description = new ProductDescription { Long = DescriptionLong, Short = DescriptionShort },
            Images = Images!.Select(i => i.ConvertToImage()).ToHashSet(),
        };
    }
}