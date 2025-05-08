import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
            if (response && response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
                console.log(response.data);
            }
            else {
                navigate('/');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form>
                                <h4>
                                    LOG<span>IN</span>
                                </h4>
                                <div className="form-row ">
                                    <div className="form-group col-lg-5">
                                        <label for="inputPatientName">Email</label>
                                        <input type="text" onChange={(event) => setEmail(event.target.value)} className="form-control" id="inputPatientName" placeholder="yourmail@gmail.com" />
                                    </div>
                                    <div className="form-group col-lg-5">
                                        <label for="inputPatientName">Password</label>
                                        <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" id="inputPatientName" placeholder="XXXXXXXXX" />
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="submit" onClick={()=>login(event)} className="btn ">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}