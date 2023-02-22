import { MAX_POST_PER_PAGE } from "@/services/posts";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react"
import { isString } from "util";

type Props = {
	title: string;
	postId: string | number;
};

const PostTitle: FC<Props> = ({ title, postId }) => {
	const parsedPostId = isString(postId) ? parseInt(postId) : postId;
	const page = Math.floor(parsedPostId / MAX_POST_PER_PAGE) + 1;
	let backLink = `/results/${parsedPostId / MAX_POST_PER_PAGE}`;
	if (page === 1) {
		backLink = "/"
	} else if (parsedPostId % MAX_POST_PER_PAGE !== 0) {
		backLink = `/results/${Math.floor(parsedPostId / MAX_POST_PER_PAGE) + 1}`;
	}

	return (
		<Stack direction="row" gap={1}>
			<Typography
				variant="h1"
				sx={{ width: 'fit-content' }}
			>
				<Link
					href={backLink}
					style={{ float: "left" }}
					title="Go back"
				>
					<ArrowBackIos fontSize="large" color="primary" />
				</Link>
				{title}
			</Typography>
		</Stack>
	)
}

export default PostTitle