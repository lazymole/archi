import React from "react";
import styled from "styled-components";

import CloseButton from "../../common/CloseButton";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 5px;
  border-bottom: 1px solid #f4f4f4;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <CloseButton onClick={() => console.log("clicked")} />
    </HeaderContainer>
  );
};

export default Header;
