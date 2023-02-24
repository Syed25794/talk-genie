const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY
});
const openai = new OpenAIApi(configuration);
require("dotenv").config();

const generateImage=async(req,res)=>{
    const { text, number,size }=req.body;
    const response = await openai.createImage({
        prompt:text,
        n: Number( number ),
        size:size,
      });
      image_url = response.data.data[0].url;
    res.send({url:image_url});
};



module.exports = { generateImage };