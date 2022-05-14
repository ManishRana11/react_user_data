import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react';
import Add from './Add';
import UserList from './UserList';

function Home() {
    const [openadd, setOpenadd] = useState(false);
    const [openlist, setOpenlist] = useState(false);
    const handleAdd = (e) =>  {setOpenadd(true)};
    const handleList = (e) => {setOpenlist(true)};
    const closeAdd= (e) =>  {setOpenadd(false)};
    const closeList= (e) =>  {setOpenlist(false)};

  return (
    <div style={{ display: 'flex', padding: '150px' }}>
        <Button
            onClick={handleAdd} 
            style={{ border: '1px solid red', color: 'white', fontSize: '20px', backgroundColor: 'blue', margin: '100px' }}
        >
            Add User
        </Button>
        <Button
            onClick={handleList} 
            style={{ border: '1px solid blue', color: 'white', fontSize: '20px', backgroundColor: 'red', margin: '100px' }}
        >
            User List
        </Button>
        <Modal
            style={{ padding: '50px', border: '1px solid #faf8f2', margin: '50px', backgroundColor: '#faf8f2' }}
            open={openadd} 
            onClose={closeAdd}
        >
            <h3>Add User</h3>
            <Add/>
        </Modal>
        <Modal
            style={{ padding: '50px', border: '1px solid #faf8f2', margin: '50px' }}
            open={openlist} 
            onClose={closeList}
        >
            <h3>User List</h3>
            <UserList/>
        </Modal>
    </div>
  )
}

export default Home