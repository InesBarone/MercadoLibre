import { Outlet } from 'react-router-dom';

import ProductsList from "../../components/ProductsList/ProductsList"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import './Products.css'

function Products() {

  return (
    <>
        <Outlet />
        <Breadcrumb />
        <ProductsList />
    </>
  )
}

export default Products

export async function loader({request}) {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search");

    const response = await fetch('http://localhost:8080/api/items?search=' + searchTerm);
    const resData = await response.json();

    return resData.data;
}