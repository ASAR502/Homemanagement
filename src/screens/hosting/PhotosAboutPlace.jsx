import styled from "styled-components";
import React from "react";
import PhotosofPlace from "../../components/create_listings/photos";

export default function PhotosAboutPlace() {
  return (
    <>
      <PhotosAboutPlaceContainer className="flex items-center justify-center">
        <PhotosofPlace />
      </PhotosAboutPlaceContainer>
    </>
  );
}

const PhotosAboutPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  padding-top: 4rem;
`;
