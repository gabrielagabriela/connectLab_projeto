import PropTypes from "prop-types";
import { HeaderStyle, HeaderNav, HeaderTitle } from "./Header.styles";

export const Header = ({ children }) => {
  return (
    <HeaderStyle>
      <HeaderTitle>Connect Lab</HeaderTitle>

      <HeaderNav>{children}</HeaderNav>
    </HeaderStyle>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
