import ArrowBack from "@mui/icons-material/ArrowBack"
import ArrowForward from "@mui/icons-material/ArrowForward"
import { PaginationRenderItemParams } from "@mui/material"
import PaginationItem from "@mui/material/PaginationItem"
import Link from "next/link"
import { FC } from "react"
import styles from "./PostPaginationItem.module.scss"

type Props = {
	item: PaginationRenderItemParams
}

const PostPaginationItem: FC<Props> = ({ item }) => {
	const href = item.page === 1 ? "/" : `/results/${item.page}`
	return (
		<Link href={href} className={styles.link}>
			<PaginationItem
				slots={{ previous: ArrowBack, next: ArrowForward }}
				{...item}
			/>
		</Link>
	)
}

export default PostPaginationItem