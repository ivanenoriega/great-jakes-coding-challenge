import { MAX_POST_PER_PAGE } from "@/services/posts";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { m } from "framer-motion";
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
	
	let backLink = `/?page=${parsedPostId / MAX_POST_PER_PAGE}`;
	if (parsedPostId % MAX_POST_PER_PAGE !== 0) {
		backLink = `/?page=${Math.floor(parsedPostId / MAX_POST_PER_PAGE) + 1}`;
	} else if (page === 1) {
		backLink = "/"
	}

	return (
		<Stack direction="row" gap={1}>
			<Typography
				variant="h1"
				component={m.h1}
				sx={{ width: 'fit-content' }}
			>
				<Link
					href={backLink}
					style={{ float: "left" }}
					title="Go back"
				>
					<m.div
						initial={{ x: 20,opacity: 0 }}
						animate={{ x: 0,opacity: 1 }}
						transition={{ duration: 0.5,delay: 0.2 }}
					>
						<ArrowBackIos fontSize="large" color="primary" />
					</m.div>
				</Link>
				{title}
			</Typography>
		</Stack>
	)
}

export default PostTitle