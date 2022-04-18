import React from "react";
import styled from "styled-components";

import { useAppSelector } from "../../../app/hooks";

const DetailImageContainer = styled.div`
  width: 100%;

  > img {
    width: 100%;
  }
`;

const DetailContents = () => {
  const { currSelected } = useAppSelector((state) => state.gallery);

  return (
    <div>
      <DetailImageContainer>
        <img src={currSelected} alt="detailImage" />
      </DetailImageContainer>
    </div>
  );
};

export default DetailContents;
