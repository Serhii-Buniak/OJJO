using Microsoft.AspNetCore.Mvc;
using OJJO.Models;
using OJJO.Models.ViewModels;
using OJJO.Services.Repositories.Interfaces;

namespace OJJO.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryGroupsController : ControllerBase
{
    private readonly ICategoryGroupRepository _repository;
    private readonly ICategoryRepository _categoryRepository;

    public CategoryGroupsController(ICategoryGroupRepository repository, ICategoryRepository categoryRepository)
    {
        _repository = repository;
        _categoryRepository = categoryRepository;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_repository.CategoryGroups);
    }

    [HttpGet("{id:long}")]
    public async Task<IActionResult> GetItem(long id)
    {
        return Ok(await _repository.GetByIdAsync(id));
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CategoryGroupViewModel model)
    {
        CategoryGroup categoryGroup = model.ConvertToCategoryGroup(_categoryRepository.Categories!);
        await _repository.AddAsync(categoryGroup);
        return Ok();
    }

    [HttpPost]
    [Route("[action]")]
    public async Task<IActionResult> AddCategory(long id, [FromBody] long[] categoryIds)
    {
        CategoryGroup categoryGroup = await _repository.GetByIdAsync(id);
        var categories = GetCategories(categoryIds);

        foreach (var category in categories)
        {
            categoryGroup.Categories!.Add(await category);
        }
        await _repository.Update(categoryGroup);
        return Ok();
    }


    [HttpDelete]
    [Route("[action]")]
    public async Task<IActionResult> RemoveCategory(long id, [FromBody] long[] categoryIds)
    {
        CategoryGroup categoryGroup = await _repository.GetByIdAsync(id);
        var categories = GetCategories(categoryIds);

        foreach (var category in categories)
        {
            categoryGroup.Categories!.Remove(await category);
        }
        await _repository.Update(categoryGroup);
        return Ok();
    }

    [NonAction]
    private IEnumerable<Task<Category>> GetCategories(long[] categoryIds)
    {
        return categoryIds.Select(async categoryId => await _categoryRepository.GetByIdAsync(categoryId));
    }
}