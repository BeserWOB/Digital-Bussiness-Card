import React from "react";

export default function Info(){
    return(
        <div>
            <img src="img/ivan-profile-pic.jpeg" className="info--pic" alt="profile-pic"/>
            <h2 className="info--name">Ivan Beserminji</h2>
            <h3 className="info--job">Frontend Developer</h3>
            <a href="#" className="info--website">beserminjii.website</a>
            <button className="info--email-btn">E-mail</button>
            <button className="info--linkedin-btn">Linkedin</button>
        
        </div>
        
    ) 
}