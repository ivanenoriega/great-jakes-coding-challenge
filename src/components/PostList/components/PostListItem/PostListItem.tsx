import { FC } from "react";
import Link from "next/link";
import { m } from "framer-motion";
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

const PostListItem: FC<Props> = ({ post, delay }) => {
	return (
		<ListItem
			divider
			component={m.li}
			initial="rest"
			whileHover="hover"
			animate="rest"
			className={styles.container}
		>
			<Link href={`/post/${post.id}`} className={styles.link}>
				<Stack direction="row" alignItems="center">
					<Avatar
						className={styles.itemNumber}
						component={m.div}
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							opacity: {
								delay,
							},
						}}
						variants={{
							hover: {
								backgroundColor: ['#666666', '#d8861a']
							},
						}}
					>
						{post.id}
					</Avatar>
					<Typography
						component={m.p}
						className={styles.item}
						variants={{
							hover: {
								scale: 1.05,
								x: 10,
							},
						}}
					>
						{post.title}
					</Typography>
				</Stack>
			</Link>
		</ListItem>
	);
};

export default PostListItem;