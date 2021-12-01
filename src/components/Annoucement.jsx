import styled from "styled-components";

const Container = styled.div`
  // background-color: teal;
  // background-color: #515151;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: thin;
  text-align: center;
  padding: 3px 1rem;
`;

const Annoucement = () => {
  return (
    <Container>
        Free shipping for orders over 500,000VND!
    </Container>
  );
};

export default Annoucement;
