import React from 'react';
import data from "./../../../data/data";
import { FooterStyle, SubRight, CopyRight, FooterSocialMedia, FooterText } from './style'
import { ContainerLayout, } from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterSocialMedia>

					</FooterSocialMedia>

					<FooterText>

					</FooterText>
					<div className="box">
						<SubRight> Good design doesn't date. Bad design does. </SubRight>
						<CopyRight>
							©
							<span> {new Date().getFullYear()}, Built with {` `}
								<a href="https://www.gatsbyjs.org" target="blank_">Gatsby</a>{" "}
							</span>
							copyright 2021 by {data.SiteAuthor}
						</CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;