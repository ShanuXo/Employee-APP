//using EmployeeManagementAPI.Database;
//using EmployeeManagementAPI.DTO;
//using EmployeeManagementAPI.Models;
//using EmployeeManagementAPI.Repository.IRepository;
//using Microsoft.EntityFrameworkCore;
//using System.Linq.Expressions;

//namespace EmployeeManagementAPI.Repository
//{
//    public class Repository<T> : IRepository<T> where T : class
//    {
//        private readonly AppDbContext _context;
//        private readonly DbSet<T> _entities;

//        public Repository(AppDbContext context)
//        {
//            _context = context;
//            _entities = context.Set<T>();
//        }

//        public async Task<IEnumerable<T>> GetAllAsync()
//        {
//            return await _entities.ToListAsync();
//        }

//        public async Task<T> GetByIdAsync(int id)
//        {
//            return await _entities.FindAsync(id);
//        }

//        public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
//        {
//            return await _entities.Where(predicate).ToListAsync();
//        }

//        public async Task AddAsync(T entity)
//        {
//            await _entities.AddAsync(entity);
//        }

//        public async Task UpdateAsync(T entity)
//        {
//            _entities.Update(entity);
//        }

//        public async Task DeleteAsync(T entity)
//        {
//            _entities.Remove(entity);
//        }

//        //public Task AddAsync(EmployeeDTO employee)
//        //{
//        //    throw new NotImplementedException();
//        //}
//    }

//}
