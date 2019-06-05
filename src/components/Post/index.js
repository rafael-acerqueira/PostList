import React from 'react'
import Wrapper from './Wrapper'
import Header from './Header'
import Description from './Description'

const Post = ({ post }) => (
	<Wrapper>
		<Header name={post.name} avatar={post.avatar} time={post.time}/>
		<Description>{post.description}</Description>
	</Wrapper>
)

export default Post
