import styled from "styled-components";

interface IProps {
	color?: string;
}

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.div<IProps>`
  color: ${({color}: IProps) => color || "#000"};
`;

export const Strong = styled.strong``;

export const Anchor = styled.a`
`;