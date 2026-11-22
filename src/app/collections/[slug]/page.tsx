import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Image from "next/image";
import {Container} from "@/components/ui/Container";
import {ProductCard} from "@/components/storefront/Storefront";
import {CATEGORIES,PRODUCTS} from "@/lib/products";
const collections:Record<string,{title:string;description:string;category?:string}>={
 "new-arrivals":{title:"New arrivals",description:"Fresh pieces from the preview edit."},
 "clothing":{title:"Clothing",description:"Everyday shirts, tees, trousers and layers."},
 "accessories":{title:"Accessories",description:"The finishing details in the preview edit.",category:"accessories"},
 "shirts":{title:"Shirts",description:"The everyday foundation.",category:"shirts"},
 "tees":{title:"T-shirts",description:"Easy pieces, considered.",category:"tees"},
 "trousers":{title:"Trousers",description:"A sharper point of view.",category:"trousers"},
 "layers":{title:"Layers",description:"For the in-between.",category:"layers"}
};
export async function generateStaticParams(){return Object.keys(collections).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:collections[slug]?.title??"Collection"};}
export default async function CollectionPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const item=collections[slug];if(!item)notFound();
 const image=CATEGORIES.find(c=>c.slug===item.category)?.image;
 const products=slug==="new-arrivals"?PRODUCTS.filter(p=>p.isNew):slug==="clothing"?PRODUCTS.filter(p=>p.category!=="accessories"):item.category?PRODUCTS.filter(p=>p.category===item.category):PRODUCTS;
 return <section className="py-12 sm:py-16"><Container>
  {image?<div className="relative mb-10 flex min-h-64 items-end overflow-hidden bg-[#d8d2c8] p-7 sm:min-h-80 sm:p-12"><Image src={image} alt="" fill sizes="100vw" className="object-cover"/><div className="absolute inset-0 bg-black/35"/><div className="relative text-white"><p className="text-[9px] uppercase tracking-[.2em]">The Shades edit</p><h1 className="mt-3 font-serif text-4xl sm:text-5xl">{item.title}</h1></div></div>:<><p className="text-[9px] uppercase tracking-[.22em] text-shades-stone">The collection</p><h1 className="mt-3 font-serif text-4xl sm:text-5xl">{item.title}</h1></>}
  <p className="mb-8 max-w-xl text-sm leading-7 text-shades-stone">{item.description} <span className="text-xs">({products.length} preview pieces)</span></p>
  <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>
 </Container></section>;
}
