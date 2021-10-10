import styled from "styled-components";
import { ITheme } from "../../interfaces/theme";

interface IProps {
	theme: ITheme;
	layout?: string;
	color?: string;
	backgroundColor?: string;
}

export const ContentWrapper = styled.div<IProps>`
  padding: 40px 0;
  background-color: ${({backgroundColor, theme}: IProps) => backgroundColor || theme.colors.primary};
  color: ${({color, theme}: IProps) => color || theme.colors.primaryText};
`;

export const StyledContent = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({layout}: IProps) => layout || 'row'};

  @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const ContentBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

export const ContentTitle = styled.h1`
`;

export const ContentText = styled.p`
`;

export const ContentImageWrapper = styled.div<IProps>`
  flex: 1;
  display: flex;
  justify-content: ${({layout}: IProps) => layout === 'row' ? 'flex-end' : 'flex-start'};
  align-items: center;

  @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
    justify-content: center;
    display: none;
  }
`;

export const ContentImage = styled.img`
	width: 80%;
`;