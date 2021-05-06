import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
    transition: all 0.25s linear;
  }`;

export const NavBarStyle = styled.div`
  background: ${(props) => props.theme.navbarBackground};
`;

export const NavBarButtons = styled.span`
  border: outset;
  border-color: ${(props) => props.theme.buttonBorderColor};
  padding: 0.1em;
  border-radius: 10px;
  border-width: 0.2em;
  color: ${(props) => props.theme.buttonTextColor};
  font-size: x-large;

  @media (max-width: 2000px) {
    &:hover {
      background: ${(props) => props.theme.buttonColorHover};
    }
  }
`;
export const NavBarTitle = styled.span`
  color: ${(props) => props.theme.navbarTitleColor};
  margin-left: 0.5em;
  position: relative;
  font-size: x-large;
`;

export const ThemeButton = styled.button``;

export const ThemeButtonContainer = styled.li``;

export const SearchBox = styled.div`
  background: ${(props) => props.theme.searchboxColor};
`;

export const SearchBoxInput = styled.input`
  background: ${(props) => props.theme.searchboxInputColor};
  color: ${(props) => props.theme.searchboxInputTextColor};
  ::placeholder {
    color: ${(props) => props.theme.searchboxPlaceholderColor};
  }
`;

export const SearchBoxInputIcons = styled.span`
  position: absolute;
  right: 30px;
  color: ${(props) => props.theme.searchboxIconColor};
`;
