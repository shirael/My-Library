using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IRepository<T>
    {
        Task<List<T>> GetAllAsync();
        Task<T?> GetByIdAsync(int id);
        Task<T?> AddItemAsync(T item);
        Task<T?> UpdateItemAsync(T item, int id);
        Task<T?> DeleteItemAsync(int id);
    }
}
