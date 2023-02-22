import { FC } from "react";
import Link from "next/link";
import { PostListItemType } from "@/types/post";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/system/Stack";
import styles from "./PostListItem.module.scss";

type Props = {
	post: PostListItemType;
	delay: number;
};

const PostListItem: FC<Props> = ({ post }) => {
	return (
		<ListItem
			divider
			className={styles.container}
		>
			<Link href={`/post/${post.id}`} className={styles.link}>
				<Stack direction="row" alignItems="center">
					<Avatar
						className={styles.itemNumber}
					>
						{post.id}
					</Avatar>
					<Typography className={styles.item}>
						{post.title}
					</Typography>
				</Stack>
			</Link>
		</ListItem>
	);
};

export default PostListItem;