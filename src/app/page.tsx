import Image from 'next/image'
import {Button} from "@nextui-org/react"
import {getPosts} from "@/client/api"

const getData = async () => {
  const data = await getPosts({  });
  return data
}

// je moet ff snappen wat seachparam en params is 



export default async function Home({searchParams, params}) {
  const data = await getData();
  return (
    <div className=''>
      <Button>kanker</Button>
    {data.docs.map((post) => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        
      </div>
    ))}
  </div>
  )
}

