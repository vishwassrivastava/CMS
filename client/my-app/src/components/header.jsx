import React, { useState,useEffect } from 'react';
import "./header.css";

import Search from './search.jsx';
import axios from "axios";
import { useDisclosure } from '@mantine/hooks';
import { Modal,  Button } from '@mantine/core';
import ModalContent from './ModalContent.jsx';

function Headerbar(props) {
const [opened, { open, close }] = useDisclosure(false);
 

   

  

  return (
    <div className='header'>
      <div className='header-left'>
       <h2>Contacts</h2>
       </div>
       <div className='header-right'>
          <Search/>          
         
            <Button onClick = {() => props.fetchData("http://localhost:8000/api/contacts/sort")} color="dark">sort</Button>
          <Button onClick={open}>add</Button>
     <Modal opened={opened} onClose={close} title="Authentication" centered>
        {<ModalContent close={props.close}/>}
      </Modal>

      </div>
    </div>
  )
}

export default Headerbar;
