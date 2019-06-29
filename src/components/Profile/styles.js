import styled from "styled-components";

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const ListItemIcon = styled.div`
  width: 40px;
  margin-right: 10px;
`;
export const ListItemBody = styled.div`
  flex: 1;
  font-family: Crimson Text;
  font-style: normal;
  font-weight: normal;
`;
export const ListItemTitle = styled.div`
  font-family: Montserrat SemiBold;
  font-style: normal;
  font-weight: 600;
`;
