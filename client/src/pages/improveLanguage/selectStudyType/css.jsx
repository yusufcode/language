import styled from 'styled-components/macro'

export const CardRow = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
`

export const Card = styled.div`
  display: block;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  user-select: none;
  border: 1px solid #d5d5d5;
  width: 100px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &.selected{
    border-color: #002c9d;
  }
`

export const Text = styled.p`
  margin: 0;
  display: block;
  user-select: none;
`