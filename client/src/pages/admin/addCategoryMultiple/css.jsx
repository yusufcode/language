import styled from "styled-components";

export const TableCover = styled.div`
  display: flex;
  flex-direction: column;
`

export const Table = styled.table`
  border: 1px solid #a1a1a1;
  border-spacing: 0;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`

export const Thead = styled.thead`
  padding: 0;
  margin: 0;

  & td{
    border-right: 1px solid #a1a1a1;

    &:last-child{
      border-right: 0;
    }
  }
`

export const Tbody = styled.tbody`
  padding: 0;
  margin: 0;

  & td{
    border-top: 1px solid #a1a1a1;
    border-right: 1px solid #a1a1a1;

    &:last-child{
      border-right: 0;
    }
  }
`

export const Tr = styled.tr`
  padding: 0;
  margin: 0;
`

export const Td = styled.td`
  padding: 2.5px;
  margin: 0;
`

export const Input = styled.input`
  border: 1px solid #a1a1a1;
  outline: none;
  border: 0;
  width: 100%;
  font-size: 13px;
`

export const ButtonsDiv = styled.div`
  display: flex;
`

export const DeleteLabel = styled.label`
  color: #a1a1a1;
  user-select: none;
  cursor: pointer;
  display: inline-block;
  padding: 0px 5px;
  font-size: 13px;
  
  &:hover{
    text-decoration: underline;
  }

`