import { Link } from "gatsby";
import React from "react";
import { Container } from "../../styles/style-variables";
import Icon from "../Icon";
import { IconType } from "../Icon/style";
import Nav from "./nav";
import * as Styled from "./style";

export interface HeaderProps {
  noBorder?: boolean;
}

const Header: React.FC<HeaderProps> = ({ noBorder }) => {
  return (
    <Styled.Header bordered={!noBorder}>
      <Container>
        <Styled.SiteTitle>
          <Styled.SiteLogo>
            <Link to="/">IT퍼포머</Link>
          </Styled.SiteLogo>
        </Styled.SiteTitle>
        <Styled.NavList>
          <Nav to="/category/">
            <Icon type={IconType.Article} />
            <span>POSTS</span>
          </Nav>
          <Nav to="/#videos">
            <Icon type={IconType.Video} />
            <span>English</span>
          </Nav>
          <Nav to="/tags/">
            <Icon type={IconType.Tag} />
            <span>TAGS</span>
          </Nav>
        </Styled.NavList>
        <Styled.Contacts>
          <Nav href={`joshua8565@gmail.com`}>
            <Icon type={IconType.Email} style={{ filter: "invert(0.6)" }} />
          </Nav>
          <Nav to={`https://github.com/Joshua-Moon`}>
            <Icon type={IconType.Github} style={{ filter: "invert(0.6)" }} />
          </Nav>
        </Styled.Contacts>
      </Container>
    </Styled.Header>
  );
};

export default Header;
