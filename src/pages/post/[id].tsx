import { PostType as PostType } from "@/types/post";
import { getPost, getPostsTotal } from "@/services/posts";
import Head from "next/head";
import { FC } from "react";
import { isString } from "util";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import PageTransition from "@/components/PageTransition";

const Post = dynamic(() => import('@/components/Post'))

type Props = {
	post: PostType;
};

const PostPage: FC<Props> = ({ post }) => {
	return (
		<PageTransition>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.body} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Post post={post} />
		</PageTransition>
	)
};

export const getStaticProps: GetStaticProps = async (context) => {
	try {
		const id = context?.params?.id;

		if (!id || !isString(id)) {
			throw new Error("No post id provided");
		}

		const parsedId = parseInt(id);

		if (isNaN(parsedId) || parsedId < 1) {
			throw new Error(`Invalid post id: ${id}`);
		}

		const response = await getPost(parsedId);

		// If the post doesn't exist, throw an error
		if (response.status === 404) {
			throw new Error("Post not found");
		}

		const post = await response.json();

		return {
			props: {
				post,
				revalidate: 3600,
				page: 'post'
			},
		};
	} catch (error) {
		return {
			notFound: true,
			revalidate: 600,
		}
	}
}


export async function getStaticPaths() {
	const totalPosts = await getPostsTotal()
  
	// Get the paths we want to pre-render based on posts
	const paths = []
	for (let i = 1; i <= totalPosts; i++) {
		paths.push({
			params: { id: i.toString() }
		})
	}

	return { paths, fallback: 'blocking' }
}

export default PostPage;