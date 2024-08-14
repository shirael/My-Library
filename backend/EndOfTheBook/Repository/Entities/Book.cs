using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public class Book
    {
        public int BookId { get; set; }
        public string BookName { get; set; }     // שם הספר
        public string Summary { get; set; }   // תקציר
        public int NumChapter { get; set; }      // מספר פרקים
        public DateTime DeadlineDate { get; set; }         // תאריך אחרון לאפשרות הוספת פרק לספר זה
        public virtual ICollection<Chapter> Chapters { get; set; }  // אוסף של נסיונות פרקי סיום
       
        [ForeignKey("User")]
        public int UserId { get; set; }         // שם של הסופר/ת
        public virtual User User { get; set; }


        //public virtual ICollection<Comment> Comments { get; set; }  // רשימה של תגובות על הספר הזה

    }
}
