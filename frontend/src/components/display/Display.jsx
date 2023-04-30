import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

function Display(){
    const [books , setBooks] = useState([]);

    const getBooks = async () => {

        const response = await fetch("/api/book/");

        const json = await response.json();

        if(!response.ok){
            return alert("Failed to fetch books");
        }

        setBooks(json.books);
    }

    useEffect(() => {
        
        getBooks();

    }, [books]);

    return(
        <section className="container-fluid display">

            <div>
                <h3>List of Books</h3>
            </div>
                
            {

                (books.length === 0) ? <div>No Books</div> : 

                (books.map((book , index) => (

                    <div key={book._id} className="content">

                        <Book Id={book._id} index={index + 1} title={book.title} author={book.author}/>

                    </div>

                )))

            }

            <div>
                <button><Link to="/add">Add Book</Link></button>
            </div>

        </section>
    );
}

export default Display;