const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey:process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage=async(req,res)=>{
    let { text, number,size }=req.body;
    if( !number ){
      number=1;
    }
    if( !size ){
      size='1024x1024';
    }
    try {
      let response = await openai.createImage({
        prompt:text,
        n: number,
        size:size,
      });
      res.send({data:response.data.data});
    } catch (error) {
      res.send({error});
    };
};



module.exports = { generateImage };