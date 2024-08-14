using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Entities
{
    public class CommentDto
    {
        public int CommentId { get; set; }
        public int UserId { get; set; }
        //public int ChpterId { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }

        [ForeignKey("Chapter")]

        public int ChapterId { get; set; }

    }
}
