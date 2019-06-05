import styled from 'styled-components'

const HeaderImage = styled.img.attrs(props => ({
	alt: props.alt,
	src: props.src
}))`
	border-radius: 50%;
`

export default HeaderImage
