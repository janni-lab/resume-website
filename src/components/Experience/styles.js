import styled from "styled-components";
import BulletPoint from "../shared/vectors/BulletPoint.svg";

export const Position = styled.h4``;
export const Company = styled.div`
  font-family: Montserrat SemiBold;
`;
export const Summary = styled.div`
  font-style: italic;
`;
export const Highlights = styled.ul`
  list-style-type: disc;
`;
export const Highlight = styled.li`
  list-style-image: url(${BulletPoint});
`;
