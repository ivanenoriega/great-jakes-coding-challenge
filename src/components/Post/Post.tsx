import { FC } from "react";
import { PostType as PostType } from "@/types/post";
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { m } from "framer-motion"
import PostTags from "./components/PostTags";
import PostTitle from "./components/PostTitle";

export const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
}

type Props = {
	post: PostType;
};

const Post: FC<Props> = ({ post }) => {

	return (
		<Stack
			gap={2}
		>
			<PostTitle title={post.title} postId={post.id} />
			<PostTags tags={post.tags} />
			<Typography
				variant="body1"
			>
				<Typography variant="caption">
					{post.reactions}
				</Typography>
				users reacted to this post
			</Typography>
			<Typography
				variant="body1"
				align="justify"
			>
				{post.body}
			</Typography>
		</Stack >
	)
}

export default Post