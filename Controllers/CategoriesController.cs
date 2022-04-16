using Microsoft.AspNetCore.Mvc;
using OJJO.Models;
using OJJO.Models.ViewModels;
using OJJO.Services.Repositories.Interfaces;

namespace OJJO.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly ICategoryRepository _repository;

    public CategoriesController(ICategoryRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_repository.Categories);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CategoryViewModel model)
    {
        Category category = model.ConvertToCategory();
        await _repository.AddAsync(category);
        return Ok();
    }
}