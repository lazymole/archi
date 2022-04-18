import React from "react";
import styled from "styled-components";

import ModalPortal from "../../../app/Portal";
import DetailContents from "./DetailContents";
import DetailHeader from "./DetailHeader";

const DetailModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const DetailModalContents = styled.div`
  position: relative;
`;

const DetailModal = () => {
  return (
    <ModalPortal>
      <DetailModalContainer>
        <DetailModalContents>
          <DetailHeader />
          <DetailContents />
        </DetailModalContents>
      </DetailModalContainer>
    </ModalPortal>
  );
};

export default DetailModal;
