import { getPost } from "@/client/api";

const getData = async (postId) => {
  const data = await getPost({ _id: postId });  
  return data;
};


export default async function Page({params,}: {params: { id: string };}) {
  const data = await getData(params.id);

  return (
    <div>
      My Post: {params.id}
    </div>
  );
}
