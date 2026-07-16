import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comments() {
    let [comments, setComments] = useState([
        {
            username: "@sk",
            remarks: "great job",
            rating: 4
        }
    ]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    };

    return (
        <>
            <div>
                <h3>All comments</h3>
                {comments.map((comment, idx) => {
        
                    return (
                        <div className="comment" key={idx}>
                            <span>{comment.remarks}</span>
                            &nbsp;
                          
                            <p>{comment.username}</p>
                        </div>
                    );
                })}
            </div>
            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}
