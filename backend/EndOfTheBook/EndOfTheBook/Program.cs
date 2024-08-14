using MockContext;
using Repository.Entities;
using Repository.Interfaces;
using Repository.Repositories;
using Service;
using Service.Interfaces;
using Service.Services;

var builder = WebApplication.CreateBuilder(args);
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//          .AddJwtBearer(option =>
//          option.TokenValidationParameters = new TokenValidationParameters
//          {
//              ValidateIssuer = true,
//              ValidateAudience = true,
//              ValidateLifetime = true,
//              ValidateIssuerSigningKey = true,
//              ValidIssuer = builder.Configuration.GetValue<string>("Jwt:Issuer"),
//              ValidAudience = builder.Configuration.GetValue<string>("Jwt:Audience"),
//              IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetValue<string>("Jwt:Key")))
//          });

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder => builder
        .AllowAnyOrigin()
        .WithOrigins("http://localhost:3000")
        .AllowAnyMethod()
        .AllowAnyHeader()
        .WithExposedHeaders("Content-Disposition")
        .WithExposedHeaders("Access-Control-Allow-Origin"));
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddServices();

//builder.Services.AddScoped<IRepository<Book>, BookRepository>();
//builder.Services.AddScoped<IRepository<User>, UserRepository>();
//builder.Services.AddScoped<IRepository<Author>, AuthorRepository>();
//builder.Services.AddScoped<IRepository<Chapter>, ChapterRepository>();
//builder.Services.AddScoped<IRepository<Comment>, CommentRepository>();



builder.Services.AddDbContext<IContext, MyDataContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.UseRouting();

app.UseCors("AllowOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();