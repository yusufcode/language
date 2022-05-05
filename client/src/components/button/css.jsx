import styled, {css} from 'styled-components'

export const Button = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 25px;
  font-weight: 400;
  cursor: pointer;
  line-height: 1;
  transition: 0.2s all;
  -webkit-tap-highlight-color: transparent;
  border: 0px;
  margin: ${props => props.margin ? `${props.margin}` : ''};

  & svg{
    margin-left: 2.5px;
  }

  ${(props) => props.type === 'primary' ? css`
    background-color: ${props.color};
    color: white;
  ` : props.type === 'outline' ? css`
    border: 2px solid ${props.color};
    color: ${props.color};
    background-color: transparent;
    &:hover{
      color: white;
      background-color: ${props.color};
    }
  ` : false}

  ${(props) => props.size === 'sm' ? css`
    font-size: 13px;
    padding: 2.5px 7.5px;
    & svg{
      width: 20px;
      height: 20px;
    }
  ` : props.size === 'md' ? css`
    font-size: 14px;
    padding: 5px 10px;
    & svg{
      width: 24px;
      height: 24px;
    }
  ` : props.size === 'lg' ? css`
    font-size: 16px;
    padding: 7.5px 12.5px;
    & svg{
      width: 26px;
      height: 26px;
    }
  ` : props.size === 'full' ? css`
    font-size: 16px;
    padding: 5px;
    width: 100%;
    & svg{
      width: 26px;
      height: 26px;
    }
  ` : false}

  ${(props) => props.position === 'fixed' ? css`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  ` : false 
  }

  &.disabled{
    background-color: #d5d5d5;
    border-color: #d5d5d5;
    user-select: none;
    cursor: default;
    color: black;
  }
`