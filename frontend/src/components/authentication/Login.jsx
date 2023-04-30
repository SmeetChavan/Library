import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [email , setEmail] = useState("");
    const [pass , setPass] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if(email === "" || pass === ""){
            return alert("Please provide all the fields");
        }

        const user = {email , pass};

        const response = await fetch("/api/user/login" , {
            method: "POST",
            headers:{
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(user)
        })
        
        const json = await response.json();

        setEmail("");
        setPass("");

        if(!response.ok){
            return alert("Invalid credentials!");
        }

        alert("Login successful!");
        localStorage.setItem("authToken" , json.token);
        navigate('/');
    }

    return(
        <section className="container-fluid register">

            <form>

                <h3>Login</h3>

                <div>
                    <label htmlFor="email">Email:&nbsp;&nbsp;</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password">Password:&nbsp;&nbsp;</label>
                    <input type="text" id="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </div>

                <button type="submit" onClick={(e) => handleLogin(e)}>Login</button>
                <Link to="/register">New User?</Link>
            </form>

        </section>
    );
}

export default Login;