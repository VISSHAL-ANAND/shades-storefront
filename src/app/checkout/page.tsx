import type {Metadata} from "next";
import Link from "next/link";
import {Container} from "@/components/ui/Container";
import {CheckoutForm} from "@/components/storefront/Storefront";
export const metadata:Metadata={title:"Checkout preview"};
export default function CheckoutPage(){return <section className="py-12 sm:py-16"><Container><Link href="/cart" className="text-[9px] uppercase tracking-[.17em] text-shades-stone">← Back to bag</Link><p className="mt-8 text-[9px] uppercase tracking-[.2em] text-shades-stone">Checkout · preview only</p><h1 className="mt-3 mb-9 font-serif text-4xl sm:text-5xl">Checkout</h1><CheckoutForm/></Container></section>;}
