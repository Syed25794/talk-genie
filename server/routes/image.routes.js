const { Router } = require("express");
const { generateImage } = require("../actions/image.actions");
const ImageGenarationMiddlewares = require("../middlewares/imageGeneration.middleware");
const imageRoutes = Router();

imageRoutes.post("/generateImage",ImageGenarationMiddlewares,generateImage);

module.exports = imageRoutes;