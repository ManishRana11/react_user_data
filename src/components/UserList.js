import { styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react';
import Add from './Add';

function UserList() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      function createData(id, first, last, group) {
        return { id, first, last, group };
      }
      
      const rows = [
        createData(1, "Arjun", "Singh", "Operator"),
        createData(2, "Deepak", "Kumar", "Administrator"),
        createData(3, "Aman", "Bisht", "Service"),
      ];

      const [openedit, setOpenedit] = useState(false);
      const handleEdit = (e) =>  {setOpenedit(true)};
      const closeEdit= (e) =>  {setOpenedit(false)};

  return (
    <div>
        <TableContainer>
            <Table aria-label='customized table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>User Id</StyledTableCell>
                        <StyledTableCell>First Name</StyledTableCell>
                        <StyledTableCell>Last Name</StyledTableCell>
                        <StyledTableCell>Group</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell onClick={handleEdit} style={{ color: 'blue' }} component="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell>{row.first}</StyledTableCell>
                            <StyledTableCell>{row.last}</StyledTableCell>
                            <StyledTableCell>{row.group}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Modal
            style={{ padding: '50px', border: '1px solid #faf8f2', margin: '50px' }}
            open={openedit} 
            onClose={closeEdit}
        >
            <h3>User Edit</h3>
            <Add/>
        </Modal>
    </div>
  )
}

export default UserList