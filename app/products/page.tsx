import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { toast } from "react-toastify";
import ReactCustomPaginate from "../components/shared/reactCutsomPaginate";
import ProductList from "../components/products/productList";

interface Props {
  params: {
    id: string;
  };
}

const getProducts = async () => {
  let res = await fetch(`http://localhost:5000/api/products?per_page=4`, {});
  //console.log(res);
  if (!res.ok) {
    //toast.error('Something went wrong. Please try again')
    //console.log('Something went wrong. Please try again');
    throw new Error("Something went wrong. Please try again");
  }

  return res.json();
};

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ) {
//   let products = await getProducts();
// }



export default async function ShowProduct({ params }: Props) {
  let productsData = await getProducts();
    //console.log(productsData)

  return (
    <div className="bg-zinc-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <ProductList productsData={productsData} />

      </div>
      
    </div>
  );
}
