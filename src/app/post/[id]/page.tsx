import { getPost } from "@/client/api";
import { useEffect } from "react";

const getData = async (postId) => {
  const data = await getPost({ _id: postId});
  console.log(data)  
  return data;
};



export default async function Page({params,}: {params: { id: string };}) {
  const data = await getData(params.id);
  return (
    <div>
      <h1>My Post: {data.title}</h1>
      <p>Content: {data.content}</p>
      <p>Author ID: {data.author_id._id}</p>
      <p>Author Name: {data.author_id.name}</p>
      <p>Author Email: {data.author_id.email}</p>
      <p>Status: {data.status}</p>
      <p>Tags: {data.tags.join(', ')}</p>
      <p>Created At: {data.createdAt}</p>
      <p>Updated At: {data.updatedAt}</p>

  </div>
  );
}
