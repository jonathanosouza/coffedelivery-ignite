import { useContext, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { AddToCartContex, CartProvider } from "./components/ChecoutContex/ContexCart"


import { Router } from "./Router"

import { defaultTheme } from "./styles/themes/defaulttheme"
import { GlobalStyle } from "./styles/themes/global"


function App() {



  return (
    <ThemeProvider theme={defaultTheme}>
       <BrowserRouter>
       <CartProvider>
      <Router/>
      </CartProvider>
    </BrowserRouter>   
      <GlobalStyle />
    </ThemeProvider>
 
    
  )
}

export default App
