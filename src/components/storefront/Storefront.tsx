"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect,useMemo,useRef,useState,type FormEvent} from "react";
import {PRODUCTS,CATEGORIES,formatPrice,type Product,type Category} from "@/lib/products";
import {useCart} from "@/context/CartContext";
import {Button} from "@/components/ui/Button";


export function ShowroomHero(){
 const heroProducts=[PRODUCTS[0],PRODUCTS[2],PRODUCTS[3],PRODUCTS[5],PRODUCTS[1],PRODUCTS[4]];
 const repeatedProducts=[...heroProducts,...heroProducts];
 return <section className="showroom-hero">
  <div className="showroom-hero__header"><span>SHADES / COIMBATORE</span><span>THE EVERYDAY EDIT · 2026</span></div>
  <div className="showroom-hero__brand"><h1>SHADES</h1><p>Wear it your way</p></div>
  <div className="showroom-hero__intro"><span>01 — The new season</span><span>Menswear, in motion</span></div>
  <div className="showroom-viewport" aria-label="Featured pieces from the preview collection">
   <div className="showroom-track">
    {repeatedProducts.map((product,index)=>{
     const isRepeated=index>=heroProducts.length;
     return <Link key={(isRepeated?"repeat-":"")+product.id} href={"/product/"+product.slug} className="showroom-item" tabIndex={isRepeated?-1:undefined} aria-hidden={isRepeated||undefined} aria-label={isRepeated?undefined:"Explore "+product.name}>
      <span className="showroom-item__hanger" aria-hidden="true"><svg viewBox="0 0 42 36" fill="none"><path d="M21 7.5a3.25 3.25 0 1 1 3.25 3.25c-1.6 0-2.6.8-2.6 2.3v2.1L37 27.1c1.6 1.3.7 3.9-1.4 3.9H6.4c-2.1 0-3-2.6-1.4-3.9l16.6-12"/></svg></span>
      <div className="showroom-item__image"><Image src={product.image} alt={isRepeated?"":product.alt} fill sizes="(max-width:640px) 58vw,(max-width:1024px) 34vw,23vw" loading={index<heroProducts.length?"eager":"lazy"} className="object-cover"/></div>
      <span className="showroom-item__caption"><span>{product.categoryLabel}</span><span>↗</span></span>
     </Link>;
    })}
   </div>
  </div>
  <div className="showroom-hero__footer"><span>Scroll to explore the collection</span><Link href="/shop">Enter the store <span aria-hidden="true">↗</span></Link><span>Coimbatore · India</span></div>
 </section>;
}

export function ProductCard({product}:{product:Product}){
 return <article className="group"><Link href={"/product/"+product.slug} className="block">
  <div className="product-card-media relative aspect-[3/4] overflow-hidden bg-[#e9e5dd]"><Image src={product.image} alt={product.alt} fill sizes="(max-width:640px) 48vw,(max-width:1024px) 30vw,23vw" className="product-card-image product-card-image--primary object-cover"/><Image src={product.secondaryImage} alt="" aria-hidden="true" fill sizes="(max-width:640px) 48vw,(max-width:1024px) 30vw,23vw" className="product-card-image product-card-image--secondary object-cover"/>{product.badge&&<span className="absolute left-3 top-3 z-10 bg-shades-cream/95 px-3 py-1.5 text-[9px] uppercase tracking-[.15em]">{product.badge}</span>}<span className="product-card-cta absolute bottom-3 right-3 z-10 translate-y-2 bg-shades-cream px-3 py-2 text-[9px] uppercase tracking-[.15em] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">View piece ↗</span></div>
  <div className="flex justify-between gap-2 pt-4"><div><p className="text-[9px] uppercase tracking-[.17em] text-shades-stone">{product.categoryLabel}</p><h3 className="mt-1 font-serif text-base sm:text-lg">{product.name}</h3></div><p className="shrink-0 pt-4 text-xs">{formatPrice(product.price)}</p></div>
 </Link></article>;
}

