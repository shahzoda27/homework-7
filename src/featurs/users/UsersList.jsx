import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addUser, fetchUsers, getAllUsers, updateUser, userDeleted } from './UsersSlice'
const UsersList = () => {
  const dispatch = useDispatch()
  useEffect (()=>{
    dispatch(fetchUsers())
  },[dispatch])
  const users = useSelector(getAllUsers)
  const handleSubmit =(e)=>{
    e.preventDefault()
    let payload ={
      name: e.target[0].value,
      username: e.target[1].value,
      email: e.target[2].value,
      phone: +e.target[3].value
  }
    dispatch(addUser({...payload}))
    dispatch(fetchUsers())
  }
  const editUser=(item)=>{
    let payload={
      id:item.id,
      name:"Gulasal",
      username:"Abdulhakimova",
      email:"gulasal@gmail.com",
      phone:1830099
    }
    dispatch(updateUser({...payload}))
    dispatch(fetchUsers())
  }
  const deleteUser=(id)=>{
   
    dispatch(userDeleted(id))
    dispatch(fetchUsers())
  }
  
  return (
    <div className='container'>
    <h1 className='text-center'>Users</h1>
    <button className='btn btn-info m-3'>Add User</button>
        
          <div className="col-md-8">
          <table className="table table-bordered">
          <thead>
            <tr>
              <th>T/R</th>
              <th> Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            users?.data?.map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button className='btn btn-success' onClick={()=>editUser(item)}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>deleteUser(item.id)}>Delete</button>
                </td>
              </tr>
            })
           }
          </tbody>
        </table>
          </div>
          <div className="col-md-4">
          <form  onSubmit={handleSubmit}>
          <input type="text" placeholder='name' className='form-control my-2' />
          <input type="text" placeholder='surname' className='form-control my-2' />
          <input type="email" placeholder='email' className='form-control my-2' />
          <input type="number"  placeholder='phone' className='form-control my-2' />
          <button type='submit' className='btn btn-primary'>Add User</button>
      </form>
          </div>
        </div>
  )
}

export default UsersList
