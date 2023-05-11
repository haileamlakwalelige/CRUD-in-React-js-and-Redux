import React from 'react';
import {deleteUser} from './UserSlice';
import {useSelector, useDispatch} from 'react-redux';
import {BiEditAlt} from 'react-icons/bi';
import {BsTrash} from 'react-icons/bs';
import Button from '../../components/Button'
import {Link} from 'react-router-dom';

const UserList =()=>{
    const users= useSelector(store => store.users);
    const dispatch = useDispatch();
    const handleRemove =(id)=>{
        dispatch(deleteUser({id:id}));
    }
      const usersList =()=>(
        <div className="max-w-[600px] justify-center items-center">
        <h1 className="font-bold font-serif text-2xl my-4 text-center">User List With CRUD operation</h1>
       <Link to="/add"> <Button>Add User</Button></Link>
        {users.map(user =>(
            <div className="gap-2 grid-cols-1 list-none grid" key={user.id}>
            <div   className="text-black font-serif bg-gray-400  my-4 rounded-lg h-20 items-center pt-3">
            <div className="flex justify-between">
                <div>
                <li className="pl-4 font-bold text-lg">{user.name}</li>
                <li className="pl-4 font-normal">{user.email}</li>
                </div>
                <div className="flex justify-between pr-6 pt-4">
            <Link to={`edit/${user.id}`}>    
                <BiEditAlt  className="font-bold text-3xl mr-3 text-black hover:text-red-700 hover:text-5xl"/>
                </Link>
                <BsTrash onClick={()=> handleRemove(user.id)}  className="font-bold text-3xl ml-2 text-black hover:text-red-700 hover:text-5xl"/>
                </div>
                </div>
            </div>
            </div>
        ))}   
        </div>
      )
    return(
        <div>
        <div>
            {users.length ? usersList() 
            :
             (<p className="font-bold my-32 font-serif text-gray-700 text-3xl">No User List</p>)}
        </div>
        </div>
    );
}

export default UserList;