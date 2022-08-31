import styled from "styled-components";

const DangerButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: .8rem 2rem;
  border-radius: .5rem;
  font-weight: bold;
  font-size: 1rem;
  transition: .3s;
  :hover {
    filter: brightness(.9);
    cursor: pointer;
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

export default DangerButton;