export function RollingShowcase(){
 const items=PRODUCTS.slice(0,6);
 return <section className="overflow-hidden bg-shades-charcoal py-16 text-shades-cream sm:py-20">
  <div className="mx-auto mb-9 flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row sm:items-end sm:px-6 lg:px-12"><div><p className="text-[9px] uppercase tracking-[.24em] text-white/60">A moving point of view</p><h2 className="mt-3 font-serif text-3xl sm:text-4xl">The rolling edit</h2></div><p className="max-w-xs text-xs leading-6 text-white/65">A continuous look at the preview collection. Pause on hover or keyboard focus, or swipe through on touch screens.</p></div>
  <div className="showcase-viewport" aria-label="Automatically scrolling clothing showcase"><div className="showcase-track">
   {items.map(p=><Link key={p.id} href={"/product/"+p.slug} className="showcase-card group"><div className="relative aspect-[4/5] overflow-hidden bg-[#383832]"><Image src={p.image} alt={p.alt} fill sizes="260px" className="object-cover transition-transform duration-700 group-hover:scale-105"/></div><div className="flex justify-between gap-2 pt-3"><span className="font-serif text-sm">{p.name}</span><span className="text-[9px] text-white/60">{p.categoryLabel}</span></div></Link>)}
   {items.map(p=><Link key={"repeat-"+p.id} href={"/product/"+p.slug} tabIndex={-1} aria-hidden="true" className="showcase-card group"><div className="relative aspect-[4/5] overflow-hidden bg-[#383832]"><Image src={p.image} alt="" fill sizes="260px" className="object-cover"/></div><div className="flex justify-between gap-2 pt-3"><span className="font-serif text-sm">{p.name}</span><span className="text-[9px] text-white/60">{p.categoryLabel}</span></div></Link>)}
  </div></div><div className="mx-auto mt-8 flex max-w-7xl justify-end px-4 sm:px-6 lg:px-12"><Link href="/shop" className="inline-flex min-h-11 items-center border-b border-white/50 text-[10px] uppercase tracking-[.18em]">Explore the full edit ↗</Link></div>
 </section>;
}

export function ShopExperience({initialCategory}:{initialCategory?:string}){
 const [category,setCategory]=useState(initialCategory??"all");const [sort,setSort]=useState("featured");
 const products=useMemo(()=>{const filtered=PRODUCTS.filter(p=>category==="all"||p.category===category);if(sort==="low")return [...filtered].sort((a,b)=>a.price-b.price);if(sort==="high")return [...filtered].sort((a,b)=>b.price-a.price);if(sort==="name")return [...filtered].sort((a,b)=>a.name.localeCompare(b.name));return filtered;},[category,sort]);
 return <><div className="flex flex-col gap-5 border-y border-shades-beige py-5 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2"><button onClick={()=>setCategory("all")} aria-pressed={category==="all"} className={"filter-chip "+(category==="all"?"filter-chip--active":"")}>All pieces</button>{CATEGORIES.map(c=><button key={c.slug} onClick={()=>setCategory(c.slug as Category)} aria-pressed={category===c.slug} className={"filter-chip "+(category===c.slug?"filter-chip--active":"")}>{c.name}</button>)}</div><label className="flex items-center gap-3 text-[10px] uppercase tracking-[.15em] text-shades-stone">Sort by<select value={sort} onChange={e=>setSort(e.target.value)} className="min-h-11 border border-shades-beige bg-transparent px-3 text-xs text-shades-charcoal"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="name">Name</option></select></label></div><p className="mb-6 mt-5 text-[10px] uppercase tracking-[.14em] text-shades-stone">{products.length} preview pieces · sample catalogue</p><div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div></>;
}

