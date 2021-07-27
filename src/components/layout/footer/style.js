import styled from 'styled-components';
import variables from '../../../data/variables';

export const FooterStyle = styled.footer`
	padding-top: 2rem;
  	padding-bottom: 1rem;
	z-index: 0;
	position: relative;
	text-align: center;
	@media(min-width: ${variables.breakpointPhone}) {
		background: linear-gradient(to top,rgb(0 0 0 / 20%),transparent 50%);
	}
	@media(max-width: ${variables.breakpointPhone}) {
		padding-bottom: 2rem;
		padding-left: .5rem;
		padding-right: .5rem;
		text-align: center;
	}
	.quote {
		font-size: 4rem;
		font-family: "GT-Walsheim-Pro-Bold";
		line-height: 1.2;
		color: ${variables.primary};
		@media(max-width: ${variables.breakpointPhone}) {
			font-size: 2rem;
		}
	}
`;

export const SubRight = styled.p`
	font-size: 1rem;
	line-height: 1.8;
	color: #ececec;
	margin-bottom: 10px;
	font-family: "GT-Walsheim-Pro-Bold";
`
export const CopyRight = styled.p`
	font-size: 11px;
	line-height: 1.8;
	letter-spacing:1px;
	color: #ececec;
	span a {
		color: #7026B9;
	}
`
export const FooterBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	@media(max-width: ${variables.breakpointPhone}) {
		grid-template-columns: 1fr;
	}
`
export const FooterText = styled.div`
`
export const FooterSocialMedia = styled.ul`
	list-style: none;
	padding-left: 0;
	text-align: center;
	@media(max-width: ${variables.breakpointPhone}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	li {
		margin-bottom: 1.5rem;
	}
	svg {
		margin-right: 15px;
		&:hover {
			opacity: .7;
		}
	}
`
export const MediaLink = styled.a`
	padding: 1rem 0rem;
	padding-bottom: .5rem;
	line-height: 1;
	font-size: 1rem;
	text-transform: capitalize;
	font-family: "GT-Walsheim-Pro-Bold";
	color: ${variables.primary};

`