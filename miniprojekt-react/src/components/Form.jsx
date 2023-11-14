import {useState} from 'react';

export default function Form() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit =  async (e) => {    
        e.preventDefault();
        const user = {name, username, email, age};

        resetForm();
        
            await fetch("http://localhost:5003/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)

            });
        
        };

    function resetForm() {
        setName("");
        setUsername("");
        setEmail("");
        setAge("");
    }


    return(
        <>
        <h2>Form coming soon?</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Navn:<input>
            </input>
            </label>
        </form>
        </>
        
    )
}


