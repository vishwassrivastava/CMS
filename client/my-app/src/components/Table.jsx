import React, { useState, useEffect } from "react";

import { Modal, Button, Table } from "@mantine/core";

import ModalContentForEdit from "./ModalContentForEdit.jsx";
import axios from "axios";



function Demo(props) {
   
 const deletePost = async (id) => {
  const response = await axios.delete(`http://localhost:8000/api/contacts/${id}`);
  
 await props.fetchData('http://localhost:8000/api/contacts/');

}


  useEffect(() => {
  

    props.fetchData("http://localhost:8000/api/contacts/");
  }, []);

  
  const rows = props.data.map((element, index) => (
    <tr key={String(index)}>
      <td>{element.name}</td>
      <td>{element.phoneno}</td>
      <td>{element.email}</td>
      
       
      <td>
        <Button onClick={props.open}  color="black">
          Edit
        </Button>
      </td>
      <td>
        <Button color="red" onClick = {() => deletePost(element._id)}>Delete</Button>
      </td>
      <Modal
        opened={props.opened}
        onClose={props.close}
        title="Authentication"
        type="Edit"
        centered
      
      >
        {<ModalContentForEdit contactId={element._id} close={props.close} fetchData={props.fetchData}/>}
      </Modal>
    </tr>
  ));

  return (
    <Table striped highlightOnHover withBorder withColumnBorders>
      <thead>
        <tr>
          <th>Contact Name</th>
          <th>Phone No</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default Demo;
