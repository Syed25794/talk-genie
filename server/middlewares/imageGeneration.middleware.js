const ImageGenarationMiddlewares = async ( req, res , next )=>{
    const { text, size, number }=req.body;
    if( !text ){
        return res.send({message:"Text is required for generating an image."});
    }
    if( number < 1 || number > 10 ){
        return res.send({message:"Image number should be from 1 to 10."});
    }
    if( size !== "1024x1024" && size !== "256x256" && size !== "512x512" ){
        return res.send({message:"Image size should be either '1024x1024' or '512x512' or '256x256'."});
    }
    next();
}

module.exports = ImageGenarationMiddlewares;