using EmployeeManagementAPI.DTO;
using EmployeeManagementAPI.Models;
using System;
using System.Threading.Tasks;

namespace EmployeeManagementAPI.Services.IServices
{
    public interface IEmployeeServices
    {
        Task<APIResponse> GetEmployeesAsync();
        Task<APIResponse> GetEmployeeByIdAsync(int id);
        Task<APIResponse> AddEmployeeAsync(EmployeeDTO employeeDTO);
        Task<APIResponse> UpdateEmployeeAsync(int id, EmployeeDTO employeeDTO);
        Task<APIResponse> DeleteEmployeeAsync(int id);
    }
}
