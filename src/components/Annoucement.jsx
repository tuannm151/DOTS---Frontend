import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

const Annoucement = () => {
  return (
    <Container>
        Miễn phí vận chuyển cho đơn hàng trên 500.000đ !
    </Container>
  );
};

export default Annoucement;
