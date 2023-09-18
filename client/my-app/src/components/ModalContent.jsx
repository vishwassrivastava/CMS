import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';

function ModalContent(props) {
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
   
  const postData = async (url, values) => {




   const response = await axios.post(url, {
        name: values.name,
         phoneno: values.phoneno,
        email: values.email
       

});





}


  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) =>{
    postData('http://localhost:8000/api/contacts/', values);
        form.setValues({});
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

export default ModalContent;