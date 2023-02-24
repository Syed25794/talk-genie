import React, { useState } from 'react'
import { Input , Image, Button } from '@chakra-ui/react'

const ImageGenaration = () => {
    const [query,setQuery]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const generateImage=async ()=>{
      try {
        let response = await fetch("http://localhost:8080/generateImage",{
          method:"POST",
          body:{text:query,number:1,size:"1024x1024"},
          headers:{"Content-Type":"application/json"}
        });
        let result = await response.json();
        console.log(result);
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