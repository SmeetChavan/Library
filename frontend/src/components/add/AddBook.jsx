import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook(){

    const navigate = useNavigate();

    const [title , setTitle] = useState("");
    const [author , setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!localStorage.getItem("authToken")){
            return alert("Login to add book");
        }

        if(title === "" || author === ""){
            return alert("Please fill all the fields");
        }

        const book = {title , author};

        const response = await fetch("/api/book/add" , {
            method: "POST",
            headers:{
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(book)
        })

        if(!response.ok){
            return alert("Failed to add book!");
        }

        alert("Book added successfully!");
        navigate("/");

        setTitle("");
        setAuthor("");
    }

    return(
        <section className="container-fluid addbook">

            <form>

                <h3>Add a Book</h3>

                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" placeholder="Enter Author..." value={author} onChange={(e)=> setAuthor(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="Enter Title..." value={title} onChange={(e)=> setTitle(e.target.value)} />
                </div>

                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>

        </section>
    );
}

export default AddBook;