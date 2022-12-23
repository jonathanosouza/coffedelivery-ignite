import logotipo from "../../assets/Logo.png"
import { HeaderContainer, Location, LocationContainer } from "./Headerstyles"
import { Coffee, MapPin, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart"
import { Link } from "react-router-dom"

export function Header() {
  const { cartItem } = useContext(AddToCartContex)

  // const quantCart = cartItem.reduce(function(acumulador, quantity) {
  //     return acumulador + quantity.quantity
  // }, 0)

  return (
    <HeaderContainer>
      <a href="/"><img src={logotipo} alt="" /></a>
      <LocationContainer>
        <Location>
          <MapPin size={24} />
          <span> Fortaleza, CE</span>
        </Location>
        <Link to="Checkout">
          <a >
            <ShoppingCart size={20} />
          </a>
        </Link>
        <nav><p>{cartItem.length}</p></nav>

      </LocationContainer>
    </HeaderContainer>
  )
}