using Repository.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Entities
{
    public class BookDto
    {
        public int BookId { get; set; }
        public string BookName { get; set; }     // שם הספר
        public string Summary { get; set; }      // תקציר
        public int NumChapter { get; set; }      // מספר פרקים
        public DateTime DeadlineDate { get; set; }   // תאריך אחרון לניסוי הוספת פרק אחרון לספר זה

        [ForeignKey("User")]

        //public virtual ICollection<Comment> Comments { get; set; }  // רשימה של תגובות על הספר הזה
        //public virtual ICollection<Chapter> Chapters { get; set; }  // אוסף של נסיונות פרקי סיום

        public int UserId { get; set; }         // מס' של הסופר/ת
        //public virtual User User { get; set; }
    }
}
