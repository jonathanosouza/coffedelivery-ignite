import styled from "styled-components"



export const SelectedCoffee = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 28px;
width: 448px;
height: 620px;
left: 832px;
top: 182px;


background: #F3F2F2;
border-radius: 6px 44px;

`

export const SelectedCoffeContainer = styled.div `
/*display: grid;
grid-template-columns: 1fr 2fr 1fr;
padding-top: 1rem;
flex-wrap: wrap;*/
display: flex;
gap: 1rem;
img{
  width: 5rem;
}

`
export const AddOrRemoveContainter = styled.div `
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
margin-top: 1rem;

`








export const AddToCartChekout = styled.div`
display: flex;
height: 38px;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 4px;
width: 80px;
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

span{
  display: flex;
  
  font-size: 14px;
}
`


export const RemoveToCartChekout = styled.button`
display: flex;
height: 38px;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 4px;
width: 80px;
border-radius: 12px;
background: ${(props) => props.theme['gray-30']};
border: none;
cursor: pointer;


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

span{
  display: flex;
  
  font-size: 14px;
}
`

export const TotalConfirmed = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 gap: 1rem;


 div{
  display: flex;
  justify-content: space-between;

  h3 { 
    font-family: 'Baloo2';
  }
 }

 button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: orange;
 }

 a{
  text-decoration: none;
  color: white;
 }
`