import gql from 'graphql-tag';

export const postsQuery = gql`
  {
    posts {
      uniqueid
      title
      profile_image
      diffculty
      genre
      rating
    }
  }
`;

export const postQuery = gql`
  query($id: String) {
    post(id: $id) {
      title
      genre
      rating
      diffculty
    }
  }
`;

export const uploadFileMutation = gql`
  mutation UploadFile(
    $file: Upload
    $title: String
    $genre: String
    $rating: String
    $diffculty: Int
    $created: String
  ) {
    uploadFile(
      file: $file
      title: $title
      genre: $genre
      rating: $rating
      diffculty: $diffculty
      created: $created
    ) {
      title
      genre
      rating
      diffculty
    }
  }
`;

export const ADD_GAME = gql`
  mutation($file: Upload!, $title: String!) {
    uploadFile(file: $file, title: $title)
  }
`;
