const Jimp = require("jimp");
const {HttpError} = require("../helpers");

const imageResize = async (req, res, next) => {
  try {
    const { path } = req.file;
    //console.log(req.file);
    const image = await Jimp.read(path);
    await image.resize(250, 250).quality(100).writeAsync(path);
    next();
  } catch (error) {
    next(HttpError(400, "Avatar file not transferred!"));
  }
};

module.exports = imageResize;
