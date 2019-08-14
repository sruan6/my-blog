const { createWriteStream } = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const Post = require('../model/posts');

const link = '../../client/public/images';
let uniqueid = uniqid();

const resolvers = {
  Query: {
    posts: () => Post.find({}),
  },
  Mutation: {
    uploadFile: async (_, { file, title }) => {
      const { createReadStream, filename } = await file;

      const pictureExist = await Post.findOne({
        uniqueid,
      });
      if (!pictureExist) {
        await new Post({
          uniqueid,
          title: filename,
          profile_image: `${uniqueid}.png`,
        }).save();

        await new Promise(res =>
          createReadStream()
            .pipe(
              createWriteStream(path.join(__dirname, link, `${uniqueid}.png`))
            )
            .on('close', res)
        );
      } else {
        // if id exist genrerate new id then make file
        uniqueid = uniqid();
        await new Post({
          uniqueid,
          title: filename,
          profile_image: `${uniqueid}.png`,
        }).save();

        await new Promise(res =>
          createReadStream()
            .pipe(
              createWriteStream(path.join(__dirname, link, `${uniqueid}.png`))
            )
            .on('close', res)
        );
      }
      uniqueid = uniqid();
      return true;
    },
  },
};

module.exports = resolvers;
