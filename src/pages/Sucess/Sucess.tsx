import { SucessDataContainer, SucessPageContainer, SucessPageData } from "./SucessStyles";
import deliverylogo from "../../assets/delivery.png"
import { CurrencyDollar, HourglassSimpleLow, NavigationArrow } from "phosphor-react";
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart";
import { useContext } from "react";


export function Sucess() {

  const { datapurchase } = useContext(AddToCartContex)
  return (
    <div>
      <SucessPageContainer>
        <SucessPageData>
          <h1>Uhu! Pedido Confirmado</h1>
          <span style={{ 'marginTop': '-40px' }}>agora é só aguardar que logo o café chegará até você</span>
          {
            <SucessDataContainer >
              {datapurchase.map((data, indice) => (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} >
                    <NavigationArrow size={32}
                      style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px' }} />
                    <span> Entraga em rua   <strong>{data.addressroad}, {data.addressnumber}, {data.addressstate} - {data.addressdistrict}</strong> </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <HourglassSimpleLow size={32}
                      style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px' }} />
                    <span> Previsão de entrega de 20 - 30 minutos</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CurrencyDollar size={32}
                      style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px' }} />
                    <span> Pagamento na entrega com <strong> {data.payment}</strong> </span>
                  </div>
                </>
              )
              )}

            </SucessDataContainer>
          }

        </SucessPageData>

        <SucessPageData>
          <img src={deliverylogo} alt="" />
        </SucessPageData>

      </SucessPageContainer>

    </div >
  )
}