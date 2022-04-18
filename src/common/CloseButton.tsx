import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 30px;
  border-radius: 5px;
  background-color: #f4f4f4;
  color: #4b4b4b;
  user-select: none;
  cursor: pointer;
`;

const ButtonDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35px;
  width: 30px;
  height: 20px;
  background-color: #4d4e54;
  border-radius: 5px;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
`;

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <>
      <ButtonContainer
        onClick={onClick}
        onMouseOver={() => setShowDetail(true)}
        onMouseOut={() => setShowDetail(false)}
      >
        <div>X</div>
        {showDetail && (
          <ButtonDetail>
            <div>닫기</div>
          </ButtonDetail>
        )}
      </ButtonContainer>
    </>
  );
};

export default CloseButton;
