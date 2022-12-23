import { Coffee, Minus, Plus, ShoppingCart } from "phosphor-react";
import { CountPrice, ListItem, PriceContainer, TagContainer, Tags } from './Cardcoffee';
import { AddToCart, GoToCart } from '../ButtonCount/ButtonCount';
import { useContext, useState} from 'react';
import { AddToCartContex, CartProvider } from '../ChecoutContex/ContexCart';


export  interface Coffes{
  id: number
  tipes: string[]
  title: string
  description: string
  price: number
  quantity: number,
  photo: string
}

interface CofeeProps { 
  coffee: Coffes
}

export function CardCoffee({coffee} : CofeeProps){
 
  const {handleAddToCart,handleDecrement, handleIncrement} = useContext(AddToCartContex)

  return(
    
<ListItem>
    <img src={`../../../public/coffeeimg/${coffee.photo}`} alt="" />
  <TagContainer>
      {
        coffee.tipes.map(tag => (
          <h3 key={`${coffee.id} ${tag}`}>{tag}</h3>
        ))
      }
  </TagContainer>
      <h1>{coffee.title}</h1>
      <p>{coffee.description}</p>
        
    <CountPrice>
       <p>R$<PriceContainer>{coffee.price}</PriceContainer></p>
       <AddToCart>
          <button 
            onClick={() => handleDecrement(coffee.id)}

            disabled={coffee.quantity <= 1}
            >
            <Minus size={14}/>
          </button>
                {coffee.quantity}
          <button 
             onClick={() => handleIncrement(coffee.id)}
            >
            <Plus size={14}/>
          </button>
      </AddToCart> 
    <GoToCart 
        onClick={() => handleAddToCart(coffee.id)}
    >  <ShoppingCart size={20}/> 
    </GoToCart>
  </CountPrice>
          
        
</ListItem>
   
       
 
    

   
   )


}
