import Image from 'next/image'
import {getPosts} from "@/client/api"

const getData = async () => {
  const data = await getPosts({  });
  return data
}

// je moet ff snappen wat dit is 



export default async function Home({searchParams, params}) {
  const data = await getData();
  console.log(data)
  return (
    <div className=''>
    {data.docs.map((post) => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        
      </div>
    ))}
  </div>
  )
}

