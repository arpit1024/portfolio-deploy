import React from 'react'
import "./Skills.css"
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const Skills = () => {
    return (
        <div className="skills-container" id='skills'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
            </style>
           
            <h1>Tech Skills</h1>
            <div className="aboutContent">
                <div className="iconsContainer">
                    <Slide left>
                    <div className="icon" >
                        <img src="favicon.ico" alt="react" width="90px" height="90px"/>
                        <p>React</p>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="icon">
                        <img src="javascript.png" alt="react" width="90px" height="90px"/>
                        <p>JavaScript</p>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="icon">
                        <img src="html.png" alt="react" width="90px" height="90px"/>
                        <p>HTML</p>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="icon">
                        <img src="css.png" alt="react" width="90px" height="90px"/>
                        <p>CSS</p>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="icon">
                        <img src="redux.svg" alt="react" width="90px" height="90px"/>
                        <p>Redux</p>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="icon">
                        <img src="nodejs.png" alt="react" width="90px" height="90px"/>
                        <p>Node js</p>
                    </div>
                    </Slide>   
                    <Slide right>
                    <div className="icon">
                        <img src="mysql.svg" alt="react" width="90px" height="90px"/>
                        <p>MySQL</p>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="icon">
                        <img src="mongodb.png" alt="react" width="90px" height="90px"/>
                        <p>MongoDB</p>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="icon">
                        <img src="https://camo.githubusercontent.com/8d56e87edf99e89bfc457cd62462e0b7aae19e6b197b1df5c542d474d8d76f81/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67" alt="react" width="90px" height="90px"/>
                        <p>C# Language</p>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="icon">
                        <img src="expressjs-ar21.svg" alt="react" width="90px" height="90px"/>
                        <p>Express Js</p>
                    </div>
                    </Slide>
                </div>
                <h2 style={{textDecoration:"underline", marginTop:"40px"}}>Proficiencies</h2>
                <div className="iconsContainer1">
                    <Bounce bottom>
                    <div className="icon">
                        <img src="frontend.png" alt="react" width="90px" height="90px"/>
                        <p>Frontend</p>
                    </div>
                    <div className="icon">
                        <img src="backend.png" alt="react" width="90px" height="90px"/>
                        <p>Backend</p>
                    </div>
                    <div className="icon">
                        <img src="ds.png" alt="react" width="90px" height="90px"/>
                        <p>Data Structures <br/> & Algorithms</p>
                    </div>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}

export default Skills
