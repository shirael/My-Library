using Common.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Service.Interfaces;
using System.CodeDom.Compiler;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EndOfTheBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IConfiguration _configuration;

        private readonly IService<UserDto> service;

        //private readonly IService<UserDto> service;

        public UserController(IService<UserDto> service, IConfiguration config)
        {
            this.service = service;
            this._configuration = config;
        }


        // GET: api/<UserController>
        [HttpGet]
        public async Task<List<UserDto>> Get()
        {
            return await service.GetAllAsync();
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<UserDto?> Get(int id)
        {
            return await service.GetByIdAsync(id);
        }


        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] UserDto user)
        {
            if(user.Role !=1 && user.Role !=2)
            {
                return BadRequest("Invalid Role. Role must be 1 or 2.");
            }
            if (await IsCustomerExists(user))
            {
                return BadRequest("Customer already exists in the system.");
            }
            return Ok(await service.AddItemAsync(user));
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<UserDto?> Put(int id, UserDto user)
        {
            return await service.UpdateItemAsync(user, id);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public async Task<UserDto?> Delete(int id)
        {
            return await service.DeleteItemAsync(id);
        }
        private async Task<bool> IsCustomerExists(UserDto newCustomer)
        {
            var allCustomers = await service.GetAllAsync();
            return allCustomers.Any(c => c.Role == newCustomer.Role &&
                                         c.Name == newCustomer.Name &&
                                         c.Mail == newCustomer.Mail &&
                                         c.Password == newCustomer.Password &&
                                         c.Phone == newCustomer.Phone);
        }
    }
}
