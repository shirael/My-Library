using Common.Entities;
using Microsoft.AspNetCore.Mvc;
using Repository.Entities;
using Service.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EndOfTheBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChapterController : ControllerBase
    {
        private readonly IService<ChapterDto> service;
        private readonly IService<BookDto> bookService;
        public ChapterController(IService<ChapterDto> service, IService<BookDto> bookService)
        {
            this.service = service;
            this.bookService = bookService;
        }

        // GET: api/<ChapterController>
        [HttpGet]
        public async Task<List<ChapterDto>> Get()
        {
            return await service.GetAllAsync();
        }

        // GET api/<ChapterController>/5
        [HttpGet("{id}")]
        public async Task<ChapterDto?> Get(int id)
        {
            return await service.GetByIdAsync(id);
        }

        // POST api/<ChapterController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ChapterDto chapter)
        {
            var book = await bookService.GetByIdAsync(chapter.BookId);
            if(book == null)
            {
                return NotFound("Book not found");
            }
            if(DateTime.UtcNow > book.DeadlineDate)
            {
                return BadRequest("The deadline for submitting a chapter had passed");
            }

            if (await IsCustomerExists(chapter))
            {
                return BadRequest("This user has already written a chapter for this book");
            }
            return Ok(await service.AddItemAsync(chapter));
        }

        // PUT api/<ChapterController>/5
        [HttpPut("{id}")]
        public async Task<ChapterDto?> Put(int id, ChapterDto chapter)
        {
            return await service.UpdateItemAsync(chapter, id);
        }

        // DELETE api/<ChapterController>/5
        [HttpDelete("{id}")]
        public async Task<ChapterDto?> Delete(int id)
        {
            return await service.DeleteItemAsync(id);
        }
        private async Task<bool> IsCustomerExists(ChapterDto newChapter)
        {
            var allCustomers = await service.GetAllAsync();
            return allCustomers.Any(c => c.BookId == newChapter.BookId &&
                                         c.UserId == newChapter.UserId);
        }
    }
}
