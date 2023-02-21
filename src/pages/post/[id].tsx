import { PostType as PostType } from "@/types/post";
import { getPost } from "@/services/posts";
import Head from "next/head";
import { FC } from "react";
import { isString } from "util";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const Post = dynamic(() => import('@/components/Post'))

type Props = {
	post: PostType;
};

const PostPage: FC<Props> = ({ post }) => {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.body} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Post post={post} />
		</>
	)
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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

		context.res.setHeader(
			'Cache-Control',
			'public, s-maxage=10, stale-while-revalidate=59'
		)

		return {
			props: {
				post
			},
		};
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default PostPage;