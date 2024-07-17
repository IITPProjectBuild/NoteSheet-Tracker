"use client"
import React, { useState } from 'react';
import { Container, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, IconButton } from '@mui/material';


const Notesheet = () => {
  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState({
    description: '',
    justification: '',
    quantity: '',
    rate: '',
    value: ''
  });

  const calculateTotalAmount = () => {
    return rows.reduce((total, row) => total + Number(row.value || 0), 0);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (index !== undefined) {
      const updatedRows = [...rows];
      updatedRows[index] = { ...updatedRows[index], [name]: value };
      setRows(updatedRows);
    } else {
      setNewRow({ ...newRow, [name]: value });
    }
  };

  const handleAddRow = () => {
    setRows([...rows, newRow]);
    setNewRow({
      description: '',
      justification: '',
      quantity: '',
      rate: '',
      value: ''
    });
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    // Add your save functionality here. For example:
    console.log("Form data:", { rows });
    alert("Form saved successfully!");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }} className='flex align-center flex-col justify-center'>
      <div className='flex justify-center'>
        <Typography variant="h4" gutterBottom>
          INDIAN INSTITUTE OF TECHNOLOGY PATNA
        </Typography>
      </div>
      <div className='flex justify-center'>
        <Typography variant="h5" style={{ marginTop: '20px' }} gutterBottom>
          Stores and Purchase Section
        </Typography>
      </div>
      <div className='flex justify-center'>
        <Typography variant="h6" style={{ marginTop: '20px' }} gutterBottom>
          Purchase Indent
        </Typography>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="Name of Indentor" variant="outlined" margin="none" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Designation" variant="outlined" margin="none" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Department" variant="outlined" margin="none" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Accounting Head" variant="outlined" margin="none" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Category" variant="outlined" margin="none" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Fund Code" variant="outlined" margin="none" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Indent Ref No" variant="outlined" margin="none" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Date" variant="outlined" margin="none" />
        </Grid>
      </Grid>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Justification</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField name="description" value={row.description} onChange={(e) => handleChange(e, index)} />
                </TableCell>
                <TableCell>
                  <TextField name="justification" value={row.justification} onChange={(e) => handleChange(e, index)} />
                </TableCell>
                <TableCell>
                  <TextField name="quantity" value={row.quantity} onChange={(e) => handleChange(e, index)} />
                </TableCell>
                <TableCell>
                  <TextField name="rate" value={row.rate} onChange={(e) => handleChange(e, index)} />
                </TableCell>
                <TableCell>
                  <TextField name="value" value={row.value} onChange={(e) => handleChange(e, index)} />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteRow(index)}>
                   DELETE
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField name="description" value={newRow.description} onChange={handleChange} />
              </TableCell>
              <TableCell>
                <TextField name="justification" value={newRow.justification} onChange={handleChange} />
              </TableCell>
              <TableCell>
                <TextField name="quantity" value={newRow.quantity} onChange={handleChange} />
              </TableCell>
              <TableCell>
                <TextField name="rate" value={newRow.rate} onChange={handleChange} />
              </TableCell>
              <TableCell>
                <TextField name="value" value={newRow.value} onChange={handleChange} />
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" onClick={handleAddRow} style={{ marginTop: '20px' }}>
        Add Row
      </Button>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Total Amount: ₹ {calculateTotalAmount()}
      </Typography>

      <Button variant="contained" color="secondary" onClick={handleSave} style={{ marginTop: '20px' }}>
        Save
      </Button>
      
    </Container>
  );
};

export default Notesheet;
