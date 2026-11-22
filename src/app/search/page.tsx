import type {Metadata} from "next";
import {Container} from "@/components/ui/Container";
import {SearchExperience} from "@/components/storefront/Storefront";
export const metadata:Metadata={title:"Search"};
export default function SearchPage(){return <section className="py-12 sm:py-16"><Container><p className="text-[9px] uppercase tracking-[.2em] text-shades-stone">Find your piece</p><h1 className="mt-3 font-serif text-4xl sm:text-5xl">Search the edit</h1><div className="mt-10"><SearchExperience/></div></Container></section>;}
