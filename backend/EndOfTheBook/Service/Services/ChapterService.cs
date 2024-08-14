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
    public class ChapterService : IService<ChapterDto>
    {
        private readonly IRepository<Chapter> repository;
        private readonly IMapper mapper;

        public ChapterService(IRepository<Chapter> repository, IMapper _mapper)
        {
            this.repository = repository;
            this.mapper = _mapper;
        }

        public async Task<ChapterDto?> AddItemAsync(ChapterDto item)
        {
            return mapper.Map<ChapterDto>(await repository.AddItemAsync(mapper.Map<Chapter>(item)));
        }

        public async Task<ChapterDto?> DeleteItemAsync(int id)
        {
            return mapper.Map<ChapterDto>(await repository.DeleteItemAsync(id));
        }

        public async Task<List<ChapterDto>> GetAllAsync()
        {
            return mapper.Map<List<ChapterDto>>(await repository.GetAllAsync());
        }

        public async Task<ChapterDto?> GetByIdAsync(int id)
        {
            return mapper.Map<ChapterDto>(await repository.GetByIdAsync(id));
        }

        public async Task<ChapterDto?> UpdateItemAsync(ChapterDto item, int id)
        {
            await repository.UpdateItemAsync(mapper.Map<Chapter>(item), id);
            return item;
        }
    }
}
