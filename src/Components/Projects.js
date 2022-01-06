import React from "react";
import "./Projects.css";
import Flip from 'react-reveal/Flip';
import Modal from '@material-ui/core/Modal';
import {Paper} from "@material-ui/core"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-reveal/Zoom';


const project = [
    {
        title : "Jiomart Clone",
        desc : "The online grocery, cloth and many other household items service operated by Reliance Retail and Jio Platforms.",
        img: "jiomart.png",
        tech : ["html.png", "css.png", "javascript.png", "es6.svg"],
        repo: "https://github.com/vaibhavkothiyal/jiomartClone.github.io",
        demo: " ",
        live: "https://vaibhavkothiyal.github.io/jiomartClone.github.io/html/Index.html"
        // blog: "https://lokesh-nimje.medium.com/a-project-on-cloning-of-new-york-times-website-5d8ddc20edad"

    },
    {
        title : "HealthKart Clone",
        desc : "HealthKart- a great place for people serious about health and fitness.",
        img: "healthkart.png",
        tech : ["html.png", "css.png", "javascript.png", "es6.svg","Mongodb1.png","express.png"],
        repo: "https://github.com/Dhruvkagrawal/HealtKart.com-Clone",
        demo: "healthKartDemo.mp4",
        live: "https://hemantjayas.github.io/HealthKart/index.html",
        // blog: "https://lokesh-nimje.medium.com/a-project-on-cloning-of-sugar-cosmetic-website-5d6b58fca406"
    },
     
];

const Projects = () => {

    const [open, setOpen] = React.useState(false);

    const [video, setVideo] = React.useState("");


    const handleOpen = (vid) => {
        setVideo(vid)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="pro-wrapper" id="projects">
             <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
            </style>
            <h1  style={{fontFamily: 'Raleway, sans-serif'}}>My Projects</h1>
            <div className= "pro-container">
                {project.map((e) => (
                    <>
                    <Flip left>
                        <div className= "card">
                            <img className= "image" src={e.img} alt="project"/>
                            <div className= "text">
                                <h2>{e.title}</h2>
                                <p>{e.desc}</p>
                            </div>
                            <div className= "hoverDiv">
                                <div className= "buttons">
                                    <button onClick={() => window.open(`${e.repo}`,"_blank")}>View in GitHub</button>
                                    <button onClick={()=>handleOpen(e.demo)}>Watch Video</button>
                                    <button onClick={() => window.open(`${e.live}`,"_blank")}>Run Demo</button>
                                </div>
                                <div>
                                    <h4 style={{fontSize:"large"}}>Tech Stack</h4>
                                    <div className= "tech">
                                        {e.tech.map((image) => (
                                            <div style={{margin:"0 10px"}}>
                                                <img src={image} alt={image} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Flip>
                        <Modal open={open} onClose={handleClose} >
                            <Paper className= "paper">
                            <video className= "video" controls> 
                                <source src={video} type="video/mp4"/>
                            </video>
                            </Paper>
                        </Modal>
                    </>
                ))}
            </div>
        </div>
    );
};

export default  Projects ;
