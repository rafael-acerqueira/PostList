import React, { Component } from 'react'
import Header from './Header'
import Wrapper from './Wrapper'
import Post from './Post'

class App extends Component {
	render () {
		return (
			<>
			<Header>Post List</Header>
			<Wrapper>
				<Post />
			</Wrapper>
			</>
		)
	}
}

export default App
