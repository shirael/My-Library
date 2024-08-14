using Common.Entities;
using Microsoft.Extensions.DependencyInjection;
using Repository;
using Service.Interfaces;
using Service.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public static class ServiceCollectionExtention
    {

        // הגדרת תלויות
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddRepositories();
                   
            services.AddScoped<IService<UserDto>, UserService>();
            services.AddScoped<IService<BookDto>, BookService>();
            services.AddScoped<IService<AuthorDto>, AuthorService>();
            services.AddScoped<IService<ChapterDto>, ChapterService>();
            services.AddScoped<IService<CommentDto>, CommentService>();

            services.AddAutoMapper(typeof(MapperProfile));
            return services;
        }
    }
}
