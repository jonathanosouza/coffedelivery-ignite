import styled from "styled-components";


export const CheckoutContainar = styled.div `
margin-top: 8rem;
justify-content: center;
gap: 2rem;
display: flex;

`

export const FormContainer = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 12px;
width: 640px;
height: 591px;
left: 160px;
top: 182px;

`


export const SelectedCoffeeContainer = styled.div `
display: flex;
flex-direction: column;
gap: 1px;   
`

export const FormEntrega = styled.div `
display: flex;
flex-direction: column;
padding: 40px;
align-items: center;
gap: 32px;
width: 640px;
height: 372px;

/* Base/Card */

background: #F3F2F2;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

div {
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 100%;
    header {
    display: flex;
    gap: 1rem;
  }

  span {
    margin-left: 38px;
  }


}

`

export const Payment = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;

width: 640px;
height: 207px;
/* Base/Card */

background: #F3F2F2;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

div {
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 100%;
    header {
    display: flex;
    gap: 1rem;
  }

  span {
    margin-left: 38px;
  }
}


`

export const FormEntregaContainer = styled.form ` 
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 15px;
  
  header{
    display: flex;
    gap: 10px;
  }

 & > input:nth-child(1) { 
  width: 200px;
  height: 42px;
  background: #EEEDED;
  padding: 12px;
/* Base/Button */
  border: 1px solid #E6E5E5;
  border-radius: 4px;
 }

 & > input:nth-child(2) { 
  width: 560px;
  height: 42px;
  background: #EEEDED;
  padding: 12px;
/* Base/Button */
  border: 1px solid #E6E5E5;
  border-radius: 4px;
 }

 & > header > input:nth-child(1) { 
  width: 200px;
  height: 42px;
  background:  #EEEDED;
  padding: 12px;
/* Base/Button */
  border: 1px solid #E6E5E5;
  border-radius: 4px;
 }

 & > header > input:nth-last-child(1):nth-child(2) { 
  width: 350px;
  height: 42px;
  background:  #EEEDED;
  padding: 12px;
/* Base/Button */
  border: 1px solid #E6E5E5;
  border-radius: 4px;
 }


 & > header > input:nth-last-child(2):nth-child(2) { 
  width: 276px;
  height: 42px;
  background:  #EEEDED;
  padding: 12px;
/* Base/Button */
  border: 1px solid #E6E5E5;
  border-radius: 4px;
 }
 
 .uf{
  width: 60px;
  height: 42px;
  background:  #EEEDED;
  padding: 12px;
/* Base/Button */
  border: 1px solid #E6E5E5;
  border-radius: 4px;
 }
`

export const PaymentMethod = styled.div `
display: flex;

ul{ 
  display: flex;
  gap: 1rem;
  align-items: center;
 justify-content: center;
}

li {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 3px;

width: 178.67px;
height: 51px;

/* Base/Button */

background: #E6E5E5;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;


font-family: 'Roboto, sans-serif';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 160%;
/* or 19px */

text-transform: uppercase;

/* Base/Text */

color: #574F4D;
justify-content: center;
align-items: center;

}

button {
  border: none;
  background: none;
  padding: 10px;
  background: #E6E5E5;
  border-radius: 6px;
  padding: 16px;
}

& button:hover{ 
  border: 1px solid green;

}

&  button:focus{
  border: 1px solid green;

}
`

export const LineDiv = styled.div `

width: 368px;
height: 0px;
/* Base/Button */

border: 1px solid #E6E5E5;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

`