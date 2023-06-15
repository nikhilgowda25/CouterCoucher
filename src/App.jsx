import Layout from "./components/Layout"
import HomePage from "./Pages/HomePage"
import { Men } from "./Pages/Men";
import { Women } from "./Pages/Women";
import SingleCardMen from "./components/SingleCardMen";
import SingleCardWomen from "./components/SingleCardWomen";
import Cart from "./Pages/Cart";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Link,
  } from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path='/men' element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men/:id" element={<SingleCardMen />} />
        <Route path="/women/:id" element={<SingleCardWomen />} />
        <Route path="/cart" element={<Cart />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}