function FitAdvisor({product,onSelectSize}:{product:Product;onSelectSize:(size:string)=>void}){
 const [open,setOpen]=useState(false);
 const [fit,setFit]=useState("Menswear");
 const [height,setHeight]=useState(180);
 const [weight,setWeight]=useState(72);
 const [heightUnit,setHeightUnit]=useState<"cm"|"ft">("ft");
 const [weightUnit,setWeightUnit]=useState<"kg"|"lb">("kg");
 const dialogRef=useRef<HTMLDialogElement>(null);

 useEffect(()=>{
  const dialog=dialogRef.current;
  if(!dialog)return;
  if(open&&!dialog.open)dialog.showModal();
  if(!open&&dialog.open)dialog.close();
 },[open]);

 const bmi=weight/((height/100)*(height/100));
 const targetSize=bmi<18.5?"XS":bmi<21.5?"S":bmi<26?"M":bmi<30?"L":"XL";
 const targetIndex=product.sizes.findIndex(size=>size.toUpperCase()===targetSize);
 const fallbackIndex=bmi<19?0:bmi<22?1:bmi<25?2:bmi<29?3:4;
 const recommendation=targetIndex>=0?product.sizes[targetIndex]:product.sizes[Math.min(fallbackIndex,product.sizes.length-1)];
 const totalInches=Math.round(height/2.54);
 const displayHeight=heightUnit==="cm"?Math.round(height):totalInches;
 const displayWeight=weightUnit==="kg"?weight:Math.round(weight*2.20462);
 const heightLabel=heightUnit==="cm"?Math.round(height)+" cm":Math.floor(totalInches/12)+"′ "+totalInches%12+"″";
 const weightLabel=weightUnit==="kg"?weight+" kg":Math.round(weight*2.20462)+" lb";

 return <>
  <button type="button" onClick={()=>setOpen(true)} className="fit-trigger">Find your fit <span aria-hidden="true">↗</span></button>
  <dialog ref={dialogRef} className="fit-dialog" aria-labelledby="fit-dialog-title" onClose={()=>setOpen(false)}>
   <div className="fit-dialog__header"><span>SIZE ADVISOR</span><button type="button" onClick={()=>setOpen(false)} aria-label="Close size advisor">×</button></div>
   <div className="fit-dialog__content">
    <div className="fit-dialog__product"><span className="fit-dialog__swatch" aria-hidden="true"/><span><strong>{product.name}</strong><small>{formatPrice(product.price)} · Preview item</small></span></div>
    <div className="fit-progress" aria-label="Step 1 of 3: Measurements"><span/><span/><span/></div>
    <p className="fit-dialog__step">Step 1 of 3 · Measurements</p>
    <h2 id="fit-dialog-title">Let’s find your fit.</h2>
    <p className="fit-dialog__subtitle">Two quick details to get you started.</p>
    <div className="fit-switch" role="group" aria-label="Fit profile">{["Womenswear","Menswear"].map(option=><button key={option} type="button" onClick={()=>setFit(option)} aria-pressed={fit===option}>{option}</button>)}</div>
    <div className="fit-measurement">
     <div className="fit-measurement__person" aria-hidden="true"><svg viewBox="0 0 48 150" fill="none"><circle cx="24" cy="12" r="8"/><path d="M14 30h20l5 52-9 61M14 30 9 82l9 61m-8-83h28M24 30v53"/></svg></div>
     <div className="fit-measurement__controls">
      <div className="fit-unit"><span>HEIGHT</span><div><button type="button" aria-pressed={heightUnit==="cm"} onClick={()=>setHeightUnit("cm")}>CM</button><button type="button" aria-pressed={heightUnit==="ft"} onClick={()=>setHeightUnit("ft")}>FT/IN</button></div></div>
      <strong className="fit-measurement__value">{heightLabel}</strong>
      <div className="fit-range"><button type="button" aria-label="Decrease height" onClick={()=>setHeight(value=>Math.max(145,Number((value-(heightUnit==="cm"?1:2.54)).toFixed(2))))}>−</button><input type="range" min={heightUnit==="cm"?145:57} max={heightUnit==="cm"?205:81} value={displayHeight} onChange={event=>setHeight(heightUnit==="cm"?Number(event.target.value):Number((Number(event.target.value)*2.54).toFixed(2)))} aria-label={heightUnit==="cm"?"Height in centimeters":"Height in feet and inches"}/><button type="button" aria-label="Increase height" onClick={()=>setHeight(value=>Math.min(205,Number((value+(heightUnit==="cm"?1:2.54)).toFixed(2))))}>+</button></div>
      <div className="fit-unit fit-unit--weight"><span>WEIGHT</span><div><button type="button" aria-pressed={weightUnit==="kg"} onClick={()=>setWeightUnit("kg")}>KG</button><button type="button" aria-pressed={weightUnit==="lb"} onClick={()=>setWeightUnit("lb")}>LB</button></div></div>
      <strong className="fit-measurement__value">{weightLabel}</strong>
      <div className="fit-range"><button type="button" aria-label="Decrease weight" onClick={()=>setWeight(value=>Math.max(40,Number((value-(weightUnit==="kg"?1:1/2.20462)).toFixed(2))))}>−</button><input type="range" min={weightUnit==="kg"?40:88} max={weightUnit==="kg"?120:265} value={displayWeight} onChange={event=>setWeight(weightUnit==="kg"?Number(event.target.value):Number((Number(event.target.value)/2.20462).toFixed(2)))} aria-label={"Weight in "+weightUnit}/><button type="button" aria-label="Increase weight" onClick={()=>setWeight(value=>Math.min(120,Number((value+(weightUnit==="kg"?1:1/2.20462)).toFixed(2))))}>+</button></div>
     </div>
    </div>
    <div className="fit-estimate"><span><strong>LIVE ESTIMATE</strong><small>Based on your measurements</small></span><strong>{recommendation}</strong></div>
    <p className="fit-disclaimer">Demo fit guidance only. This preview uses sample sizing and is not a guarantee of fit.</p>
   </div>
   <div className="fit-dialog__footer"><button type="button" onClick={()=>{onSelectSize(recommendation);setOpen(false);}}>Use size {recommendation} <span aria-hidden="true">→</span></button></div>
  </dialog>
 </>;
}

