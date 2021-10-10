import React from "react";
import { StyledContainer } from "./Container.styled";

interface IProps {
	children?: React.ReactNode
}

const Container: React.FC<IProps> = ({children}) => {
	return (
		<StyledContainer>
			{ children }
		</StyledContainer>
	);
};

export default Container;