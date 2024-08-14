using AutoMapper;
using Common.Entities;
using Repository.Entities;
using Repository.Interfaces;
using Repository.Repositories;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class UserService : IService<UserDto>
    {
        private readonly IRepository<User> repository;
        private readonly IMapper mapper;
        public UserService(IRepository<User> repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public async Task<UserDto?> AddItemAsync(UserDto item)
        {
            return mapper.Map<UserDto>(await repository.AddItemAsync(mapper.Map<User>(item)));
            //await repository.AddItemAsync(mapper.Map<User>(item));
            //return item;
        }

        public async Task<UserDto?> DeleteItemAsync(int id)
        {
            return mapper.Map<UserDto>(await repository.DeleteItemAsync(id));
        }

        public async Task<List<UserDto>> GetAllAsync()
        {
            return mapper.Map<List<UserDto>>(await repository.GetAllAsync());
        }

        public async Task<UserDto?> GetByIdAsync(int id)
        {
            return mapper.Map<UserDto>(await repository.GetByIdAsync(id));
        }

        public async Task<UserDto?> UpdateItemAsync(UserDto item, int id)
        {
            await repository.UpdateItemAsync(mapper.Map<User>(item), id);
            return item;
        }
    }
}
