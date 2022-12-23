import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { LayoutContainer } from "./DefaultLayout";


export function DefaultLayout(){

return (
  <LayoutContainer>
      <Header/>
      <Outlet/>
  </LayoutContainer>
)
}