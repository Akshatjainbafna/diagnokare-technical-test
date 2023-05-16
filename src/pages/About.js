import React from "react";
import Navbar from "../components/Navbar.component";


export default  function About(){
    var members = [{
        name: "Ashley Bell",
        profile: 'CEO'
    },
    {
        name: "Ashley Bell",
        profile: 'CEO'
    },
    {
        name: "Ashley Bell",
        profile: 'CEO'
    }]
    return (
        <>
        <Navbar />
        {members.map(( member, index) => 
            <div key={index}>
                <p>
                    {member.name}
                </p>
                <p>
                    {member.profile}
                </p>
            </div>
        )}
        </>
    )
}