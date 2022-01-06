import React from 'react'
import "./Contect.css"
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import emailjs from "emailjs-com"
import {useState} from 'react'
import {TextField, Button} from "@material-ui/core"

const Contact = () => {
 
    const medium = () => {
        window.open("https://medium.com/@arpitshrivastava764","_blank")
    }
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/arpit-shrivastava-0a5227218/","_blank")
    }
    const github = () => {
        window.open("https://github.com/arpit1024", "_blank")
    }

    const sendEmail = (e)=> {
        e.preventDefault();
         emailjs.sendForm('service_k0m5f0i','template_8nyadqe',e.target,'user_CXpNrZCPiYQuQglQ0TcPd').then(res =>console.log(res))
          alert("Thank you for contacting me !")
      }
     
    return (
        <div className="con-container" id='contact'>
             <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
            </style>
            <h1 style={{paddingBottom:"30px"}}>Contact Me</h1>
            <div className="con-wrapper">
                <Bounce right>
                    <div className="con-box">
                        <div className="small">
                            <p>If you are an employer looking for a dedicated web developer, feel free to drop me a message.</p>
                        </div>
                        <div className="big">
                            <form onSubmit={sendEmail}>
                                <input className="input" type="text" placeholder="Name" name="name" /> <br/>
                                <input className="input" type="email" placeholder="Email" name="email" /> <br/>
                                <input className="input" type="text" placeholder="Organization" name="org" /> <br/>
                                <textarea className="input" placeholder="Enter your Message here" name="message"></textarea>
                                <input className="submit" type="submit" value="SUBMIT" />
                            </form> 
                        </div>
                    </div>
                </Bounce>
                <Bounce left>

                    <div className="con-box">
                        <div  className="big">
                            <table>
                                <tr>
                                    <td>Name:</td>
                                    <td>Arpit Shrivasatava</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>arpitshrivastava764@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>(+91) 7389821887</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td>BHOPAL, Madhya Pradesh, India</td>
                                </tr>
                            </table>
                        </div>
                        <div  className="small">
                            <h4 style={{textDecoration:"underline"}}>Get In Touch </h4>
                            <div style={{display:"flex", justifyContent:"center", marginBottom:"5px"}}>
                                <button className="tooltip" onClick={() => github()}>
                                    <img style={{margin:"0 4px", cursor:"pointer"}} src="github1.png" alt="github" width="25px"/>
                                    <span className="tooltiptext">GitHub</span>
                                </button>
                                <button className="tooltip" onClick={() => linkedin()}>
                                    <img style={{margin:"0 4px", cursor:"pointer"}} src="linkedin.png" alt="linkedin" width="25px"/>
                                    <span className="tooltiptext">Linkedin</span>
                                </button>
                                <button className="tooltip" onClick={() => medium()}>
                                    <img style={{margin:"0 4px", cursor:"pointer"}} src="medium.png" alt="Medium" width="25px"/>
                                    <span className="tooltiptext">Medium</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>
          
        <hr/>
            <div>
                <p className="footer">Developed by <span style={{fontWeight:"bolder"}}>Arpit Shrivastava</span> </p>
               
            </div> 
        </div>
    )
}

export default Contact
