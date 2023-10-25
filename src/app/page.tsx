import Image from "next/image";
import { getPosts } from "@/client/api";
import { Calendar } from "@/components/ui/ui/calendar";

const getData = async () => {
  const data = await getPosts({});
  return data;
};

// je moet ff snappen wat seachparam en params is

// WE GAAN NEXTUI VERWIJDEREN, SHIT LIBRARY

export default async function Home({ searchParams, params }) {
  const data = await getData();
  return (
    <div className="">
      {data.docs.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
      <Calendar />
    </div>
  );
}
