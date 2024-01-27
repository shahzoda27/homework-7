import React from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'
import { addUser, fetchUsers } from './UsersSlice'
import { useDispatch } from 'react-redux'
export default function UsersModal({open,toggle,user}) {
   const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name: e.target[0].value,
      username: e.target[1].value,
      email: e.target[2].value,
      phone: +e.target[3].value,
    };
    dispatch(addUser(payload));
    dispatch(fetchUsers()); // Add this line to update the user list
  };
  return (
    <Modal isOpen={open} toggle={toggle}>
    <ModalHeader>
      <h1>Add User</h1>
    </ModalHeader>
    <ModalBody>
      <form id='users' onSubmit={handleSubmit}>
          <input type="text" defaultValue={user.name} placeholder='name' className='form-control my-2' />
          <input type="text" defaultValue={user.username} placeholder='surname' className='form-control my-2' />
          <input type="email" defaultValue={user.email} placeholder='email' className='form-control my-2' />
          <input type="number" defaultValue={user.phone} placeholder='phone' className='form-control my-2' />
      </form>
    </ModalBody>
    <ModalFooter>
    <button type='submit' form='users' className='btn btn-primary'>Add User</button>

      {/*
          user !== "" ?
          <button type='submit' form='users' className='btn btn-success'>Edit User</button> :
          <button type='submit' form='users' className='btn btn-primary'>Add User</button>

  */}
    </ModalFooter>
  </Modal>

  )
}
