using Microsoft.Extensions.DependencyInjection;
using Repository.Entities;
using Repository.Interfaces;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public static class ServiceCollectionExtention
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IRepository<User>, UserRepository>();
            services.AddScoped<IRepository<Author>, AuthorRepository>();
            services.AddScoped<IRepository<Book>, BookRepository>();
            services.AddScoped<IRepository<Chapter>, ChapterRepository>();
            services.AddScoped<IRepository<Comment>, CommentRepository>();
            return services;
        }
    }
}
