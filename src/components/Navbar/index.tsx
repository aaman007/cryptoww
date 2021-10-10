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
							<ItemLink to={"/"} exact> Home </ItemLink>
						</NavItem>
						<NavItem>
							<ItemLink to={"/explore"} exact> Explore </ItemLink>
						</NavItem>
					</NavItemsWrapper>
				</NavContent>
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;