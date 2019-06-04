import React from 'react'
import PostWrapper from './PostWrapper'

const Post = ({ post }) => (
	<PostWrapper>
		<img src={post.avatar} alt='avatar' />
		<span>{post.name}</span>
		<span>há {post.time} min</span>
		<div>{post.description}</div>
	</PostWrapper>
)

export default Post
