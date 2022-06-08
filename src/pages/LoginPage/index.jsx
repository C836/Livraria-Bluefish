import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import "./styles.css";
import background from "../../background.png"

const LoginPage = () => {
    const { authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password });

        login(email, password);
    };

    return (
        <div id="login">
            <div className= "background">
                <div></div>
            </div>
            <h1 className="title">
                Login
            </h1>
            <p> {String(authenticated)} </p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="actions">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage
