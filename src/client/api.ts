import { fetcher } from "@/client/fetcher";

export const getPosts = async (body) => {
    return fetcher('/api/post/getposts', body, 'POST');
}

export const getPost = async (body) => {
    return fetcher('/api/post/getpost', body, 'POST')
}


