import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from './UserSlice';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

const AddUser =()=>{
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name:"",
        email:""
    });
    const navigate = useNavigate();
    const handleUser=()=>{
        setValues({name:"", email:""});
        dispatch(addUser({
            id:uuidv4(),
            name:values.name,
            email:values.email,
        }));
        navigate("/");
        const key='users';
        const value = values;
        localStorage.setItem(key, value);
    }

    return(
        <div className="max-w-xl mx-auto">
            <TextField 
                label="Name"
                value={values.name}
                onChange={(e)=>setValues({...values, name:e.target.value})}
                inputProps ={{type:"text", placeholder:"Your Full Name"}}
            />
             <TextField 
                label="Email"
                value={values.email}
                onChange={(e)=>setValues({...values, email:e.target.value})}
                inputProps ={{type:"Email", placeholder:"Your Email Address"}}
            />
            <div className="mt-6 ml-48">
             <Button onClick={handleUser}>Submit</Button>
            </div>
        </div>
    );
}

export default AddUser;