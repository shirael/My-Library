using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public class Author:User
    {
        public virtual ICollection<Book> Books { get; set; }
    }
}
