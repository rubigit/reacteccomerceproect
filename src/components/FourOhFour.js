import React from "react";
import styled from "styled-components";

const FourOhFour = () => {
  return (
    <>
      <Div>
        <Header1>404</Header1>
      </Div>

      <Div>
        <Header>Oops, The Page you are looking for can't be found!</Header>
      </Div>
    </>
  );
};

const Header1 = styled.h1`
  font-size: 168px;
  margin: 0px;
  color: #ff508e;
  text-transform: uppercase;
`;

const Header = styled.h2`
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  color: #222;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20em;
  border: 3px solid green;
`;

export default FourOhFour;
