import React from "react";
import "./Home.css"
 


const Home = () => {
    const resume = () => {
        window.open("https://drive.google.com/file/d/1H9Gia8KyZW-VxmPnBbsnjhEcnpCLFEBs/view?usp=sharing", "_blank")
    }
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/arpit-shrivastava-0a5227218/", "_blank")
    }
    const github = () => {
        window.open("https://github.com/arpit1024", "_blank")
    }

    return (
        <>
            <div className="hom-container" id="home">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
                </style>
                <img style={{ borderRadius: "100%" }} src="arpit.jpg" alt="profile" width="23%" />
                <div className= "hom-box">
                    <h4>Hello, I'm <br /> <span className="name">Arpit Shrivastava</span> </h4>
                    <h4>I'm a full-stack web developer.</h4>
                    <p>I am passionate about building challenging projects and excelling in their development, and looking forward to create a mark for myself as a Software Developer.</p>
                    <div className="social">
                        <button className="tooltip" onClick={() => github()}>
                            <img style={{ margin: "0 4px", cursor: "pointer" }} src="github1.png" alt="github" width="35px" />
                            <span className="tooltiptext">GitHub</span>
                        </button>
                        <button className="tooltip" onClick={() => linkedin()}>
                            <img style={{ margin: "0 4px", cursor: "pointer" }} src="linkedin.png" alt="linkedin" width="35px" />
                            <span className="tooltiptext">Linkedin</span>
                        </button>
                        <a className="homeBtns" href="Arpit_Shrivastava_Resume.pdf" download="Arpit_Shrivastava_Resume">
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home