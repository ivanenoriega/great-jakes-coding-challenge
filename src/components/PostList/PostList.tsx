import { FC } from "react";
import { PostListType } from "@/types/post";
import List from "@mui/material/List";
import PostListItem from "./components/PostListItem";

type Props = {
	posts: PostListType;
};

const PostList: FC<Props> = ({ posts }) => {
	return (
		<List>
			{posts.map((post, index) => (
				<PostListItem key={post.id} post={post} delay={index * 0.05} />
			))}
		</List>
	);
};

export default PostList;