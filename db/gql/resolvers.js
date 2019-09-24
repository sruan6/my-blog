const { createWriteStream } = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const Post = require('../model/posts');
const Company = require('../model/companys');

const currentDate = new Date();

const date = currentDate.getDate();
const month = currentDate.getMonth(); // Be careful! January is 0 not 1
const year = currentDate.getFullYear();
const timestamp = currentDate.getTime();

const dateString = `${date}-${month + 1}-${year}-${timestamp}`;

const link = '../../client/public/images';
let uniqueid = uniqid();

const resolvers = {
  Query: {
    posts: () => Post.find({}),
    post: (_, { id }) => Post.findOne({ uniqueid: id }),
    companys: () => Company.find({}),
  },
  Mutation: {
    uploadFile: async (
      _,
      { file, title, genre, rating, diffculty, created }
    ) => {
      const postExist = await Post.findOne({
        uniqueid,
      });
      if (file === undefined) {
        if (!postExist) {
          await new Post({
            uniqueid,
            title,
            genre,
            rating,
            diffculty,
            created,
            dateString,
          }).save();
        } else {
          uniqueid = uniqid();
          await new Post({
            uniqueid,
            title,
            genre,
            rating,
            diffculty,
            created,
            dateString,
          }).save();
        }
      } else {
        const { createReadStream, filename } = await file;
        if (!postExist) {
          await new Post({
            uniqueid,
            profile_image: `${uniqueid}.png`,
            title,
            genre,
            rating,
            diffculty,
            created,
            dateString,
          }).save();
          await new Promise(res =>
            createReadStream()
              .pipe(
                createWriteStream(path.join(__dirname, link, `${uniqueid}.png`))
              )
              .on('close', res)
          );
        } else {
          uniqueid = uniqid();
          await new Post({
            uniqueid,
            profile_image: `${uniqueid}.png`,
            title,
            genre,
            rating,
            diffculty,
            created,
            dateString,
          }).save();
          await new Promise(res =>
            createReadStream()
              .pipe(
                createWriteStream(path.join(__dirname, link, `${uniqueid}.png`))
              )
              .on('close', res)
          );
        }
      }
      uniqueid = uniqid();
    },
    addCompany: async (_, { name, headquarter, founded }) => {
      const companyExist = await Company.findOne({ name });
      if (!companyExist) {
        const newCompany = await new Company({
          name,
          headquarter,
          founded,
        }).save();
        return newCompany;
      }
      return companyExist;
    },
  },
};

module.exports = resolvers;
