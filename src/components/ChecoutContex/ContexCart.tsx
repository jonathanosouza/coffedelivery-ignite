import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../service/api";

export interface coffes {
  id: number
  tipes: string[]
  title: string
  description: string
  price: number
  quantity: number
  photo: string
}

export interface purchase {
  cep: string
  addressroad: string
  addressnumber: string
  addresscomplement: string
  addressdistrict: string
  addressstate: string
  cartitem: []
  payment: string
}

export interface cartItem extends coffes {
  quantity: number
}

interface CofeeProps {
  coffes: coffes[]
  cartItem: cartItem[]
  datapurchase: purchase[]
  quantity: number
  setDataPurchase: any
  handleAddToCart: (id: number) => void
  handleIncrement: (id: number) => void
  handleDecrement: (id: number) => void
  handleDecrementToCart: (id: number) => void
  handleIncrementToCart: (id: number) => void
  handleDeleteToCart: (id: number) => void
}

interface CoofeePropsProviderProps {
  children: ReactNode
}

export const AddToCartContex = createContext({} as CofeeProps);
export const CartProvider = ({ children }: CoofeePropsProviderProps) => {




  const [item, setItem] = useState<any>([])
  const [cartItem, setCartItem] = useState<cartItem[]>([])
  const [coffes, setCoffes] = useState<coffes[]>([])
  const [datapurchase, setDataPurchase] = useState<purchase[]>([])
  const [payment, setPayment] = useState()
  const [quantity, setQuantity] = useState(1)

  async function loadCoffesPage() {
    const response = await api.get('dbcoffees')
    setCoffes(response.data)
    console.log(coffes)
  }


  useEffect(() => {
    loadCoffesPage()
  }, [])


  function handleIncrement(id: number) {
    const allcoffes = [...coffes]
    const productExist = allcoffes.find(coffee => coffee.id === id)
    if (productExist) {
      productExist.quantity += 1
      setCoffes(allcoffes)
    }
  }

  function handleDecrement(id: number) {
    let allcoffes = [...coffes]
    const productExist = allcoffes.find(coffee => coffee.id === id)
    console.log(productExist)
    if (productExist) {
      productExist.quantity -= 1
      setCoffes(allcoffes)
    }
  }



  function handleAddToCart(id: number) {
    const productExist = coffes.find(coffee => coffee.id === id)
    if (productExist?.id === id) {
      setCartItem([...cartItem, productExist])
    }
    console.log(cartItem)
  }



  function handleDecrementToCart(id: number) {
    const allCartcoffes = [...cartItem]
    const produtoExistToCart = cartItem.find(item => item.id == id)
    console.log(produtoExistToCart?.id)

    if (produtoExistToCart) {
      produtoExistToCart.quantity -= 1
      if (produtoExistToCart.quantity <= 0) {
        const cartFiltered = allCartcoffes.filter(item => item.id !== id)
        setCartItem(cartFiltered)
      } else {
        setCartItem(allCartcoffes)

      }
    }
  }

  function handleIncrementToCart(id: number) {
    const allCartcoffes = [...cartItem]
    const produtoExistToCart = cartItem.find(item => item.id == id)
    console.log(produtoExistToCart?.id)

    if (produtoExistToCart) {
      produtoExistToCart.quantity += 1
      setCartItem(allCartcoffes)
    }
  }

  function handleDeleteToCart(id: number) {
    const allCartcoffes = [...cartItem]
    const productsFilteredItem = allCartcoffes.filter(item => item.id == id)

    console.log(productsFilteredItem)
    if (productsFilteredItem) {
      const cartFiltered = allCartcoffes.filter(item => item.id !== id)
      setCartItem(cartFiltered)
    }
  }

  return (
    <AddToCartContex.Provider
      value=
      {{
        coffes,
        cartItem,
        handleAddToCart,
        handleDecrementToCart,
        handleDeleteToCart,
        handleIncrementToCart,
        datapurchase,
        setDataPurchase,
        quantity,
        handleIncrement,
        handleDecrement
      }}>{children}
    </AddToCartContex.Provider>
  );

}