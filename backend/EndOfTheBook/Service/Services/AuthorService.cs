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
    public class AuthorService : IService<AuthorDto>
    {
        private readonly IRepository<Author> repository;
        private readonly IMapper mapper;

        public AuthorService(IRepository<Author> repository, IMapper _mapper)
        {
            this.repository = repository;
            this.mapper = _mapper;
        }

        public async Task<AuthorDto?> AddItemAsync(AuthorDto item)
        {
            return mapper.Map<AuthorDto>(await repository.AddItemAsync(mapper.Map<Author>(item)));
        }

        public async Task<AuthorDto?> DeleteItemAsync(int id)
        {
           return mapper.Map<AuthorDto>( await repository.DeleteItemAsync(id));
        }

        public async Task<List<AuthorDto>> GetAllAsync()
        {
            return mapper.Map<List<AuthorDto>>(await repository.GetAllAsync());
        }

        public async Task<AuthorDto?> GetByIdAsync(int id)
        {
            return mapper.Map<AuthorDto>(await repository.GetByIdAsync(id));
        }

        public async Task<AuthorDto?> UpdateItemAsync(AuthorDto item, int id)
        {
            await repository.UpdateItemAsync(mapper.Map<Author>(item), id);
            return item;
        }
    }
}
