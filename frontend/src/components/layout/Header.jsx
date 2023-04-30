import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleLogOut = () => {
        
        localStorage.clear();
        alert("Logged out successfully!");
        navigate("/login");
    }

    const navigateLogin = () => {
        navigate("/login");
    }

    return(
        <header>

            <div>
                <Link to="/">BookieWeb</Link>
            </div>

            {localStorage.getItem("authToken") ?

                <button onClick={() => handleLogOut()} className="btn btn-warning">Logout</button>
                : 
                <button onClick={() => navigateLogin()} className="btn btn-primary">Login</button>
            }

        </header>
    );
}

export default Header;