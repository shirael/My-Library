using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public class Comment
    {
        public int CommentId { get; set; }   // מס' תגובה
        public int UserId { get; set; }      // מס' משתמש
        //public int ChapterId { get; set; }   // מס' פרק
        public string Content { get; set; }  // תוכן התגובה
        public int Rating { get; set; }     // דירוג הפרק


        [ForeignKey("Chapter")]
        public int ChapterId { get; set; }         // שם של הסופר/ת
        public virtual Chapter Chapter { get; set; }
    }
}
