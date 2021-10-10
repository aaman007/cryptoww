import React from "react";
import {
	StyledFooter,
	Content
} from "./Footer.styled";
import Container from "../Container";

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Content>
					<h5> Copyright &copy; 2021 - Cryptoww! </h5>
				</Content>
			</Container>
		</StyledFooter>
	);
};

export default Footer;