import { getPosts } from '@/services/posts'
import { PostListType as PostListType } from '@/types/post'
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import { isString } from 'util'
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

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await getPosts(1)
		const { posts, total, limit } = await response.json()
		const pagination = {
			count: Math.floor(total / limit),
			page: 1
		}

		return {
			props: {
				posts,
				pagination,
				page: 'home'
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}

}

export default Home
