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
    public class CommentRepository : IRepository<Comment>
    {
        private readonly IContext _context;
        public CommentRepository(IContext context)
        {
            _context = context;
        }

        public async Task<Comment> AddItemAsync(Comment item)
        {
            await _context.Comments.AddAsync(item);
            await _context.SaveChanges();
            return item;
        }

        public async Task<Comment?> DeleteItemAsync(int id)
        {
            //_context.Comments.Remove(_context.Comments.FirstOrDefault(x => x.CommentId == id));
            //await _context.SaveChanges();
            var comment = await GetByIdAsync(id);
            if (comment != null)
            {
                _context.Comments.Remove(comment);
                await _context.SaveChanges();
            }
            return comment;
        }

        public async Task<List<Comment>> GetAllAsync()
        {
            return await _context.Comments.ToListAsync();
        }

        public async Task<Comment?> GetByIdAsync(int id)
        {
            return await _context.Comments.FirstOrDefaultAsync(x => x.CommentId == id);
        }

        public async Task<Comment?> UpdateItemAsync(Comment comment, int id)
        {
            //Comment c = _context.Comments.FirstOrDefault(x => x.CommentId == id);
            //if(c != null)
            //{
            //    c.UserId = comment.UserId;
            //    c.Content = comment.Content;
            //
            //  await _context.SaveChanges();
            //}
            _context.Comments.Update(comment);

            await _context.SaveChanges();
            return comment;
        }
    }
}
