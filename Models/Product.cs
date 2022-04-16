using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace OJJO.Models;

public record class Product
{
    public long Id { get; set; }
    [Required]
    public string? Name { get; set; }
    [Required]
    [Column(TypeName = "money")]
    public decimal Price { get; set; }
    [JsonIgnore]
    public long CategoryId { get; set; }
    public Category? Category { get; set; }
    public ISet<Image>? Images { get; set; }

    private string? _longDescription;
    private string? _shortDescription;

    [NotMapped]
    public ProductDescription Description
    {
        get
        {
            return new ProductDescription
            {
                Long = _longDescription,
                Short = _shortDescription
            };
        }
        set
        {
            _longDescription = value.Long;
            _shortDescription = value.Short;
        }
    }
}

public record struct ProductDescription
{
    public string? Long { get; set; }
    public string? Short { get; set; }
}