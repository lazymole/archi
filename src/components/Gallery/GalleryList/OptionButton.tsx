import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div``;

const ButtonWrapper = styled.div`
  color: #ffffff;
  user-select: none;
  text-align: right;
`;

const OptionsContainer = styled.div`
  width: 70px;
  background-color: #ffffff;
  user-select: none;

  & .options {
    padding: 5px;
    text-align: center;
  }
`;

const OptionButton = () => {
  const [showOptions, setShowOptions] = useState<boolean>();

  return (
    <ButtonContainer onClick={() => setShowOptions((prev) => !prev)}>
      <ButtonWrapper>...</ButtonWrapper>
      {showOptions && (
        <OptionsContainer>
          <a
            href="https://resources.archisketch.com/images/Xx9q9qjFDF46D26A4A54BA5/550xAUTO/Xx9q9qjFDF46D26A4A54BA5.png"
            download
            type="image/png"
          >
            <div className="options">다운로드</div>
          </a>
          <div className="options">삭제</div>
        </OptionsContainer>
      )}
    </ButtonContainer>
  );
};

export default OptionButton;
