using Microsoft.EntityFrameworkCore;
using Repository.Entities;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositories
{
    public class BookRepository : IRepository<Book>
    {
        private readonly IContext _context;

        public BookRepository(IContext context)
        {
            _context = context;
        }

        public async Task<Book?> AddItemAsync(Book item)
        {
            await _context.Books.AddAsync(item);
            await _context.SaveChanges();
            return item;
        }

        public async Task<Book?> DeleteItemAsync(int id)
        {
            var book = await GetByIdAsync(id);
            if (book != null)
            {
                _context.Books.Remove(book);
                await _context.SaveChanges();
            }
            return book;
        }

        public async Task<List<Book>> GetAllAsync()
        {
            return await _context.Books.ToListAsync();
        }

        public async Task<Book?> GetByIdAsync(int id)
        {
            return await _context.Books.FirstOrDefaultAsync(x => x.BookId == id);
        }

        public async Task<Book?> UpdateItemAsync(Book book, int id)
        {
            //Book b = _context.Books.FirstOrDefault(x => x.BookId == id);
            //if(b != null)
            //{
            //    b.BookName = book.BookName;
            //    b.Summary = book.Summary;
            //    b.NumChapter = book.NumChapter;
            //    b.DeadlineDate = book.DeadlineDate;
            //    b.Comments = book.Comments;
            //    b.UserId = book.UserId;
            //    b.Chapters = book.Chapters;

            //    await _context.SaveChanges();

                _context.Books.Update(book);

                await _context.SaveChanges();
            return book;
  
        }
    }
}
