import React from "react";
import {
	StyledNavbar,
	NavContent,
	Brand,
	Logo,
	LogoLabel,
	NavItemsWrapper,
	NavItem,
	ItemLink
} from "./Navbar.styled";
import Container from "../Container";
import * as urls from "../../urls";

const Navbar = () => {
	return (
		<StyledNavbar>
			<Container>
				<NavContent>
					<Brand>
						<Logo src={"./images/logo.png"} alt={"Cryptoww Logo"} />
						<LogoLabel> Cryptoww! </LogoLabel>
					</Brand>
					<NavItemsWrapper>
						<NavItem>
							<ItemLink to={urls.home()} exact> Home </ItemLink>
						</NavItem>
						<NavItem>
							<ItemLink to={urls.explore()} exact> Explore </ItemLink>
						</NavItem>
					</NavItemsWrapper>
				</NavContent>
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;