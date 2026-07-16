import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName : "",
        userName :"",
        password :""
    });
    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");

    // let handleNameChange = (event) => {

    //     setFullName(event.target.value);
    // }
    // let handleUsername = (event) => {

    //     setUserName(event.target.value);
    // }
    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        // console.log(fieldName);//fullname
        let newValue = event.target.value;

        setFormData((currData) => {
            // currData[fieldName] = newValue;
            //[variable] = computed property name
            return { ...currData, [fieldName]: newValue };
        }

        );

    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData(
            {
                fullName :"",
                userName :"",
                password : ""
            }
        );

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">FullName</label>
            <input placeholder="enter your name" type="text" value={formData.fullName}
                id="fullName" name="fullName" onChange={handleInputChange} />
            {/* onchange = evoke */}
            <br />
            <br />
            <label htmlFor="username">UserName</label>
            <input placeholder="enter username" type="text" value={formData.userName}
                id="userName" name="userName" onChange={handleInputChange} />
            <br />
            <br />
                     <label htmlFor="password">password</label>
            <input placeholder="enter password" type="password" value={formData.password}
                id="password" name="password" onChange={handleInputChange} />
                <br />
                <br />
            <button>Submit</button>
        </form>
    );
}