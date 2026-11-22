"use client";
import {createContext,useContext,useEffect,useMemo,useState,type ReactNode} from "react";
import {PRODUCTS} from "@/lib/products";
export interface CartLine {productId:string;size:string;color:string;quantity:number;}
interface CartValue {lines:CartLine[];count:number;subtotal:number;hydrated:boolean;addItem:(line:CartLine)=>void;updateQuantity:(id:string,size:string,color:string,quantity:number)=>void;removeItem:(id:string,size:string,color:string)=>void;clearCart:()=>void;}
const CartContext=createContext<CartValue|null>(null);
const KEY="shades-cart-preview-v1";
export function CartProvider({children}:{children:ReactNode}){
 const [lines,setLines]=useState<CartLine[]>([]);
 const [hydrated,setHydrated]=useState(false);
 useEffect(()=>{
  try{const raw=localStorage.getItem(KEY);if(raw){const parsed:unknown=JSON.parse(raw);if(Array.isArray(parsed)){setLines(parsed.filter((x):x is CartLine=>typeof x?.productId==="string"&&typeof x?.size==="string"&&typeof x?.color==="string"&&Number.isInteger(x?.quantity)&&x.quantity>0&&PRODUCTS.some(p=>p.id===x.productId)));}}}
  catch{localStorage.removeItem(KEY);}
  setHydrated(true);
 },[]);
 useEffect(()=>{if(hydrated)localStorage.setItem(KEY,JSON.stringify(lines));},[hydrated,lines]);
 const value=useMemo<CartValue>(()=>{
  const count=lines.reduce((n,line)=>n+line.quantity,0);
  const subtotal=lines.reduce((n,line)=>n+(PRODUCTS.find(p=>p.id===line.productId)?.price??0)*line.quantity,0);
  return {lines,count,subtotal,hydrated,
   addItem:(line)=>setLines(current=>{const found=current.find(x=>x.productId===line.productId&&x.size===line.size&&x.color===line.color);return found?current.map(x=>x===found?{...x,quantity:x.quantity+line.quantity}:x):[...current,line];}),
   updateQuantity:(id,size,color,quantity)=>setLines(current=>quantity<1?current.filter(x=>!(x.productId===id&&x.size===size&&x.color===color)):current.map(x=>x.productId===id&&x.size===size&&x.color===color?{...x,quantity:Math.min(10,quantity)}:x)),
   removeItem:(id,size,color)=>setLines(current=>current.filter(x=>!(x.productId===id&&x.size===size&&x.color===color))),
   clearCart:()=>setLines([])
  };
 },[hydrated,lines]);
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart(){const value=useContext(CartContext);if(!value)throw new Error("useCart must be used inside CartProvider");return value;}
