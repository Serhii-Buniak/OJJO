using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using OJJO.Data;
using OJJO.Models;
using OJJO.Services.Repositories;
using OJJO.Services.Repositories.Interfaces;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var services = builder.Services;

services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));


services.AddDbContext<StoreDbContext>(options =>
    options.UseSqlServer(connectionString));

services.AddTransient<IProductRepository, EFProductRepository>();
services.AddTransient<ICategoryRepository, EFCategoryRepository>();
services.AddTransient<ICategoryGroupRepository, EFCategoryGroupRepository>();

services.AddDatabaseDeveloperPageExceptionFilter();

services.AddDefaultIdentity<ApplicationUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

services.AddIdentityServer()
    .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

services.AddAuthentication()
    .AddIdentityServerJwt();

services.AddControllers();

services.AddSwaggerGen();

const string corsName = "react-app";

services.AddCors(options =>
{
    options.AddPolicy(corsName,
    corsbuilder =>
    {
        corsbuilder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("https://localhost:44496", "https://localhost:44497");
    });
});

var app = builder.Build();

app.UseCors(corsName);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseMigrationsEndPoint();
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthentication();
app.UseIdentityServer();
app.UseAuthorization();
 
app.MapControllers();

app.MapFallbackToFile("index.html");


app.Run();