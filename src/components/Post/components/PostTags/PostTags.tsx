import { FC } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { m } from "framer-motion";

type Props = {
	tags: string[];
};

const PostTags: FC<Props> = ({ tags }) => {
	return (
		<Stack direction="row" gap={1}>
			{
				tags.map((tag) => (
					<Chip key={tag} sx={{ textTransform: 'capitalize' }} label={tag} />
				))
			}
		</Stack>
	);
};

export default PostTags;