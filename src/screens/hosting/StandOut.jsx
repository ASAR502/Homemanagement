import styled from "styled-components";
import React from "react";
import Exception from "../../components/create_listings/stand-out";

export default function StandOut() {
  return (
    <>
      <ExceptionContainer className="flex items-center justify-center">
        <Exception />
      </ExceptionContainer>
    </>
  );
}

const ExceptionContainer = styled.div`
  width: 100%;
  padding-top: 7rem;
`;
