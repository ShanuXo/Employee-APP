using EmployeeManagementAPI.Database;
using EmployeeManagementAPI.DTO;
using EmployeeManagementAPI.Models;
//using EmployeeManagementAPI.Repository.IRepository;
using EmployeeManagementAPI.Services.IServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace EmployeeManagementAPI.Services
{
    public class EmployeeServices : IEmployeeServices
    {
        //Services pattern

        private readonly AppDbContext _context;
        public EmployeeServices(AppDbContext context)
        {
            _context = context;
        }
        public async Task<APIResponse> GetEmployeesAsync()
        {
            var apiResponse = new APIResponse();
            try
            {
                var employees = await _context.Employees
                    .Select(e => new EmployeeDTO
                    {
                        EmpId = e.EmpId,
                        FirstName = e.FirstName,
                        LastName = e.LastName,
                        Email = e.Email,
                        Salary = e.Salary,
                        PhoneNumber = e.PhoneNumber
                    })
                    .ToListAsync();

                apiResponse.StatusCode = HttpStatusCode.OK;
                apiResponse.IsSuccess = true;
                apiResponse.Result = employees;
            }
            catch (Exception ex)
            {
                apiResponse.StatusCode = HttpStatusCode.InternalServerError;
                apiResponse.IsSuccess = false;
                apiResponse.ErrorMessage.Add(ex.Message);
            }
            return apiResponse;
        }

        public async Task<APIResponse> GetEmployeeByIdAsync(int id)
        {
            var apiResponse = new APIResponse();
            try
            {
                var employee = await _context.Employees
                    .Where(e => e.EmpId == id)
                    .Select(e => new EmployeeDTO
                    {
                        EmpId = e.EmpId,
                        FirstName = e.FirstName,
                        LastName = e.LastName,
                        Email = e.Email,
                        Salary = e.Salary,
                        PhoneNumber = e.PhoneNumber
                    })
                    .FirstOrDefaultAsync();

                if (employee != null)
                {
                    apiResponse.StatusCode = HttpStatusCode.OK;
                    apiResponse.IsSuccess = true;
                    apiResponse.Result = employee;
                }
                else
                {
                    apiResponse.StatusCode = HttpStatusCode.NotFound;
                    apiResponse.IsSuccess = false;
                    apiResponse.ErrorMessage.Add("Employee not found.");
                }
            }
            catch (Exception ex)
            {
                apiResponse.StatusCode = HttpStatusCode.InternalServerError;
                apiResponse.IsSuccess = false;
                apiResponse.ErrorMessage.Add(ex.Message);
            }
            return apiResponse;
        }

        public async Task<APIResponse> AddEmployeeAsync(EmployeeDTO employeeDTO)
        {
            var apiResponse = new APIResponse();
            try
            {
                var employee = new Employee
                {
                    FirstName = employeeDTO.FirstName,
                    LastName = employeeDTO.LastName,
                    Email = employeeDTO.Email,
                    Salary = employeeDTO.Salary,
                    PhoneNumber = employeeDTO.PhoneNumber
                };

                _context.Employees.Add(employee);
                await _context.SaveChangesAsync();

                apiResponse.StatusCode = HttpStatusCode.Created;
                apiResponse.IsSuccess = true;
                apiResponse.Result = employeeDTO;
            }
            catch (Exception ex)
            {
                apiResponse.StatusCode = HttpStatusCode.InternalServerError;
                apiResponse.IsSuccess = false;
                apiResponse.ErrorMessage.Add(ex.Message);
            }
            return apiResponse;
        }

        public async Task<APIResponse> UpdateEmployeeAsync(int id, EmployeeDTO employeeDTO)
        {
            var apiResponse = new APIResponse();
            try
            {
                var existingEmployee = await _context.Employees.FindAsync(id);

                if (existingEmployee != null)
                {
                    existingEmployee.FirstName = employeeDTO.FirstName;
                    existingEmployee.LastName = employeeDTO.LastName;
                    existingEmployee.Email = employeeDTO.Email;
                    existingEmployee.Salary = employeeDTO.Salary;
                    existingEmployee.PhoneNumber = employeeDTO.PhoneNumber;

                    _context.Entry(existingEmployee).State = EntityState.Modified;
                    await _context.SaveChangesAsync();

                    apiResponse.StatusCode = HttpStatusCode.NoContent;
                    apiResponse.IsSuccess = true;
                }
                else
                {
                    apiResponse.StatusCode = HttpStatusCode.NotFound;
                    apiResponse.IsSuccess = false;
                    apiResponse.ErrorMessage.Add("Employee not found.");
                }
            }
            catch (Exception ex)
            {
                apiResponse.StatusCode = HttpStatusCode.InternalServerError;
                apiResponse.IsSuccess = false;
                apiResponse.ErrorMessage.Add(ex.Message);
            }
            return apiResponse;
        }

        public async Task<APIResponse> DeleteEmployeeAsync(int id)
        {
            var apiResponse = new APIResponse();
            try
            {
                var employee = await _context.Employees.FindAsync(id);

                if (employee != null)
                {
                    _context.Employees.Remove(employee);
                    await _context.SaveChangesAsync();

                    apiResponse.StatusCode = HttpStatusCode.NoContent;
                    apiResponse.IsSuccess = true;
                }
                else
                {
                    apiResponse.StatusCode = HttpStatusCode.NotFound;
                    apiResponse.IsSuccess = false;
                    apiResponse.ErrorMessage.Add("Employee not found.");
                }
            }
            catch (Exception ex)
            {
                apiResponse.StatusCode = HttpStatusCode.InternalServerError;
                apiResponse.IsSuccess = false;
                apiResponse.ErrorMessage.Add(ex.Message);
            }
            return apiResponse;
        }


        //Repository Pattern

        //private readonly IRepository<Employee> _employeeRepository;

        //public EmployeeServices(IRepository<Employee> employeeRepository)
        //{
        //    _employeeRepository = employeeRepository;
        //}

        //public async Task<APIResponse> GetEmployeesAsync()
        //{
        //    var apiResponse = new APIResponse();
        //    try
        //    {
        //        var employees = await _employeeRepository.GetAllAsync();

        //        var employeeDTOs = employees.Select(e => new EmployeeDTO
        //        {
        //            EmpId = e.EmpId,
        //            FirstName = e.FirstName,
        //            LastName = e.LastName,
        //            Email = e.Email,
        //            Salary = e.Salary,
        //            PhoneNumber = e.PhoneNumber
        //        }).ToList();

        //        apiResponse.StatusCode = HttpStatusCode.OK;
        //        apiResponse.IsSuccess = true;
        //        apiResponse.Result = employeeDTOs;
        //    }
        //    catch (Exception ex)
        //    {
        //        apiResponse.StatusCode = HttpStatusCode.InternalServerError;
        //        apiResponse.IsSuccess = false;
        //        apiResponse.ErrorMessage.Add(ex.Message);
        //    }
        //    return apiResponse;
        //}

        //public async Task<APIResponse> GetEmployeeByIdAsync(int id)
        //{
        //    var apiResponse = new APIResponse();
        //    try
        //    {
        //        var employee = await _employeeRepository.GetByIdAsync(id);

        //        if (employee != null)
        //        {
        //            var employeeDTO = new EmployeeDTO
        //            {
        //                EmpId = employee.EmpId,
        //                FirstName = employee.FirstName,
        //                LastName = employee.LastName,
        //                Email = employee.Email,
        //                Salary = employee.Salary,
        //                PhoneNumber = employee.PhoneNumber
        //            };

        //            apiResponse.StatusCode = HttpStatusCode.OK;
        //            apiResponse.IsSuccess = true;
        //            apiResponse.Result = employeeDTO;
        //        }
        //        else
        //        {
        //            apiResponse.StatusCode = HttpStatusCode.NotFound;
        //            apiResponse.IsSuccess = false;
        //            apiResponse.ErrorMessage.Add("Employee not found.");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        apiResponse.StatusCode = HttpStatusCode.InternalServerError;
        //        apiResponse.IsSuccess = false;
        //        apiResponse.ErrorMessage.Add(ex.Message);
        //    }
        //    return apiResponse;
        //}

        //public async Task<APIResponse> AddEmployeeAsync(EmployeeDTO employeeDTO)
        //{
        //    var apiResponse = new APIResponse();
        //    try
        //    {
        //        var employee = new Employee
        //        {
        //            FirstName = employeeDTO.FirstName,
        //            LastName = employeeDTO.LastName,
        //            Email = employeeDTO.Email,
        //            Salary = employeeDTO.Salary,
        //            PhoneNumber = employeeDTO.PhoneNumber
        //        };

        //        await _employeeRepository.AddAsync(employee);

        //        apiResponse.StatusCode = HttpStatusCode.Created;
        //        apiResponse.IsSuccess = true;
        //        apiResponse.Result = employeeDTO;
        //    }
        //    catch (Exception ex)
        //    {
        //        apiResponse.StatusCode = HttpStatusCode.InternalServerError;
        //        apiResponse.IsSuccess = false;
        //        apiResponse.ErrorMessage.Add(ex.Message);
        //    }
        //    return apiResponse;
        //}

        //public async Task<APIResponse> UpdateEmployeeAsync(int id, EmployeeDTO employeeDTO)
        //{
        //    var apiResponse = new APIResponse();
        //    try
        //    {
        //        var existingEmployee = await _employeeRepository.GetByIdAsync(id);

        //        if (existingEmployee != null)
        //        {
        //            existingEmployee.FirstName = employeeDTO.FirstName;
        //            existingEmployee.LastName = employeeDTO.LastName;
        //            existingEmployee.Email = employeeDTO.Email;
        //            existingEmployee.Salary = employeeDTO.Salary;
        //            existingEmployee.PhoneNumber = employeeDTO.PhoneNumber;

        //            await _employeeRepository.UpdateAsync(existingEmployee);

        //            apiResponse.StatusCode = HttpStatusCode.NoContent;
        //            apiResponse.IsSuccess = true;
        //        }
        //        else
        //        {
        //            apiResponse.StatusCode = HttpStatusCode.NotFound;
        //            apiResponse.IsSuccess = false;
        //            apiResponse.ErrorMessage.Add("Employee not found.");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        apiResponse.StatusCode = HttpStatusCode.InternalServerError;
        //        apiResponse.IsSuccess = false;
        //        apiResponse.ErrorMessage.Add(ex.Message);
        //    }
        //    return apiResponse;
        //}

        //public async Task<APIResponse> DeleteEmployeeAsync(int id)
        //{
        //    var apiResponse = new APIResponse();
        //    try
        //    {
        //        var existingEmployee = await _employeeRepository.GetByIdAsync(id);

        //        if (existingEmployee != null)
        //        {
        //            await _employeeRepository.DeleteAsync(existingEmployee);

        //            apiResponse.StatusCode = HttpStatusCode.NoContent;
        //            apiResponse.IsSuccess = true;
        //        }
        //        else
        //        {
        //            apiResponse.StatusCode = HttpStatusCode.NotFound;
        //            apiResponse.IsSuccess = false;
        //            apiResponse.ErrorMessage.Add("Employee not found.");
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        apiResponse.StatusCode = HttpStatusCode.InternalServerError;
        //        apiResponse.IsSuccess = false;
        //        apiResponse.ErrorMessage.Add(ex.Message);
        //    }
        //    return apiResponse;

        //}
    }
}
