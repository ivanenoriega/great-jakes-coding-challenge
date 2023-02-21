/*
 * Post is the type of a single post. It is used in the Post component.
 */
export type PostType = {
	id: number;
	title: string;
	body: string;
	userId: number;
	tags: string[];
	reactions: number;
};

/* 
	PostListItem is a subset of Post. It is used in the PostList component.
	It only needs the id and title of a post.
*/
export type PostListItemType = {
	id: number;
	title: string;
};

/* 
* PostList is an array of PostListItem. It is used in the PostList component.
*/
export type PostListType = PostListItemType[];

export type PostPaginationType = {
	page: number;
	count: number;
};
