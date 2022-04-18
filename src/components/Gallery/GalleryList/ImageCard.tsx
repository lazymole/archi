import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../app/hooks";

import CheckBox from "../../../common/CheckBox";
import { setCurrSelected, showDetail } from "../../../reducers/gallerySlice";
import OptionButton from "./OptionButton";

const FloatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  /* z-index: 100; */
  width: 100%;
  padding: 10px;
`;

const ImageCardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #000000;
  cursor: pointer;

  :hover {
    transition: 0.2s;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
  }
`;

const ImageCardWrapper = styled.img`
  width: 120%;
  object-fit: cover;

  :hover {
    opacity: 0.5;
  }
`;

interface ImageCardProps {
  image: string;
}

const ImageCard = ({ image }: ImageCardProps) => {
  const dispatch = useAppDispatch();

  const handleImageClick = (): void => {
    dispatch(showDetail(true));
    dispatch(setCurrSelected(image));
  };

  return (
    <ImageCardContainer onClick={handleImageClick}>
      <FloatingContainer>
        <CheckBox />
        <OptionButton />
      </FloatingContainer>
      <ImageCardWrapper src={image} alt="imageCard" />
    </ImageCardContainer>
  );
};

export default ImageCard;
