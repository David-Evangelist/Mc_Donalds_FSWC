import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
    params: Promise<{slug: string, productId: string}>;
}

const ProductPage = async ({params}: ProductPageProps) => {

    const {slug, productId} = await params;

    //essa função é uma consulta ao banco de dados
    const product = await db.product.findUnique({where: {id: productId}})
    if (!product) {
        return notFound();
    }

    return ( 
        <div className="">

            <ProductHeader product={product}/>

            
        </div>
     );
}
 
export default ProductPage;