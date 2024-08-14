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
    public class AuthorRepository : IRepository<Author>
    {
        private readonly IContext _context;

        public AuthorRepository(IContext context)
        {
            _context = context;
        }

        public async Task<Author?> AddItemAsync(Author item)
        {
            await _context.Authors.AddAsync(item);
            await _context.SaveChanges();
            return item;
        }

        public async Task<Author?> DeleteItemAsync(int id)
        {
            //_context.Authors.Remove(_context.Authors.FirstOrDefault(x => x.UserId == id));
            //await _context.SaveChanges();
            var author = await GetByIdAsync(id);
            if (author != null)
            {
                _context.Authors.Remove(author);
                await _context.SaveChanges();
            }
            return author;
        }

        public async Task<List<Author>> GetAllAsync()
        {
            return await _context.Authors.ToListAsync();
        }

        public async Task<Author?> GetByIdAsync(int id)
        {
            return await _context.Authors.FirstOrDefaultAsync(x => x.UserId == id);
        }

        public async Task<Author?> UpdateItemAsync(Author author, int id)
        {
            //Author a = _context.Authors.FirstOrDefault(x => x.UserId == id);
            //if (a != null)
            //{
            //    a.Role = author.Role;
            //    a.Name = author.Name;
            //    a.Mail = author.Mail;
            //    a.Password = author.Password;
            //    a.Phone = author.Phone;

            //    await _context.SaveChanges();
            //}
            _context.Authors.Update(author);

            await _context.SaveChanges();
            return author;

        }

    }
}
