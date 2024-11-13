// import { useState } from 'react'
import {useQuery, gql} from '@apollo/client';

const GETALLPOSTS = gql`
  query GetAllPosts {
    getAllPosts {
      _id
      body
      title
      pet {
        name
      }
    }
  }
`;

function App() {
  const {data, error} = useQuery(GETALLPOSTS);

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  return (
    <>
      {data && data.getAllPosts.map((post: any) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Added By: {post.pet.name}</p>
        </div>
      ))}
    </>
  )
}

export default App
