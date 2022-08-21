import styled from "styled-components";

const PrimaryButton = styled.button`
  background: #7B78FF;
  color: black;
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

export default PrimaryButton;