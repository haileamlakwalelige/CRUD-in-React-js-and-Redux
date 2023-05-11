import {createSlice} from '@reduxjs/toolkit';
const initialState=[
    {  id:1, name:"Bereket", email:"bereket@gmail.com", },
    {  id:2, name:"Selemon", email:"selelmon@gmail.com", },
  ]

  const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state, action)=>{
            state.push(action.payload);
        },
        editUser:(state, action)=>{
            const {id, name, email} = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser){
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUser:(state, action)=>{
            const {id } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser){
                return state.filter(user => user.id !== id)
            }
        }
    },
  });

  export const {addUser, editUser, deleteUser} = userSlice.actions;
  export default userSlice.reducer

 