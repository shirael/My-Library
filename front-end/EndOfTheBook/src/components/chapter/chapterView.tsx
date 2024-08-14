// תצוגת פרק

import React from "react";


interface Chapter {
    chapterId: number;
    userId: number;
    bookId: number;
    //title: string;
    content: string;
}

interface ChapterViewProps {
    chapter: Chapter;
}

const ChapterView: React.FC<ChapterViewProps> = ({ chapter }) => {
    return (
        <div>
            {/* <h2>{chapter.title}</h2> */}
            <p>{chapter.content}</p>
            {/* כאן ניתן להוסיף תגובות או כל פונקציונליות נוספת */}
      </div>
    );
};

export default ChapterView;