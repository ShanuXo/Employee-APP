using EmployeeManagementAPI.DTO;
using EmployeeManagementAPI.Services.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeServices _employeeServices;
        public EmployeeController(IEmployeeServices employeeServices) 
        {
            _employeeServices = employeeServices;
        }
        [HttpGet]
        public async Task<IActionResult> GetEmployee()
        {
            var employees = await _employeeServices.GetEmployeesAsync();
            return StatusCode((int)Response.StatusCode, employees);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee(int id)
        {
            var employees=await _employeeServices.GetEmployeeByIdAsync(id);
            return StatusCode((int)Response.StatusCode, employees);
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployees([FromBody] EmployeeDTO employeeDTo)
        {
            var employees = await _employeeServices.AddEmployeeAsync(employeeDTo);
            return StatusCode((int)Response.StatusCode, employees);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateEmployee(int id, [FromBody] EmployeeDTO employeeDTO)
        {
            var employees=await _employeeServices.UpdateEmployeeAsync(id, employeeDTO);
            return StatusCode((int)Response.StatusCode, employees);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employees=await _employeeServices.DeleteEmployeeAsync(id);
            return StatusCode((int)Response.StatusCode, employees);
        }
    }
}
