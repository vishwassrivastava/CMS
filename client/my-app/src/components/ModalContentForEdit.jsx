import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import React from "react";

function ModalContentForEdit(props) {
  
   const [data,setData]=React.useState();
  const form = useForm({
    initialValues: {
      email: '',
      name:'',
     phoneno:''
      
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
   
  const updateData = async (url, values) => {




   const response = await axios.put(url, {
        name: values.name,
         phoneno: values.phoneno,
        email: values.email
       

});

console.log(response.data);



}


  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) =>{
    updateData(`http://localhost:8000/api/contacts/${props.contactId}`, values);
        form.setValues({});
props.fetchData("http://localhost:8000/api/contacts/");
       props.close();
      

} )}



>
        <TextInput
          withAsterisk
          label="name"
          placeholder="Your name"
          {...form.getInputProps('name')}
         
        />
        <TextInput
          withAsterisk
          label="phone"
          placeholder="Phone no"
            {...form.getInputProps('phoneno')}
     
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
       


        <Checkbox
          mt="md"
          label="I agree by the policies"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
           
          <Button type="submit">Add</Button>
        </Group>
      </form>
    </Box>
  );
}

export default ModalContentForEdit;