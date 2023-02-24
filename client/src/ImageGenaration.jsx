import React, { useState } from 'react'
import { Input , Image, Button } from '@chakra-ui/react'

const ImageGenaration = () => {
    const [query,setQuery]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const generateImage=async ()=>{
      const data ={
        text:query
      }
      setQuery("");
      try {
        let response = await fetch("http://localhost:8080/generateImage",{
          method:"POST",
          body:JSON.stringify(data),
          headers:{"Content-Type":"application/json"}
        });
        console.log(response);
        let result = await response.json();
        setImageUrl(result.data[0].url);
        console.log(result.data[0].url);
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
        <Input marginTop="20px" w="850px" type="text" placeholder="Generate Image with text" name="ImageText" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <br />
        <Button marginTop="20px" variant="solid" colorScheme="blue" onClick={generateImage}>Generate Image</Button> 
        <Image src={imageUrl} alt={query} />
    </div>

  )
}

export default ImageGenaration