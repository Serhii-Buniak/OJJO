using Microsoft.EntityFrameworkCore;
using OJJO.Models;

namespace OJJO.Data;

public class StoreDbContext : DbContext
{
    public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    public DbSet<Category>? Categories { get; set; }
    public DbSet<CategoryGroup>? CategoryGroups { get; set; }
    public DbSet<Product>? Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>(e =>
        {
            e.Property<string?>("_longDescription")
                .HasColumnName("LongDescription");
            e.Property<string?>("_shortDescription")
                .HasColumnName("ShortDescription");
        });
    }
}