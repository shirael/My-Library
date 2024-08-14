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
    public class CommentService : IService<CommentDto>
    {
        private readonly IRepository<Comment> repository;
        private readonly IMapper mapper;
        public CommentService(IRepository<Comment> repository, IMapper _mapper)
        {
            this.repository = repository;
            this.mapper = _mapper;
        }

        public async Task<CommentDto?> AddItemAsync(CommentDto item)
        {
            return mapper.Map<CommentDto>(await repository.AddItemAsync(mapper.Map<Comment>(item)));
        }

        public async Task<CommentDto?> DeleteItemAsync(int id)
        {
            return mapper.Map<CommentDto>(await repository.DeleteItemAsync(id));
        }

        public async Task<List<CommentDto>> GetAllAsync()
        {
            return mapper.Map<List<CommentDto>>(await repository.GetAllAsync());
        }

        public async Task<CommentDto?> GetByIdAsync(int id)
        {
            return mapper.Map<CommentDto>(await repository.GetByIdAsync(id));
        }

        public async Task<CommentDto?> UpdateItemAsync(CommentDto item, int id)
        {
            await repository.UpdateItemAsync(mapper.Map<Comment>(item), id);
            return item;
        }
    }
}
