import React, { useState } from 'react'
import { Input , Image, Button } from '@chakra-ui/react'

const ImageGenaration = () => {
    const [query,setQuery]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const generateImage=()=>{
      console.log(query);
      setImageUrl(query);
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