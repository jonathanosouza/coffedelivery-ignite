import { Minus, Plus, Trash } from "phosphor-react";
import { PriceContainer } from "../CardCoffee/Cardcoffee";
import { AddOrRemoveContainter, AddToCartChekout, RemoveToCartChekout, SelectedCoffeContainer, SelectedCoffee, TotalConfirmed } from "./CardCoffeeAddCartStyles";
import imgcoffe from './../../assets/Coffee.png';
import { useContext, useEffect } from "react";
import { AddToCartContex, CartProvider } from "../ChecoutContex/ContexCart";
import { LineDiv } from "../../pages/Checkout/CheckoutStyles";

export function CardCoffeeAddCart() {

  const { cartItem } = useContext(AddToCartContex)


  return (
    <SelectedCoffee>
      {cartItem.map(itens => {
        if (itens.id >= 0)
          return (
            <>
              <SelectedCoffeContainer>
                <img src={`../../../public/coffeeimg/${itens.photo}`} alt="" />
                <div>

                  <span>{itens.title}</span>


                  <AddOrRemoveContainter>
                    <AddToCartChekout>
                      <div>
                        <button>
                          <Minus size={14} />
                        </button>
                        {itens['quantity']}
                        <button>
                          <Plus size={14} />
                        </button>
                      </div>
                    </AddToCartChekout>


                    <RemoveToCartChekout>
                      <span><Trash size={18} />Remover</span>
                    </RemoveToCartChekout>
                  </AddOrRemoveContainter>

                </div>
                <p>R$ <PriceContainer>{itens.price}</PriceContainer></p>



              </SelectedCoffeContainer>
              <div>
                <LineDiv></LineDiv>
              </div>

            </>
          )
      })}

      <TotalConfirmed>
        <div>
          <h3>Total de itens</h3>
          <span>R$ 29,90</span>
        </div>

        <div>
          <h3>Entrega</h3>
          <span>R$ 3,00</span>
        </div>

        <div>
          <strong>Total</strong>
          <span><strong>R$ 29,90</strong></span>
        </div>

        <button> Confirmar Pedido</button>
      </TotalConfirmed>

    </SelectedCoffee>

  )
}
