import React, { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchGalleryImages } from "../../../reducers/gallerySlice";

import ImageCard from "./ImageCard";
import DetailModal from "../Detail/DetailModal";

const GalleryContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const GalleryList = () => {
  const dispatch = useAppDispatch();
  const { data, isModalOpen } = useAppSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchGalleryImages());
  }, [dispatch]);

  const lists = data.map((item) => <ImageCard key={item} image={item} />);

  return (
    <>
      <GalleryContainer>{lists}</GalleryContainer>
      {isModalOpen && <DetailModal />}
    </>
  );
};

export default GalleryList;
