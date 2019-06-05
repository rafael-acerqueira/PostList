import React from 'react'
import HeaderWrapper from './HeaderWrapper'
import HeaderImage from './HeaderImage'
import HeaderInfo from './HeaderInfo'
import HeaderName from './HeaderName'
import HeaderMinutes from './HeaderMinutes'

const Header = ({ name, avatar, time }) => (
	<HeaderWrapper>
		<HeaderImage src={avatar} alt='avatar' />
		<HeaderInfo>
			<HeaderName>{name}</HeaderName>
			<HeaderMinutes>há {time} min</HeaderMinutes>
		</HeaderInfo>
	</HeaderWrapper>
)

export default Header
