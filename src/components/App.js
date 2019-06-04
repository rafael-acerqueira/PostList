import React, { useState } from 'react'
import Header from './Header'
import Wrapper from './Wrapper'
import Post from './Post'

const App = () => {
	const [posts, setPosts] = useState([])

	return (
		<>
		<Header>Post List</Header>
		<Wrapper>
			<Post />
		</Wrapper>
	</>
	)
}

export default App
