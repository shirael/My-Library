using Common.Entities;
using Microsoft.AspNetCore.Mvc;
using Repository.Entities;
using Service.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EndOfTheBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly IService<CommentDto> service;
        public CommentController(IService<CommentDto> service)
        {
            this.service = service;
        }

        // GET: api/<CommentController>
        [HttpGet]
        public async Task<List<CommentDto>> Get()
        {
            return await service.GetAllAsync();
        }

        // GET api/<CommentController>/5
        [HttpGet("{id}")]
        public async Task<CommentDto?> Get(int id)
        {
            return await service.GetByIdAsync(id);
        }

        // POST api/<CommentController>
        [HttpPost]
        public async Task<CommentDto?> Post(CommentDto comment)
        {
            return await service.AddItemAsync(comment);
        }

        // PUT api/<CommentController>/5
        [HttpPut("{id}")]
        public async Task<CommentDto?> Put(int id, CommentDto comment)
        {
            return await service.UpdateItemAsync(comment, id);
        }

        // DELETE api/<CommentController>/5
        [HttpDelete("{id}")]
        public async Task<CommentDto?> Delete(int id)
        {
            return await service.DeleteItemAsync(id);
        }
    }
}
