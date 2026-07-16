import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = "username cannot be empty!";
    }
    return errors;
}

export default function CommentsForm({ addNewComment }) {
    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
          
            if (addNewComment) {
                addNewComment(values);
            }
            resetForm(); 
        },
    });

    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={formik.handleSubmit}>
        
                <label htmlFor="username">Username</label>
                <input 
                    onChange={formik.handleChange} 
                    type="text"
                    value={formik.values.username}
                    id="username"
                    name="username"
                />
                <br /><br />
                {formik.errors.username ? <div style={{color: 'red'}}>{formik.errors.username}</div> : null}
             
                <label htmlFor="remarks">Remarks</label>
                <textarea 
                    onChange={formik.handleChange}
                    placeholder="remarks"
                    value={formik.values.remarks}
                    id="remarks"
                    name="remarks"
                ></textarea>
                <br /><br />
           
                <label htmlFor="rating">Rating</label>
                <input 
                    onChange={formik.handleChange}
                    value={formik.values.rating}
                    type="number" 
                    placeholder="rating"
                    id="rating"
                    min={1} 
                    max={5}
                    name="rating"
                />
                <br /><br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}
