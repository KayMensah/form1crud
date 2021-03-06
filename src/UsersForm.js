import React, { useState } from "react";

const UserForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gen, setGen] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                let newUser ={
                    name: name,
                    email: email,
                    gen: gen,
                };
        
            props.addUser(newUser);
            setName("");
            setEmail("");
            }}>
            
            <input type="text" placeholder="Name" value={name} 
             onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} 
             onChange={(e) => setEmail(e.target.value)}/>
            <input type="number" placeholder="Number" value={gen} 
             onChange={(e) => setGen(e.target.value)}/>
            <input  type="submit" />
        </form>
    
    );
};

export default UserForm;