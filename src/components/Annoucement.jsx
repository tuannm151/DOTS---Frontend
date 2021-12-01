import styled from "styled-components";

const Container = styled.div`
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 500px;
  text-align: center;
  padding: 3px 1rem;
`
const Applies = styled.div`
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: thin;
  text-align: center;
  padding: 3px 1rem;
`

const Annoucement = () => {
  return (
    <div>
      <Container>
          FREE DELIVERY
      </Container>
      <Applies>
            Applies to orders of 5.000.000₫ or more.
      </Applies>
    </div>
  );
};

export default Annoucement;
