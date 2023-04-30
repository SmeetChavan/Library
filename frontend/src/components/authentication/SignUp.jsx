import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate();

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [pass , setPass] = useState("");
    const [conpass , setConpass] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        if(name === "" || email === "" || pass === ""){
            return alert("Please pass all the fields");
        }
        if(pass !== conpass){
            return alert("Password and Confirm Password doesn't match");
        }

        const user = {name , email , pass};

        const response = await fetch("/api/user/add" , {
            method: "POST",
            headers:{
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(user)
        })

        if(response.ok){
            alert("Registered Successfully! Please login..");
            navigate("/login");
        }
        else{
            alert("Failed to register!");
        }

        setName("");
        setEmail("");
        setPass("");
        setConpass("");
    }


    return(
        <section className="container-fluid register">

            <form>

                <h3>Register</h3>

                <div>
                    <label htmlFor="name">Name:&nbsp;&nbsp;</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="email">Email:&nbsp;&nbsp;</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password">Password:&nbsp;&nbsp;</label>
                    <input type="text" id="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="cpassword">Confirm Password:&nbsp;&nbsp;</label>
                    <input type="text" id="cpassword" value={conpass} onChange={(e) => setConpass(e.target.value)}/>
                </div>

                <button type="submit" onClick={(e) => handleRegister(e)}>Register</button>
            </form>

        </section>
    );
}

export default SignUp;