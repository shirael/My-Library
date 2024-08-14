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
    public class ChapterRepository : IRepository<Chapter>
    {
        private readonly IContext _context;
        public ChapterRepository(IContext context)
        {
            _context = context;
        }

        public async Task<Chapter?> AddItemAsync(Chapter item)
        {
            await _context.Chapters.AddAsync(item);
            await _context.SaveChanges();
            return item;
        }

        public async Task<Chapter?> DeleteItemAsync(int id)
        {
            var chapter = await GetByIdAsync(id);
            if (chapter != null)
            {
                _context.Chapters.Remove(chapter);
                await _context.SaveChanges();
            }
            return chapter;
        }

        public async Task<List<Chapter>> GetAllAsync()
        {
            return await _context.Chapters.ToListAsync();
        }

        public async Task<Chapter?> GetByIdAsync(int id)
        {
            return await _context.Chapters.FirstOrDefaultAsync(x => x.ChapterId == id);
        }

        public async Task<Chapter?> UpdateItemAsync(Chapter chapter, int id)
        {
            //Chapter c = _context.Chapters.FirstOrDefault(x => x.ChapterId == id);
            //if(c != null)
            //{
            //    c.BookId = chapter.BookId;
            //    c.UserId = chapter.UserId;
            //    c.Comments = chapter.Comments;
            //    c.Rating = chapter.Rating;
            //    await _context.SaveChanges();
            //}

            _context.Chapters.Update(chapter);

            await _context.SaveChanges();
            return chapter;
        }
    }
}
