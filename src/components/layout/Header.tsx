"use client";
import Link from "next/link";
import {useState} from "react";
import {MAIN_NAV_ITEMS} from "@/lib/navigation";
import {Container} from "@/components/ui/Container";
import {IconButton} from "@/components/ui/IconButton";
import {MenuIcon,BagIcon,SearchIcon} from "@/components/ui/Icons";
import {MobileNav} from "@/components/layout/MobileNav";
import {useCart} from "@/context/CartContext";
export function Header(){
 const [open,setOpen]=useState(false);const {count}=useCart();
 return <><header className="sticky top-0 z-40 border-b border-shades-beige/70 bg-shades-cream/95 backdrop-blur-md"><Container className="flex h-16 items-center justify-between lg:h-20"><div className="flex flex-1 items-center"><IconButton onClick={()=>setOpen(true)} aria-label="Open navigation menu" className="-ml-2 lg:hidden" aria-expanded={open}><MenuIcon className="h-5 w-5"/></IconButton><nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">{MAIN_NAV_ITEMS.map(item=><Link key={item.label} href={item.href} className="inline-flex min-h-11 items-center text-[10px] font-medium uppercase tracking-[.15em] text-shades-charcoal transition-colors hover:text-shades-forest">{item.label}</Link>)}</nav></div><Link href="/" aria-label="Shades Coimbatore home" className="group flex min-h-11 shrink-0 flex-col items-center justify-center px-3 text-center"><span className="font-serif text-xl uppercase tracking-[.26em] sm:text-2xl lg:text-3xl">SHADES</span><span className="-mt-0.5 text-[8px] uppercase tracking-[.32em] text-shades-stone sm:text-[9px]">Coimbatore</span></Link><div className="flex flex-1 items-center justify-end gap-1 sm:gap-2"><Link href="/search" aria-label="Search products" className="inline-flex h-11 w-11 items-center justify-center hover:text-shades-forest"><SearchIcon className="h-5 w-5"/></Link><Link href="/cart" aria-label={"Shopping bag with "+count+" items"} className="inline-flex min-h-11 items-center gap-2 px-2 text-[10px] uppercase tracking-[.14em] hover:text-shades-forest"><BagIcon className="h-4 w-4"/><span className="hidden sm:inline">Bag</span><span className="tabular-nums">({count})</span></Link></div></Container></header><MobileNav isOpen={open} onClose={()=>setOpen(false)}/></>;
}
