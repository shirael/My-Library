using AutoMapper;
using Common.Entities;
using Repository.Entities;
using Repository.Interfaces;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class BookService : IService<BookDto>
    {
        private readonly IRepository<Book> repository;
        private readonly IMapper mapper;

        public BookService(IRepository<Book> repository, IMapper _mapper)
        {
            this.repository = repository;
            this.mapper = _mapper;
        }

        public async Task<BookDto?> AddItemAsync(BookDto item)
        {
            return mapper.Map<BookDto>(await repository.AddItemAsync(mapper.Map<Book>(item)));
        }

        public async Task<BookDto?> DeleteItemAsync(int id)
        {
            return mapper.Map<BookDto>(await repository.DeleteItemAsync(id));
        }

        public async Task<List<BookDto>> GetAllAsync()
        {
            return mapper.Map<List<BookDto>>(await repository.GetAllAsync());
        }

        public async Task<BookDto?> GetByIdAsync(int id)
        {
            return mapper.Map<BookDto>(await repository.GetByIdAsync(id));
        }

        public async Task<BookDto?> UpdateItemAsync(BookDto item, int id)
        {
            await repository.UpdateItemAsync(mapper.Map<Book>(item), id);
            return item;
        }
    }
}
