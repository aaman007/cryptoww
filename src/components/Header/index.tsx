import React from "react";
import {
	StyledHeader,
} from "./Header.styled";
import Content from "../Content";
import { headerContent } from "../../data/contents";

const Header = () => {
	return (
		<StyledHeader>
			<Content content={headerContent} />
		</StyledHeader>
	);
};

export default Header;