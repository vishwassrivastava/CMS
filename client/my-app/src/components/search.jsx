import { Input } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';


function Search() {

 const form = useForm({
    initialValues: {
      searchValue: '',
      
    },

    
  });

  const searchData = async (searchValue) => {
    const response = await axios.post('http://localhost:8000/api/contacts/search', {
        "searhInput": "sriram"
   
}) 

 console.log(response.data);

}


  return (
    <>
    <form style={{display: 'flex'}} onSubmit = {form.onSubmit((values) =>{
      searchData("hello");
   
})} >
   
     
  <Input
    
      placeholder="Search contacts"
      size="s"
       {...form.getInputProps('searchValue')}
    />
    <button type="submit">Search</button>

</form>
    
</>
  );
}

export default Search;