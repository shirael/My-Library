using Common.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Repository.Entities;
using Service.Interfaces;
using Service.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EndOfTheBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Policy = "SuperUserOnly")]
    public class BookController : ControllerBase
    {

        private readonly IService<BookDto> service;
        private readonly IService<UserDto> userService;

        public BookController(IService<BookDto> service, IService<UserDto> userService)
        {
            this.service = service;
            this.userService = userService;
        }


        // GET: api/<BookController>
        [HttpGet]
        public async Task<List<BookDto>> Get()
        {
            return await service.GetAllAsync();
        }

        // GET api/<BookController>/5
        [HttpGet("{id}")]
        public async Task<BookDto?> Get(int id)
        {
            return await service.GetByIdAsync(id);
        }

        // POST api/<BookController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] BookDto book)
        {
            var user = await userService.GetByIdAsync(book.UserId);
            if(user == null)
            {
                return NotFound("User not found.");
            }
            else if(user.Role == 1)
            {
                return BadRequest("User is not authorized to add books.");
            }
            return Ok(await service.AddItemAsync(book));
        }

        // PUT api/<BookController>/5
        [HttpPut("{id}")]
        public async Task<BookDto?> Put(int id, BookDto book)
        {
            return await service.UpdateItemAsync(book, id);
        }

        // DELETE api/<BookController>/5
        [HttpDelete("{id}")]
        public async Task<BookDto?> Delete(int id)
        {
            return await service.DeleteItemAsync(id);
        }
    }
}
