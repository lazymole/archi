import React from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../../app/hooks";
import { setCurrSelected, showDetail } from "../../../reducers/gallerySlice";

import CloseButton from "../../../common/CloseButton";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 5px;
  border-bottom: 1px solid #f4f4f4;
`;

const NavWrapper = styled.div`
  width: 50%;
`;

const DetailHeader = () => {
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = (): void => {
    dispatch(showDetail(false));
    dispatch(setCurrSelected(""));
  };

  return (
    <HeaderContainer>
      <NavWrapper>
        <CloseButton onClick={handleCloseButtonClick} />
      </NavWrapper>
      <NavWrapper></NavWrapper>
    </HeaderContainer>
  );
};

export default DetailHeader;
