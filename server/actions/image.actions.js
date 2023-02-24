const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey:"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"
});

const openai = new OpenAIApi(configuration);

const generateImage=(req,res)=>{
    const { text, number,size }=req.body;
    openai.createImage({
      prompt:text,
      n: +number,
      size:size,
    }).then((response)=>{
      res.send({data:response.data.data});
    })
    .catch((err)=>{
      res.send({error:err});
    });
};



module.exports = { generateImage };