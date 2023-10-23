import { fetcher } from "@/client/fetcher";

export const getPosts = async (body) => {
    return fetcher('/api/post/getposts', body, 'POST');
};


