using AutoMapper;
using Common.Entities;
using Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Book, BookDto>().ReverseMap();
            //  CreateMap<List<Book>, List<BookDto>>().ReverseMap();
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<Author, AuthorDto>().ReverseMap();
            CreateMap<Chapter, ChapterDto>().ReverseMap();
            CreateMap<Comment, CommentDto>().ReverseMap();

            CreateMap<Task<Book>, Task<BookDto>>().ReverseMap();
            //  CreateMap<List<Book>, List<BookDto>>().ReverseMap();
            CreateMap<Task<User>, Task<UserDto>>().ReverseMap();
            CreateMap<Task<Author>, Task<AuthorDto>>().ReverseMap();
            CreateMap<Task<Chapter>, Task<ChapterDto>>().ReverseMap();
            CreateMap<Task<Comment>, Task<CommentDto>>().ReverseMap();

            CreateMap<Task<List<Book>>, Task<List<BookDto>>>().ReverseMap();
            CreateMap<Task<List<User>>, Task<List<UserDto>>>().ReverseMap();
            CreateMap<Task<List<Author>>, Task<List<AuthorDto>>>().ReverseMap();
            CreateMap<Task<List<Chapter>>, Task<List<ChapterDto>>>().ReverseMap();
            CreateMap<Task<List<Comment>>, Task<List<CommentDto>>>().ReverseMap();
        }
    }
}
