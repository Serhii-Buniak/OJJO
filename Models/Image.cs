using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace OJJO.Models;

public record class Image
{
    public long Id { get; set; }
    public byte[]? ByteArray { get; set; }
    public long Length { get; set; }
    public string? ContentType { get; set; }
    [JsonIgnore]
    public ICollection<Product>? Products { get; set; }
}
