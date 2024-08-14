using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Repository.Entities
{
    public class Chapter
    {
        public int ChapterId { get; set; }  // מס' פרק
        public int BookId { get; set; }     // מס' ספר
        public int UserId { get; set; }     // מס' משתמש
        public string ContentChapter {  get; set; }   // תוכן הפרק
        public bool IsChoose { get; set; }    // האם נבחר כבר פרק אחרון
        public virtual ICollection<Comment> Comments { get; set; }   // אוסף של תגובות על הפרק
    }
}
