import React from "react";
import styled from "styled-components";
import Section from "./Section";
import carData from "../carInfo.json";
function Home() {
  return (
    <Container>
      {carData.map((carInfo, index) => (
        <Section
          key={index}
          title={carInfo.title}
          description={carInfo.description}
          backgroundImg={carInfo.image}
          leftBtnText="Custom Order"
          rightBtnText="Existing inventory"
        />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
