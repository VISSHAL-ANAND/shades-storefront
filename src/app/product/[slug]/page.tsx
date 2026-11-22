import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Container} from "@/components/ui/Container";
import {ProductDetails} from "@/components/storefront/Storefront";
import {PRODUCTS,getProduct} from "@/lib/products";
export async function generateStaticParams(){return PRODUCTS.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:getProduct(slug)?.name??"Product"};}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=getProduct(slug);if(!product)notFound();return <section className="py-8 sm:py-12"><Container><ProductDetails product={product}/></Container></section>;}
