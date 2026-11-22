import type {Metadata} from "next";
import {Container} from "@/components/ui/Container";
import {CartView} from "@/components/storefront/Storefront";
export const metadata:Metadata={title:"Your shopping bag"};
export default function CartPage(){return <section className="py-12 sm:py-16"><Container><p className="text-[9px] uppercase tracking-[.2em] text-shades-stone">Your selection</p><h1 className="mt-3 mb-9 font-serif text-4xl sm:text-5xl">Shopping bag</h1><CartView/></Container></section>;}
