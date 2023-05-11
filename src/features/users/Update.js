import React,{useState} from 'react';
import {editUser} from './UserSlice';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

const Update =()=>{
    const params = useParams();
    const dispatch = useDispatch();
    const users= useSelector(store => store.users);
    const existingUser = users.filter(user => user.id === params.id);
    const {name, email} = existingUser[0];
    const [values, setValues] = useState({
        name,
        email
    });
    const navigate = useNavigate();
    const handleUserUpdate=()=>{
        setValues({name:"", email:""});
        dispatch(editUser({
            id:params.id, 
            name:values.name,
            email:values.email,
        }))
        navigate("/");
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
             <Button onClick={handleUserUpdate}>Update</Button>
            </div>
        </div>
    );
}

export default Update;