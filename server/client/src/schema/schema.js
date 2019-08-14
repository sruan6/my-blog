import gql from 'graphql-tag';

// const postsQuery = gql`
//   {
//     posts {
//       title
//       author {
//         firstName
//       }
//     }
//   }
// `;

export const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!, $title: String) {
    uploadFile(file: $file, title: $title) {
      profile_image
    }
  }
`;

export const ADD_GAME = gql`
  mutation($file: Upload!, $title: String!) {
    uploadFile(file: $file, title: $title)
  }
`;
