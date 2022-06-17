
import { useState } from 'react';
import UserBox from '../UserBox/index.js'


function UserList (props) {
    const setUsersList = props.setUsersList;
    const usersList = props.usersList;
    const [inputName, setInputName] = useState('')

    const handleNameChange = (name) => {
        setInputName(name)
    }

    console.log(usersList)
    return (
        <div>
            {
            usersList.map( user => 
            <UserBox user={user}/>
            )
        }  
        </div>
    )
}

export default UserList;