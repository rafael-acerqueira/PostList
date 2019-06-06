import React, { useState, useEffect } from 'react'
import Header from './Header'
import Wrapper from './Wrapper'
import Post from './Post'
import uuidv4 from 'uuid/v4'

const App = () => {
	const NUMBEROFITEMSPERPAGE = 3
	const ALLPOST = [
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
		},
		{
			id: uuidv4(),
			name: 'Tim',
			avatar: 'http://lorempixel.com/50/50/city/',
			time: 58,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet arcu in arcu posuere iaculis. Etiam non mollis urna, quis rutrum quam. Nulla viverra malesuada orci, eget ultrices orci laoreet vel. Curabitur luctus odio nec erat lacinia, vel suscipit ligula sollicitudin. Duis posuere eleifend justo, non convallis quam tincidunt a. Aenean pretium tortor quis dapibus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sem in nunc maximus, id ultrices dolor aliquet. Suspendisse odio est, aliquet eget dui vel, congue molestie nisi. Integer eget semper ligula, in vulputate dui. In pretium nisl massa, eu mollis eros sodales at. Phasellus vitae elit posuere, molestie justo vel, imperdiet lacus.'
		}
	]

	const [posts, setPosts] = useState(ALLPOST.slice(0, NUMBEROFITEMSPERPAGE))
	const [isFetching, setIsFetching] = useState(false)

	const handleScroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return
		setIsFetching(true)
	}

	const fetchMoreListItems = () => {
		setPosts(prevState => ([...prevState, ...ALLPOST.slice(prevState.length, prevState.length + NUMBEROFITEMSPERPAGE)]))
		setIsFetching(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		if (!isFetching) return
		fetchMoreListItems()
	}, [isFetching])

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
