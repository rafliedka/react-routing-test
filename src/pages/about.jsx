import logo from "../logo.svg";
import "../App.css";

function About() {
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"></img>
                <p>
                    Iki halaman About
                </p>
            </header>
        </div>
    )
}

export default About;