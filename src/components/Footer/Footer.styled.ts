import styled from "styled-components";
import { ITheme } from "../../interfaces/theme";

interface IProps {
	theme: ITheme
}

export const StyledFooter = styled.footer`
  background-color: ${({theme}: IProps) => theme.colors.dark};
  color: ${({theme}: IProps) => theme.colors.primaryText};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;