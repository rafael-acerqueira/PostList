import React, { useState } from 'react'
import Header from './Header'
import Wrapper from './Wrapper'
import Post from './Post'
import uuidv4 from 'uuid/v4'

const App = () => {
	const [posts, setPosts] = useState([
		{
			id: uuidv4(),
			name: 'Josh',
			avatar: 'http://lorempixel.com/50/50/cats/',
			time: 5,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in accumsan dolor. Sed maximus eleifend nisi, sit amet venenatis ante maximus ut. Ut sapien lectus, imperdiet eu facilisis sed, placerat quis tortor. Quisque eget pulvinar ligula, eget lacinia est. Donec ultricies luctus est, a convallis ipsum. Donec gravida, orci vel pulvinar aliquam, augue est semper justo, at lobortis elit nisl sit amet neque. In sapien leo, eleifend in est ac, pharetra auctor libero. Aenean nec laoreet sem, a commodo lacus.'
		},
		{
			id: uuidv4(),
			name: 'Mary',
			avatar: 'http://lorempixel.com/50/50/business/',
			time: 3,
			description: 'Praesent sed est ut leo efficitur rutrum sed vel urna. Praesent tempus dui vel imperdiet efficitur. Nulla ut metus et massa aliquet cursus a id sem. Aliquam porta sapien nec sem ornare, in pellentesque sapien gravida. Fusce mollis non erat ac mollis. Etiam nec tristique nulla. Sed ornare lorem nisi, quis maximus dui interdum sit amet. Integer commodo cursus lacinia. Etiam consequat tincidunt dolor. Vestibulum aliquet convallis orci et pulvinar.'
		},
		{
			id: uuidv4(),
			name: 'Tom',
			avatar: 'http://lorempixel.com/50/50/people/',
			time: 50,
			description: 'Proin at nibh mi. Donec vestibulum sem nisi, vehicula auctor nisl consequat sed. In laoreet dignissim sapien nec fermentum. Morbi laoreet porttitor egestas. Maecenas sed lacus congue, pretium libero a, finibus lorem. Etiam gravida neque tincidunt, rutrum elit sed, feugiat odio. Cras vel odio posuere, rutrum magna vel, rutrum nisi. Donec sollicitudin euismod sem at ullamcorper'
		}
	])

	return (
		<>
		<Header>Post List</Header>
		<Wrapper>
			{
				posts.map(post => <Post key={post.id} post={post} />)
			}
		</Wrapper>
	</>
	)
}

export default App
