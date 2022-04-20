import styled, {css} from 'styled-components'

export const Label = styled.label`

  display: flex;
  align-items: center;
  user-select: none;
  border: 2px solid;
  border-radius: ${props => props.borderRadius ? `${props.borderRadius}` : '25px'};
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  line-height: 1;
  transition: 0.2s all;
  -webkit-tap-highlight-color: transparent;

  width: ${props => props.width === 'full' ? '100%' : false};
  color: ${props => props.color ? `${props.color}` : '#0048ff'};
  border-color: ${props => props.borderColor ? `${props.borderColor}` : '#0048ff'};
  background-color: ${props => props.backgroundColor ? `${props.backgroundColor}` : 'transparent'};
  padding: ${props => props.padding ? `${props.padding}` : '10px 15px'};
  margin: ${props => props.margin ? `${props.margin}` : ''};

  ${(props) => props.position === 'fixed' ? css`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  ` : false 
  }

  &:hover{
    color: ${props => props.hoverColor ? `${props.hoverColor}` : 'white'};
    border-color: ${props => props.hoverBorderColor ? `${props.hoverBorderColor}` : '#0048ff'};
    background-color: ${props => props.hoverBackgroundColor ? `${props.hoverBackgroundColor}` : '#0048ff'};
  }

  &.disabled{
    background-color: #d5d5d5;
    border-color: #d5d5d5;
    user-select: none;
    cursor: default;
    color: black;
  }
`

export const Input = styled.input`
  display: none;
`