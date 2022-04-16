
using OJJO.Models;

namespace OJJO.infrastructure.Extensions;

public static class FormFileExtensions
{
    public static Image ConvertToImage(this IFormFile file)
    {
        using MemoryStream stream = new();
        file.CopyTo(stream);
        return new Image
        {
            ByteArray = stream.ToArray(),
            Length = file.Length,
            ContentType = file.ContentType,
        };
    }
}
