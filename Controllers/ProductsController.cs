using Microsoft.AspNetCore.Mvc;
using OJJO.Models;
using OJJO.Models.ViewModels;
using OJJO.Services.Repositories.Interfaces;
using System.Drawing;

namespace OJJO.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _repository;

    public ProductsController(IProductRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_repository.Products);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromQuery]ProductViewModel model)
    {
        await _repository.AddAsync(model.ConvertToProduct());
        return Ok();
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(long id)
    {
        await _repository.DeleteAsync(id);
        return Ok();
    }
}