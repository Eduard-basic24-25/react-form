import { useState } from "react";
import UserList from "../UserList";



function UserBox (props, {onChange}) {
    const [isEditing , setIsEditing] = useState(false)
    const [inputName, setInputName] = useState(props.user.name)
    const [inputSurname, setInputSurname] = useState(props.user.surname)
    const [inputPhoneNumber, setInputPhoneNumber] = useState(props.user.tel)
    const [inputEmail, setinputEmail] = useState(props.user.email)

    const handleNameChange = (event) => {
            onChange(event.target.value)
    }
    return (
        <div>
            <input 
                type="text" 
                value={inputName}
                onChange={(event) => setInputName(event.target.value)}
                // onChange={handleNameChange}
                disabled={!isEditing}
                
            />
            <input 
                type="text" 
                value={inputSurname} 
                onChange={(event) => setInputSurname(event.target.value)}
                disabled={!isEditing}
            />
            <input 
                type="text" 
                value={inputPhoneNumber} 
                onChange={(event) => setInputPhoneNumber(event.target.value)}
                disabled={!isEditing}
            />
            <input 
                type="text" 
                value={inputEmail} 
                onChange={(event) => setinputEmail(event.target.value)}
                disabled={!isEditing}
            />
            <button
                onClick={() => setIsEditing(!isEditing)}
                >Edit
            </button>
            <button
                onClick={() => setIsEditing(!isEditing)}
                >Save
            </button>
           
        </div>
    )
}


export default UserBox;