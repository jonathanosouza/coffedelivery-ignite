import { CodesandboxLogo, CreditCard, CurrencyDollar, MapPin, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { CheckoutContainar, FormContainer, FormEntrega, FormEntregaContainer, LineDiv, Payment, PaymentMethod, SelectedCoffeeContainer } from "./CheckoutStyles";
import { PriceContainer } from "../../components/CardCoffee/Cardcoffee";
import { useForm } from "react-hook-form";
import { AddOrRemoveContainter, AddToCartChekout, RemoveToCartChekout, SelectedCoffeContainer, SelectedCoffee, TotalConfirmed } from "../../components/CardCoffeeAddCart/CardCoffeeAddCartStyles";
import { useContext, useState } from "react";
import { AddToCartContex, purchase } from "../../components/ChecoutContex/ContexCart";
import { apiCEP } from "../../service/apiCEP";
import { Link } from "react-router-dom";




export function Checkout() {
  const { cartItem, setDataPurchase, datapurchase, handleDecrementToCart, handleIncrementToCart, handleDeleteToCart } = useContext(AddToCartContex)
  const { register, handleSubmit, reset, setValue, setFocus } = useForm()
  const [taxaentrega, setTaxaEntrega] = useState(3)

  // function handleCredito(e) {
  //   let typePayment = e.target.value
  //   setPayment(typePayment)
  // }

  function handleAddress(AddressData: purchase) {
    const Finalized = {
      ...AddressData,
      cartItem,
      // payment: payment
    }

    setDataPurchase([Finalized])
    // console.log(Finalized)
    console.log(datapurchase)
    reset()
  }

  // async function getCep(cep) {
  //   const response = await apiCEP.get(`/${cep}/json`);
  //   console.log(response.data)
  // }

  const checkCEP = (e: Event) => {
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)
    apiCEP.get(`/${cep}/json`)
      .then(response => {
        setValue('addressroad', response.data.logradouro);
        setValue('addressdistrict', response.data.bairro)
        setValue('addresscity', response.data.localidade)
        setValue('addressstate', response.data.uf)
        setFocus('addressnumber')
      }
      )
  }




  const totalCart = cartItem.reduce(function (acc, valAtual) {
    return acc + valAtual.price
  }, 0)

  const TotalSum = totalCart + taxaentrega

  return (
    <CheckoutContainar>
      <FormContainer>
        <h3>Complete seu pedido</h3>
        <FormEntrega>
          <div>
            <header>
              <MapPinLine size={24} color="orange" />
              <h3> Endereco de entrega</h3>
            </header>
            <span>Informe o endereco onde deseja receber o seu pedido</span>
          </div>

          <FormEntregaContainer>
            <input
              type="text"
              placeholder="CEP"
              {...register('cep')}
              onBlur={checkCEP}
            />

            <input
              type="text"
              placeholder="RUA"
              {...register('addressroad')}
            />

            <header>
              <input
                type="text"
                placeholder="Numero"
                {...register('addressnumber')}
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('addresscomplement')}

              />
            </header>
            <header>
              <input
                type="text"
                placeholder="Bairro"
                {...register('addressdistrict')}
              />
              <input
                type="text"
                placeholder="Cidade"
                {...register('addresscity')}
              />
              <input
                className="uf"
                type="text"
                placeholder="UF"
                {...register('addressstate')}
              />
            </header>
          </FormEntregaContainer>

        </FormEntrega>
        <Payment>
          <div>
            <header>
              <CurrencyDollar size={24} color="purple" />
              <h3> Pagamento</h3>
            </header>
            <span>O pagamento e feito na entrega. Escolha a forma que deseja pagar</span>
          </div>

          <PaymentMethod>
            <ul>
              <CreditCard size={18} color="purple" /> <button value="Cartão Crédito"
                // onClick={handleCredito} 
                {...register('payment')}
              >
                Cartão de Credito
              </button>
              <CreditCard size={18} color="purple" /> <button value="Cartão Débito"
                {...register('payment')}
              >
                Cartão de Débito
              </button>

              <CreditCard size={18} color="purple" /> <button value="Dinheiro"
                {...register('payment')}
              >
                Dinheiro
              </button>

            </ul>
          </PaymentMethod>
        </Payment>
      </FormContainer>
      <SelectedCoffeeContainer>
        <h3>Cafes selecionados</h3>
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
                            <button onClick={() => handleDecrementToCart(itens.id)}>
                              <Minus size={14} />
                            </button>
                            {itens['quantity']}
                            <button onClick={() => handleIncrementToCart(itens.id)}>
                              <Plus size={14} />
                            </button>
                          </div>
                        </AddToCartChekout>


                        <RemoveToCartChekout onClick={() => handleDeleteToCart(itens.id)}  >
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
              <span>R$ {totalCart.toFixed(2)}</span>
            </div>

            <div>
              <h3>Entrega</h3>
              <span>R$ {taxaentrega}</span>
            </div>

            <div>
              <strong>Total</strong>
              <span><strong>R$ {TotalSum}</strong></span>
            </div>


            <button onClick={handleSubmit(handleAddress)}>
              <Link to="/Sucess">
                Confirmar Pedido
              </Link>
            </button>


          </TotalConfirmed>

        </SelectedCoffee>
      </SelectedCoffeeContainer>

    </CheckoutContainar>

  )
}