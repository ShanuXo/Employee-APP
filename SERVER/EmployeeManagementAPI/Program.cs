using EmployeeManagementAPI.Database;
using EmployeeManagementAPI.Services.IServices;
using EmployeeManagementAPI.Services;
using Microsoft.EntityFrameworkCore;
//using EmployeeManagementAPI.Repository.IRepository;
//using EmployeeManagementAPI.Repository;
using EmployeeManagementAPI.Models;

var builder = WebApplication.CreateBuilder(args);
//database
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MyConnection")));
//Configure Services
builder.Services.AddScoped<IEmployeeServices, EmployeeServices>();
//builder.Services.AddScoped<IRepository<Employee>, Repository<Employee>>();

//builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
//builder.Services.AddScoped<IRepository<Employee>, Repository<Employee>>();


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:5173") // Replace with your React app's URL
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
