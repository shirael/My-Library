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
    public class UserRepository: IRepository<User>
    {
        private readonly IContext _context;

        public UserRepository(IContext context)
        {
            this._context = context;
        }

        public async Task<User?> AddItemAsync(User item)
        {
            await _context.Users.AddAsync(item);
            await _context.SaveChanges();
            return item;
        }

        public async Task<User?> DeleteItemAsync(int id)
        {
            //_context.Users.Remove(_context.Users.FirstOrDefault(x => x.UserId == id));
            //await _context.SaveChanges();

            var user = await GetByIdAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChanges();
            }
            return user;
        }

        public async Task<List<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User?> GetByIdAsync(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.UserId == id);
        }


        public async Task<User?> UpdateItemAsync(User user, int id)
        {
            //User u = _context.Users.FirstOrDefault(x => x.UserId == id);
            //if(u != null)
            //{
            //    u.Role = user.Role;
            //    u.Name = user.Name;
            //    u.Mail = user.Mail;
            //    u.Password = user.Password;
            //    u.Phone = user.Phone;

            //    await _context.SaveChanges();
            //}
            user.UserId = id;
            _context.Users.Update(user);

            await _context.SaveChanges();
            return user;
        }
    }
}