const typeDefs = `
  scalar Upload
  
  type Company {
    name: String
    headquarter: String
    founded: Int
    posts: [Post]
  }
  type Post {
    uniqueid: String
    profile_image: String
    title: String
    genre: String
    rating: String
    diffculty: Int
    created: String
    company: Company
  }
  type Query {
    posts: [Post]
    post(id: String): Post
    companys: [Company]
  }
  type Mutation {
    uploadFile(file: Upload, title: String, genre: String, rating: String, diffculty: Int, created: String): Post
    addCompany(name: String!, headquarter: String, founded: Int): Company
  }
`;
module.exports = typeDefs;
