import styled from 'styled-components'



export const AddToCart = styled.div`
display: flex;
width: 38px;
height: 38px;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 4px;
width: 72px;
height: 38px;
border-radius: 12px;
background: ${(props) => props.theme['gray-30']};

button{
  border: 0;
  background: none;
  color: ${(props) => props.theme['purple']};
}

button:hover{
  border: 0;
  background: none;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

}
`

export const GoToCart = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  color: ${(props) => props.theme['purple']};
  background: ${(props) => props.theme['gray-30']};

  &:hover{
  background: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
transition: 0.2s;
  }
`
