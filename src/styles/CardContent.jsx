import styled from "styled-components";

export const Answer= styled.div`
  text-align: center;
  :after {
    font-size: 30px;
    content: "Réponse";
  }
  :hover:after {
    color: darkblue;
    content: ${props => props.content.reponse};
  }
`;
