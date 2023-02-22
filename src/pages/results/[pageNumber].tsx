import { MAX_POST_PER_PAGE, getPosts, getPostsTotal } from '@/services/posts'
import { PostListType as PostListType } from '@/types/post'
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import { isString, isUndefined } from 'util'
import dynamic from 'next/dynamic'
import PostPagination from '@/components/PostPagination';
import PageTransition from '@/components/PageTransition';

const PostList = dynamic(() => import('@/components/PostList'))

type Props = {
	posts: PostListType
	pagination: {
		count: number
		page: number
	}
}

const Home: FC<Props> = ({ posts, pagination }) => {
	return (
		<PageTransition>
			<Head>
				<title>Great Jakes - Coding Challenge</title>
				<meta name="description" content="Coding Challenge for Great Jakes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Stack
				gap={1}
			>
				<Typography variant="h1">Posts</Typography>
				<PostList posts={posts} />
				<PostPagination pagination={pagination} />
			</Stack>
		</PageTransition>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	try {
		let page = 0
		const pageNumber = context?.params?.pageNumber
		if (isString(pageNumber) && !isUndefined(pageNumber)) {
			page = parseInt(pageNumber)
		}
		const response = await getPosts(page)
		const { posts, total, limit } = await response.json()
		const pagination = {
			count: Math.floor(total / limit),
			page
		}

		return {
			props: {
				posts,
				pagination,
				page: `result_${page}`
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}

}

export async function getStaticPaths() {
	const totalPosts = await getPostsTotal()
	const totalPages = Math.floor(totalPosts / MAX_POST_PER_PAGE)

	// Get the paths we want to pre-render based on posts
	const paths = []
	for (let i = 1; i <= totalPages; i++) {
		paths.push({
			params: { pageNumber: i.toString() }
		})
	}

	return { paths, fallback: 'blocking' }
}

export default Home
