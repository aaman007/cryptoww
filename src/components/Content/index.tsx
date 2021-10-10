import React from "react";
import {
	ContentWrapper,
	StyledContent,
	ContentBody,
	ContentTitle,
	ContentText,
	ContentImageWrapper,
	ContentImage
} from "./Content.styled";
import Container from "../Container";
import { IContent } from "../../interfaces/content";

interface IProps {
	content: IContent
}

const Content: React.FC<IProps> = ({ content }) => {
	return (
		<ContentWrapper color={content.color} backgroundColor={content.backgroundColor}>
			<Container>
				<StyledContent layout={content.layout}>
					<ContentBody>
						<ContentTitle> { content.title } </ContentTitle>
						<ContentText> { content.body } </ContentText>
					</ContentBody>
					<ContentImageWrapper layout={content.layout}>
						<ContentImage src={content.image} alt={""} />
					</ContentImageWrapper>
				</StyledContent>
			</Container>
		</ContentWrapper>
	);
};

export default Content;