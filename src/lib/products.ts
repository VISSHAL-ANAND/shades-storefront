export type Category = "shirts" | "tees" | "trousers" | "layers" | "accessories";
export interface Product {
  id:string; slug:string; name:string; category:Category; categoryLabel:string; price:number;
  description:string; image:string; alt:string; secondaryImage:string; sizes:string[];
  colors:{name:string;value:string}[]; badge?:string; isNew?:boolean;
}
const PREVIEW_ART={
 "photo-1598033129183-c4f50c736f10":"oxford-shirt",
 "photo-1603252109303-2751441dd157":"denim-shirt",
 "photo-1521572163474-6864f9cf17ab":"heavyweight-tee",
 "photo-1503342217505-b0a15ec3261c":"heavyweight-tee",
 "photo-1551028719-00167b16eac5":"utility-overshirt",
 "photo-1591047139829-d91aecb6caea":"utility-overshirt",
 "photo-1515886657613-9f3515b0c78f":"relaxed-trouser",
 "photo-1506629905607-d9a2d5b3b7a3":"relaxed-trouser",
 "photo-1618354691373-d851c5c3a990":"crew-sweatshirt",
 "photo-1578681994506-b8f463449011":"crew-sweatshirt",
 "photo-1596755094514-f87e34085b2c":"oxford-shirt",
 "photo-1588850561407-ed78c282e89b":"structured-cap",
 "photo-1521369909029-2afed882baee":"structured-cap",
 "photo-1524805444758-089113d48a6d":"everyday-watch",
 "photo-1523275335684-37898b6baf30":"everyday-watch"
} as const;
const photo=(id:keyof typeof PREVIEW_ART)=>"/images/preview/"+PREVIEW_ART[id]+".svg";
export const PRODUCTS:Product[]=[
{id:"p1",slug:"everyday-oxford-shirt",name:"Everyday Oxford Shirt",category:"shirts",categoryLabel:"Shirts",price:1890,description:"A clean, versatile button-down silhouette for everyday rotation. Fabric and product specifications are sample content pending the Shades catalogue.",image:photo("photo-1598033129183-c4f50c736f10"),alt:"Illustration of a neutral oxford shirt",secondaryImage:photo("photo-1603252109303-2751441dd157"),sizes:["S","M","L","XL"],colors:[{name:"Ivory",value:"#e9e4d9"},{name:"Olive",value:"#62664c"},{name:"Black",value:"#242424"}],badge:"Bestseller edit",isNew:true},
{id:"p2",slug:"essential-heavyweight-tee",name:"Essential Heavyweight Tee",category:"tees",categoryLabel:"T-shirts",price:990,description:"A relaxed everyday tee with a considered shape. Fabric and product specifications are sample content pending the Shades catalogue.",image:photo("photo-1521572163474-6864f9cf17ab"),alt:"Illustration of a heavyweight white T-shirt",secondaryImage:photo("photo-1503342217505-b0a15ec3261c"),sizes:["S","M","L","XL","XXL"],colors:[{name:"White",value:"#f2f0e9"},{name:"Charcoal",value:"#333333"},{name:"Sand",value:"#b9a88e"}],isNew:true},
{id:"p3",slug:"utility-overshirt",name:"Utility Overshirt",category:"layers",categoryLabel:"Layers",price:2490,description:"An easy layering piece for a sharper casual wardrobe. All product specifications are sample content pending the Shades catalogue.",image:photo("photo-1551028719-00167b16eac5"),alt:"Illustration of an olive utility overshirt",secondaryImage:photo("photo-1591047139829-d91aecb6caea"),sizes:["S","M","L","XL"],colors:[{name:"Black",value:"#252525"},{name:"Stone",value:"#a59b8c"}],badge:"New season",isNew:true},
{id:"p4",slug:"relaxed-tapered-trouser",name:"Relaxed Tapered Trouser",category:"trousers",categoryLabel:"Trousers",price:2190,description:"A versatile trouser shape designed to work across casual looks. Product specifications are sample content pending the Shades catalogue.",image:photo("photo-1515886657613-9f3515b0c78f"),alt:"Illustration of relaxed tapered trousers in warm taupe",secondaryImage:photo("photo-1506629905607-d9a2d5b3b7a3"),sizes:["30","32","34","36","38"],colors:[{name:"Black",value:"#242424"},{name:"Taupe",value:"#988675"}]},
{id:"p5",slug:"weekend-crew-sweatshirt",name:"Weekend Crew Sweatshirt",category:"layers",categoryLabel:"Layers",price:1790,description:"A simple crew layer for off-duty days. Product specifications are sample content pending the Shades catalogue.",image:photo("photo-1618354691373-d851c5c3a990"),alt:"Illustration of a forest green crew sweatshirt",secondaryImage:photo("photo-1578681994506-b8f463449011"),sizes:["S","M","L","XL"],colors:[{name:"Forest",value:"#354638"},{name:"Grey",value:"#85827d"},{name:"Black",value:"#242424"}]},
{id:"p6",slug:"classic-denim-shirt",name:"Classic Denim Shirt",category:"shirts",categoryLabel:"Shirts",price:1990,description:"A wardrobe staple with a relaxed, easy-to-style profile. Product specifications are sample content pending the Shades catalogue.",image:photo("photo-1603252109303-2751441dd157"),alt:"Illustration of a blue denim shirt",secondaryImage:photo("photo-1596755094514-f87e34085b2c"),sizes:["S","M","L","XL"],colors:[{name:"Indigo",value:"#34465d"},{name:"Washed Blue",value:"#8c9ba8"}]},
{id:"p7",slug:"everyday-structured-cap",name:"Everyday Structured Cap",category:"accessories",categoryLabel:"Accessories",price:790,description:"A low-key finishing detail for everyday looks. Product materials are sample content pending the Shades catalogue.",image:photo("photo-1588850561407-ed78c282e89b"),alt:"Illustration of a structured black cap",secondaryImage:photo("photo-1521369909029-2afed882baee"),sizes:["One size"],colors:[{name:"Black",value:"#242424"},{name:"Olive",value:"#62664c"}],isNew:true},
{id:"p8",slug:"minimal-everyday-watch",name:"Minimal Everyday Watch",category:"accessories",categoryLabel:"Accessories",price:2490,description:"A clean accessory concept for the everyday edit. Specifications are sample content pending the Shades catalogue.",image:photo("photo-1524805444758-089113d48a6d"),alt:"Illustration of a minimal everyday wristwatch",secondaryImage:photo("photo-1523275335684-37898b6baf30"),sizes:["One size"],colors:[{name:"Silver",value:"#c3c5c6"},{name:"Black",value:"#242424"}]}
];
export const CATEGORIES=[
{slug:"shirts",name:"Shirts",description:"The everyday foundation.",image:photo("photo-1598033129183-c4f50c736f10")},
{slug:"tees",name:"T-shirts",description:"Easy pieces, considered.",image:photo("photo-1521572163474-6864f9cf17ab")},
{slug:"trousers",name:"Trousers",description:"A sharper point of view.",image:photo("photo-1515886657613-9f3515b0c78f")},
{slug:"layers",name:"Layers",description:"For the in-between.",image:photo("photo-1551028719-00167b16eac5")},
{slug:"accessories",name:"Accessories",description:"The finishing details.",image:photo("photo-1588850561407-ed78c282e89b")}
] as const;
export const getProduct=(slug:string)=>PRODUCTS.find((item)=>item.slug===slug);
export const formatPrice=(amount:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(amount);