export function ProductDetails({product}:{product:Product}){
 const [size,setSize]=useState(product.sizes[0]);const [color,setColor]=useState(product.colors[0].name);const [qty,setQty]=useState(1);const [added,setAdded]=useState(false);const {addItem}=useCart();
 function add(){addItem({productId:product.id,size,color,quantity:qty});setAdded(true);}
 return <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20"><div className="grid grid-cols-2 gap-3"><div className="product-gallery-frame relative col-span-2 aspect-[4/5] overflow-hidden bg-[#e9e5dd] sm:col-span-1"><Image src={product.image} alt={product.alt} fill priority sizes="(max-width:1024px) 100vw,50vw" className="object-cover"/></div><div className="product-gallery-frame relative hidden aspect-[4/5] overflow-hidden bg-[#e9e5dd] sm:block"><Image src={product.secondaryImage} alt={"Alternate view of "+product.name} fill sizes="25vw" className="object-cover"/></div></div>
 <div className="lg:sticky lg:top-32 lg:self-start"><Link href="/shop" className="text-[9px] uppercase tracking-[.2em] text-shades-stone">Shop / {product.categoryLabel}</Link><p className="mt-7 text-[10px] uppercase tracking-[.2em] text-shades-forest">{product.categoryLabel}</p><h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{product.name}</h1><p className="mt-5 text-lg">{formatPrice(product.price)}</p><p className="mt-2 text-[9px] uppercase tracking-[.15em] text-shades-stone">Preview price · sample catalogue only</p><p className="mt-8 max-w-lg text-sm leading-7 text-shades-stone">{product.description}</p>
 <div className="mt-8 border-t border-shades-beige pt-6"><p className="text-[10px] uppercase tracking-[.17em]">Colour / {color}</p><div className="mt-4 flex gap-3">{product.colors.map(c=><button key={c.name} type="button" onClick={()=>setColor(c.name)} aria-label={"Select "+c.name} aria-pressed={color===c.name} className={"h-8 w-8 rounded-full border-2 p-0.5 "+(color===c.name?"border-shades-charcoal":"border-transparent")}><span className="block h-full w-full rounded-full border border-black/10" style={{backgroundColor:c.value}}/></button>)}</div></div>
 <div className="mt-7"><div className="flex items-center justify-between gap-3"><p className="text-[10px] uppercase tracking-[.17em]">Select size</p><FitAdvisor product={product} onSelectSize={setSize}/></div><div className="mt-3 grid grid-cols-5 gap-2">{product.sizes.map(s=><button key={s} type="button" onClick={()=>setSize(s)} aria-pressed={size===s} className={"min-h-11 border text-xs "+(size===s?"border-shades-charcoal bg-shades-charcoal text-shades-cream":"border-shades-beige")}>{s}</button>)}</div></div>
 <div className="mt-7 flex items-center gap-4"><div className="flex h-12 items-center border border-shades-beige"><button type="button" onClick={()=>setQty(v=>Math.max(1,v-1))} aria-label="Decrease quantity" className="h-11 w-10">−</button><span className="w-7 text-center text-xs">{qty}</span><button type="button" onClick={()=>setQty(v=>Math.min(10,v+1))} aria-label="Increase quantity" className="h-11 w-10">+</button></div><Button onClick={add} className="flex-1">{added?"Added to bag":"Add to bag"}</Button></div>{added&&<p role="status" className="mt-3 text-xs text-shades-forest">Added to your preview bag.</p>}
 <div className="mt-9 space-y-3 border-t border-shades-beige pt-6 text-xs leading-6 text-shades-stone"><p><strong className="text-shades-charcoal">Product note</strong> — Images, descriptions, prices, variants and stock are sample content to be replaced with the approved catalogue.</p><p><strong className="text-shades-charcoal">Delivery and returns</strong> — Confirmed store policies will appear here once supplied.</p></div>
 </div></div>;
}

export function CartView(){
 const {lines,subtotal,updateQuantity,removeItem,hydrated}=useCart();
 if(!hydrated)return <p className="py-20 text-center text-sm text-shades-stone">Loading your bag…</p>;
 if(!lines.length)return <div className="py-20 text-center"><p className="text-[10px] uppercase tracking-[.2em] text-shades-stone">Your bag is waiting</p><h1 className="mt-4 font-serif text-4xl">A little room for something good.</h1><p className="mx-auto mt-4 max-w-md text-sm text-shades-stone">Explore the preview collection and add a piece to your bag.</p><Link href="/shop" className="mt-8 inline-flex min-h-11 items-center bg-shades-charcoal px-6 text-xs uppercase tracking-[.16em] text-shades-cream hover:bg-shades-forest">Explore the edit</Link></div>;
 return <div className="grid gap-12 lg:grid-cols-[1fr_360px]"><div className="divide-y divide-shades-beige">{lines.map(line=>{const p=PRODUCTS.find(x=>x.id===line.productId);if(!p)return null;return <div key={line.productId+line.size+line.color} className="grid grid-cols-[92px_1fr] gap-4 py-6 sm:grid-cols-[120px_1fr_110px_90px] sm:items-center"><Link href={"/product/"+p.slug} className="relative aspect-[3/4] overflow-hidden bg-[#e9e5dd]"><Image src={p.image} alt={p.alt} fill sizes="120px" className="object-cover"/></Link><div><Link href={"/product/"+p.slug} className="font-serif text-lg">{p.name}</Link><p className="mt-1 text-[10px] text-shades-stone">{line.color} · {line.size}</p><p className="mt-2 text-xs">{formatPrice(p.price)}</p><button onClick={()=>removeItem(line.productId,line.size,line.color)} className="mt-3 min-h-9 text-[9px] uppercase tracking-[.15em] text-shades-stone underline">Remove</button></div><div className="flex h-10 w-fit items-center border border-shades-beige"><button onClick={()=>updateQuantity(line.productId,line.size,line.color,line.quantity-1)} aria-label="Decrease quantity" className="h-9 w-9">−</button><span className="w-7 text-center text-xs">{line.quantity}</span><button onClick={()=>updateQuantity(line.productId,line.size,line.color,line.quantity+1)} aria-label="Increase quantity" className="h-9 w-9">+</button></div><p className="col-span-2 text-right text-xs sm:col-span-1">{formatPrice(p.price*line.quantity)}</p></div>;})}</div><aside className="h-fit border border-shades-beige bg-white/60 p-6 sm:p-8"><h2 className="font-serif text-2xl">Summary</h2><div className="mt-7 flex justify-between border-b border-shades-beige pb-4 text-sm"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><p className="mt-4 text-xs leading-6 text-shades-stone">Shipping, taxes and delivery options are not calculated in this preview.</p><p className="mt-5 text-[9px] uppercase tracking-[.16em] text-shades-stone">Sample catalogue pricing</p><Link href="/checkout" className="mt-7 flex min-h-11 w-full items-center justify-center bg-shades-charcoal px-6 text-xs uppercase tracking-[.16em] text-shades-cream hover:bg-shades-forest">Continue to checkout</Link><Link href="/shop" className="mt-4 block text-center text-[10px] uppercase tracking-[.15em] underline">Continue shopping</Link></aside></div>;
}

export function CheckoutForm(){
 const {subtotal,count,lines,clearCart}=useCart();
 const [confirmation,setConfirmation]=useState<{reference:string;items:{name:string;quantity:number;size:string;color:string;total:number}[];total:number}|null>(null);
 function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  const items=lines.flatMap(line=>{const product=PRODUCTS.find(p=>p.id===line.productId);return product?[{name:product.name,quantity:line.quantity,size:line.size,color:line.color,total:product.price*line.quantity}]:[];});
  setConfirmation({reference:"SHD-DEMO-"+String(Date.now()).slice(-6),items,total:subtotal});
  clearCart();
 }
 if(!confirmation&&lines.length===0)return <div className="mx-auto max-w-xl py-20 text-center"><p className="text-[10px] uppercase tracking-[.2em] text-shades-stone">Nothing to check out yet</p><h2 className="mt-4 font-serif text-3xl">Your bag is empty.</h2><Link href="/shop" className="mt-7 inline-flex min-h-11 items-center bg-shades-charcoal px-6 text-xs uppercase tracking-[.16em] text-shades-cream">Explore the collection</Link></div>;
 if(confirmation)return <div className="mx-auto max-w-3xl border border-shades-beige bg-white/75 p-7 sm:p-12"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-shades-forest text-2xl text-white">✓</div><p className="mt-8 text-[10px] uppercase tracking-[.2em] text-shades-forest">Demo order confirmed</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Consider it yours.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-shades-stone">Your sample checkout journey is complete. This confirmation is generated locally for demonstration only; no order was sent to Shades and no payment was taken.</p><div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-y border-shades-beige py-5"><div><p className="text-[9px] uppercase tracking-[.17em] text-shades-stone">Demo reference</p><p className="mt-1 text-sm font-medium tracking-[.08em]">{confirmation.reference}</p></div><div className="text-right"><p className="text-[9px] uppercase tracking-[.17em] text-shades-stone">Demo total</p><p className="mt-1 text-lg">{formatPrice(confirmation.total)}</p></div></div><div className="mt-7 space-y-4">{confirmation.items.map((item,index)=><div key={item.name+item.size+index} className="flex justify-between gap-4 text-sm"><div><p>{item.name}</p><p className="mt-1 text-xs text-shades-stone">{item.color} · Size {item.size} · Qty {item.quantity}</p></div><p className="shrink-0">{formatPrice(item.total)}</p></div>)}</div><div className="mt-9 flex flex-wrap gap-3"><Link href="/shop" className="inline-flex min-h-11 items-center bg-shades-charcoal px-6 text-xs uppercase tracking-[.16em] text-shades-cream">Continue exploring</Link><Link href="/" className="inline-flex min-h-11 items-center border border-shades-charcoal px-6 text-xs uppercase tracking-[.16em]">Back to home</Link></div></div>;
 return <div className="grid gap-12 lg:grid-cols-[1fr_360px]"><form onSubmit={submit} className="space-y-8"><section><p className="text-[9px] uppercase tracking-[.2em] text-shades-stone">01 / Contact</p><h2 className="mt-2 font-serif text-2xl">Your details</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="field-label">Full name<input required autoComplete="name" className="field-input" placeholder="Your name"/></label><label className="field-label">Email address<input required type="email" autoComplete="email" className="field-input" placeholder="you@example.com"/></label><label className="field-label sm:col-span-2">Phone number<input required type="tel" autoComplete="tel" className="field-input" placeholder="Mobile number"/></label></div></section><section className="border-t border-shades-beige pt-8"><p className="text-[9px] uppercase tracking-[.2em] text-shades-stone">02 / Address</p><h2 className="mt-2 font-serif text-2xl">Where should we send it?</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="field-label sm:col-span-2">Address<input required autoComplete="street-address" className="field-input" placeholder="House number, street and area"/></label><label className="field-label">City<input required autoComplete="address-level2" className="field-input" placeholder="City"/></label><label className="field-label">PIN code<input required inputMode="numeric" pattern="[0-9]{6}" autoComplete="postal-code" className="field-input" placeholder="6-digit PIN code"/></label></div></section><p className="border border-shades-beige bg-white/60 p-5 text-xs leading-6 text-shades-stone">Frontend demo only. Do not enter real personal or payment information. Data is not sent to a server. Delivery coverage, returns and payment processing are not configured.</p><Button type="submit">Preview checkout flow</Button></form><aside className="h-fit border border-shades-beige p-6 sm:p-8"><h2 className="font-serif text-2xl">Order summary</h2><div className="mt-6 flex justify-between border-b border-shades-beige pb-4 text-sm"><span>{count} items</span><span>{formatPrice(subtotal)}</span></div><div className="mt-4 flex justify-between text-sm"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><p className="mt-4 text-xs leading-6 text-shades-stone">Shipping and taxes are not included.</p><div className="mt-6 flex justify-between border-t border-shades-beige pt-5 text-sm font-medium"><span>Estimated total</span><span>{formatPrice(subtotal)}</span></div></aside></div>;
}

