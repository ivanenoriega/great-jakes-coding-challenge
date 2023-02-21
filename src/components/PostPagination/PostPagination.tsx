import { FC } from "react"
import { PostPaginationType } from "@/types/post"
import Pagination, { PaginationRenderItemParams } from "@mui/material/Pagination"
import PostPaginationItem from "./PostPaginationItem"
import styles from "./PostPagination.module.scss"

type Props = {
	pagination: PostPaginationType
}

const PostPagination: FC<Props> = ({ pagination }) => {
	const { count, page = 1 } = pagination
	const renderItem = (item: PaginationRenderItemParams) => <PostPaginationItem item={item} />

	return (
		<Pagination className={styles.main} count={count} page={page} renderItem={renderItem}/>
	)
}
		
export default PostPagination