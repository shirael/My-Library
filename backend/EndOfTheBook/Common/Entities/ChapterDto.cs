using Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Common.Entities
{
    public class ChapterDto
    {
        public int ChapterId { get; set; }
        public int BookId { get; set; }
        public int UserId { get; set; }
        public string ContentChapter {  get; set; }
       
        [IgnoreDataMember]
        public bool IsChoose { get; set; }
        //public virtual List<Comment> Comments { get; set; }
    }
}