export function SearchExperience(){
 const [query,setQuery]=useState("");const results=useMemo(()=>{const q=query.trim().toLowerCase();return q?PRODUCTS.filter(p=>(p.name+" "+p.categoryLabel+" "+p.description).toLowerCase().includes(q)):[];},[query]);
 return <><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search shirts, layers, accessories…" aria-label="Search the catalogue" className="w-full border-b border-shades-charcoal bg-transparent py-5 font-serif text-2xl outline-none placeholder:text-shades-stone/60 sm:text-4xl"/><div className="mt-8">{!query.trim()?<p className="text-sm text-shades-stone">Start typing to explore the preview catalogue.</p>:results.length?<><p className="mb-5 text-[10px] uppercase tracking-[.16em] text-shades-stone">{results.length} matching pieces</p><div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{results.map(p=><ProductCard key={p.id} product={p}/>)}</div></>:<p className="py-12 font-serif text-2xl">No pieces found. Try another search.</p>}</div></>;
}

export function StoreNotice(){
 return <section id="store-info" className="bg-shades-forest py-16 text-shades-cream sm:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-12"><div><p className="text-[9px] uppercase tracking-[.22em] text-white/65">In person, in Coimbatore</p><h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Good style is better experienced up close.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-white/75">Visit details, opening hours and contact information will be added after the Shades team confirms them.</p></div><div className="border-t border-white/25 pt-5 text-xs leading-6 text-white/75 md:min-w-64 md:border-l md:border-t-0 md:pl-7 md:pt-0"><p className="uppercase tracking-[.16em] text-white">Shades Coimbatore</p><p className="mt-2">Address pending confirmation</p><p>Opening hours pending confirmation</p><p>Contact details pending confirmation</p></div></div></section>;
}
