import { FC } from "react";
import { PostType as PostType } from "@/types/post";
import { variants } from "@/pages"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { m } from "framer-motion"
import PostTags from "./components/PostTags";
import PostTitle from "./components/PostTitle";

type Props = {
	post: PostType;
};

const Post: FC<Props> = ({ post }) => {

	return (
		<Stack
			gap={2}
			component={m.div}
			variants={variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			transition={{ type: 'linear' }}
		>
			<PostTitle title={post.title} postId={post.id} />
			<PostTags tags={post.tags} />
			<Typography
				variant="body1"
				component={m.p}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ delay: 0.5 }}
			>
				<Typography variant="caption">
					{post.reactions}
				</Typography>
				users reacted to this post
			</Typography>
			<Typography
				component={m.p}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ delay: 0.7 }}
				align="justify"
			>
				{post.body}
			</Typography>
		</Stack >
	)
}

export default Post