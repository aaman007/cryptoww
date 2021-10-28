import styled from "styled-components";

export const StyledTable = styled.table`
  display: inline-block;
  width: 100%;
  overflow: auto;
  text-align: left;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid #e5dddd;
`;

export const THead = styled.thead`
  color: #7f7676;
`;

export const TRow = styled.tr`
  padding: 30px;
  cursor: pointer;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;

export const THCol = styled.th`
  padding: 20px;
  border-bottom: 1px solid #e5dddd;
`;

export const TCol = styled.td`
  padding: 20px;
  border-bottom: 1px solid #e5dddd;
`;

export const TBody = styled.tbody``;