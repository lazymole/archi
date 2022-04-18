import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../app/hooks";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px;
`;

const NavWrapper = styled.div`
  padding: 10px;
  width: 20%;
`;

const TitleWrapper = styled.h1`
  display: block;
  width: 55%;
  font-size: 1.5rem;
  text-align: center;
`;

const Navbar = () => {
  const { isCompleted, data } = useAppSelector((state) => state.gallery);

  return (
    <NavbarContainer>
      {isCompleted && (
        <>
          <NavWrapper>{data.length}개의 렌더샷</NavWrapper>
          <TitleWrapper>갤러리</TitleWrapper>
          <NavWrapper></NavWrapper>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
