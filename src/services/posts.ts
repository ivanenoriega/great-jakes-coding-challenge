export const MAX_POST_PER_PAGE = 10;

/**
 * getPosts returns a list of posts from the dummyjson.com API.
 * example: https://dummyjson.com/posts?skip=0&limit=10
 * @param page 
 * @returns 
 */
export const getPosts = async (page: number) => {
	const skip = (page - 1) * MAX_POST_PER_PAGE
	return fetch(`https://dummyjson.com/posts?skip=${skip}&limit=${MAX_POST_PER_PAGE}`, { next: { revalidate: 3600 } })
}

/**
 * getPostsTotal returns the total number of posts from the dummyjson.com API.
 * example: https://dummyjson.com/posts?skip=0&limit=10
 * @param page 
 * @returns 
 */
export const getPostsTotal = async () => {
	try {
		const response = await fetch(`https://dummyjson.com/posts`)
		const data = await response.json()
		return data.total as number
	} catch (error) {
		throw new Error('There was an while retrieving the total number of posts')
	}
}

/**
 * getPost returns a single post from the dummyjson.com API.
 * example: https://dummyjson.com/posts/1
 * @param id
 * @returns 
 */
export const getPost = async (id: number) => {
	return fetch(`https://dummyjson.com/posts/${id}`)
}