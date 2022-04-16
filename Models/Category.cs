using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OJJO.Models;

public record class Category
{
    public long Id { get; set; }
    [Required(AllowEmptyStrings = false)]    
    public string? Name { get; set; }
    [JsonIgnore]
    public ICollection<CategoryGroup>? CategoryGroups { get; set; }
    [Required]
    public Image? Image { get; set; }
}