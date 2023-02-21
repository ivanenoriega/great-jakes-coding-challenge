import { getPosts } from '@/services/posts'
import { PostListType as PostListType } from '@/types/post'
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import { isString } from 'util'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import PostPagination from '@/components/PostPagination';

const PostList = dynamic(() => import('@/components/PostList'))

type Props = {
	posts: PostListType
	pagination: {
		count: number
		page: number
	}
}

export const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
}

const Home: FC<Props> = ({ posts, pagination }) => {
	return (
		<>
			<Head>
				<title>Great Jakes - Coding Challenge</title>
				<meta name="description" content="Coding Challenge for Great Jakes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Stack
				gap={1}
				component={motion.div}
				variants={variants}
				initial="hidden"
				animate="enter"
				exit="exit"
				transition={{ type: 'linear' }}
			>
				<Typography variant="h1">Posts</Typography>
				<PostList posts={posts} />
				<PostPagination pagination={pagination} />
			</Stack>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		let page = 0
		if (isString(context.query.page)) {
			page = parseInt(context.query.page)
		}
		const response = await getPosts(page)
		const { posts, total, limit } = await response.json()
		const pagination = {
			count: Math.floor(total / limit),
			page
		}

		context.res.setHeader(
			'Cache-Control',
			'public, s-maxage=10, stale-while-revalidate=59'
		)

		return {
			props: {
				posts,
				pagination,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}

}

export default Home
