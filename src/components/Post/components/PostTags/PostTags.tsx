import { FC } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { m } from "framer-motion";

type Props = {
	tags: string[];
};

const PostTags: FC<Props> = ({ tags }) => {
	return (
		<Stack
			direction="row"
			
			gap={1}
			component={m.div}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ delay: 0.5 }}
		>
			{
				tags.map((tag, index) => (
					<Chip component={m.div} animate={{
						opacity: 1,
					}}
					transition={{
						delay: (index * 0.3) + 0.3,
					}}
					initial={{
						opacity: 0,
					}}
					key={tag} sx={{ textTransform: 'capitalize' }} label={tag} />
				))
			}
		</Stack>
	);
};

export default PostTags;