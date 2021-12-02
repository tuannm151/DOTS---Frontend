import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 3px 1rem;
`;

const Annoucement = () => {
  return (
    <Container>
        Miễn phí vận chuyển cho đơn hàng trên 200.000đ !
    </Container>
  );
};

export default Annoucement;
