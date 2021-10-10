import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { ITheme } from "../../interfaces/theme";

interface IProps {
	theme: ITheme
}

export const StyledNavbar = styled.nav<IProps>`
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.primaryText};
  height: 80px;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLabel = styled.h2`
`;

export const Logo = styled.img`
  height: 50px;
  padding: 5px 0;
  margin-right: 10px;
`;

export const NavItemsWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  height: 50px;
  
  @media (max-width: ${({theme}: IProps) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavItem = styled.li<IProps>`
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.primaryText};
  margin-right: 30px;
  padding-bottom: 5px;
  cursor: pointer;
  opacity: 0.8;
  
  &.active {
    opacity: 1;
  }

  &:hover {
    border-bottom: 2px solid ${({theme}) => theme.colors.primaryText};
  }
`;