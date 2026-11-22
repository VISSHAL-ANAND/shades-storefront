import type {Metadata} from "next";
import {Container} from "@/components/ui/Container";
import {ShopExperience} from "@/components/storefront/Storefront";
export const metadata:Metadata={title:"Shop all pieces"};
export default function ShopPage(){return <section className="py-12 sm:py-16"><Container><p className="text-[9px] uppercase tracking-[.22em] text-shades-stone">The collection</p><h1 className="mt-3 font-serif text-4xl sm:text-5xl">Shop all pieces</h1><p className="mt-4 max-w-xl text-sm leading-7 text-shades-stone">Explore the preview edit across clothing, layers and accessories.</p><div className="mt-10"><ShopExperience/></div></Container></section>;}
