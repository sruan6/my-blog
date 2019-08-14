const typeDefs = `
  scalar Upload
  
  type Company {
    headquarter: String
    found: Int
    posts: [Post]
  }
  type Post {
    profile_image: String
    title: String
    genre: String
    rating: String
    company: Company
  }
  type Query {
    posts: [Post]
  }
  type Mutation {
    uploadFile(file: Upload!, title: String): Post!
  }
`;
module.exports = typeDefs;
