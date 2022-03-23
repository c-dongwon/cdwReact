import React, { useState } from 'react';

const havyWork = () =>{
    console.log("무거운작업")
    return ["김개똥","김소똥"]
}
const Usestate = () => {
    const [name, setName] =useState(
        () =>{
            return havyWork();
        }
    );
    const [input, setInput] = useState("");
    const inputChange = (e) =>{
        setInput(e.target.value)
    }
    const onAdd = () =>{
        setName((prevState) =>{
            console.log(prevState)

                return(
                    [...prevState,input]
                )
            }
        );
    }
    return (
        <div>
            <input type="text" value={input} onChange={inputChange}/>
            <button onClick={onAdd}>update</button>
            {
                name.map((name, idx) =>{
                    return <p key={idx}>{name}</p>
                })
            }
        </div>
    );
};

export default Usestate;