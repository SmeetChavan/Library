import { useNavigate } from "react-router-dom";

function Book({Id , index , author , title}) {

    const navigate = useNavigate();

    const handleDelete = async () => {

        if(!localStorage.getItem("authToken")){
            return alert("Login to delete book");
        }

        const book = {Id}

        const response = await fetch("/api/book/delete" , {
            method: "POST",
            headers:{
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(book)
        })

        if(!response.ok){
            return alert("Failed to delete");
        }

        alert("Deleted successfully!");
        navigate("/");
    }

    return(
        <section className="book">

            <div className="index">{index}</div>
            <hr />

            <div className="title">{title}</div>

            <div className="author">
                <span>by</span><div>{author}</div>
            </div>

            <div className="delete">
                <button onClick={() => handleDelete()}>Delete</button>
            </div>

        </section>
    );
}

export default Book;