import styled from "styled-components";

export const Answer= styled.div`
  text-align: center;
  :after {
    font-size: 30px;
    content: "reponse";
  }
  :hover:after {
    color: darkblue;
    content: ${(props) => props.reponse};
  }
`;
