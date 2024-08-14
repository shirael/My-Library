using Microsoft.EntityFrameworkCore;
using Repository.Entities;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace MockContext
{
    public class MyDataContext : DbContext, IContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set;  }
        public DbSet<Author> Authors { get; set;  }
        public DbSet<Chapter> Chapters { get; set;  }
        public DbSet<Comment> Comments { get; set;  }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=(localdb)\\mssqllocalDB;database=EndOfTheBook;trusted_connection=true");
        }

        public async Task SaveChanges()
        {
            await SaveChangesAsync();
        }
    }
}
