let querystring=window.location.search
let urlparam=new URLSearchParams(querystring)
let productID=urlparam.get('id');
const products = [
  {
    id: 1,
    name: "Elegant Glow Mirror",
    category: "Living Room Mirror",
    type: "Wooden Framed",
    material: "Tempered Glass",
    colors: ["Brown", "Walnut"],
    sizes: ["24x36 inches", "30x42 inches"],
    price: 18000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDo-0ItGK1FdyWuLcwa18qCAGQKx8lZ3SqzQ&s",
    description: "A stylish wooden framed mirror designed to enhance living room ambiance with a warm and elegant touch."
  },
  {
    id: 2,
    name: "Aqua Reflect Pro",
    category: "Bathroom Mirror",
    type: "Bluetooth Mirror",
    material: "Anti-Fog Glass",
    colors: ["White", "Black"],
    sizes: ["20x30 inches", "24x36 inches"],
    price: 42000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9gcCKND2Dz6iaz2LNJeiycAnws8Nf4EcAQ&s",
    description: "Modern Bluetooth-enabled mirror with built-in speakers and LED lighting."
  },
  {
    id: 3,
    name: "Classic Antique Frame",
    category: "Bedroom Mirror",
    type: "Antique Mirror",
    material: "Glass",
    colors: ["Gold", "Bronze"],
    sizes: ["28x40 inches", "32x48 inches"],
    price: 55000,
    currency: "PKR",
    image: "https://www.waseeh.com/cdn/shop/files/WhatsAppImage2023-06-26at3.17.28PM.jpg?v=1688403457",
    description: "Vintage antique mirror with intricate detailing."
  },
  {
    id: 4,
    name: "Office Shine Panel",
    category: "Office Mirror",
    type: "Metal Bordered",
    material: "Tempered Glass",
    colors: ["Silver", "Black"],
    sizes: ["24x36 inches", "30x40 inches"],
    price: 22000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBGLrZPmw7BGWUe7zJCDncr4qonZarf813g&s",
    description: "Minimal metal-bordered mirror for office interiors."
  },
  {
    id: 5,
    name: "Vanity Luxe",
    category: "Dressing Room Mirror",
    type: "Acrylic Bordered",
    material: "Acrylic Glass",
    colors: ["White", "Transparent"],
    sizes: ["18x28 inches", "22x32 inches"],
    price: 28000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcgLNR_iD24hNcW4iXgF-x83NAiDLf-rVaQ&s",
    description: "Elegant acrylic mirror for grooming."
  },

  {
    id: 6,
    name: "Royal Wood Arc",
    category: "Living Room Mirror",
    type: "Wooden Framed",
    material: "Tempered Glass",
    colors: ["Dark Brown", "Oak"],
    sizes: ["30x45 inches", "36x50 inches"],
    price: 35000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAhmjyWQMuuCQRFzF7pNkV0rE5wamHRZ-Kg&s",
    description: "Curved wooden mirror with royal design."
  },
  {
    id: 7,
    name: "Smart Bath View",
    category: "Bathroom Mirror",
    type: "Bluetooth Mirror",
    material: "Anti-Fog Glass",
    colors: ["Black", "Silver"],
    sizes: ["24x36 inches", "28x40 inches"],
    price: 48000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67I-qSeZk6rNWXOY-1sMciQA0H8P6W8qApQ&s",
    description: "Smart anti-fog Bluetooth mirror."
  },
  {
    id: 8,
    name: "Vintage Charm",
    category: "Bedroom Mirror",
    type: "Antique Mirror",
    material: "Glass",
    colors: ["Gold", "Antique White"],
    sizes: ["30x45 inches", "36x48 inches"],
    price: 60000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0adB66XsuKVTmC3XOmo5YMZIaDyO8AOczQ&s",
    description: "Classic antique mirror for elegant bedrooms."
  },
  {
    id: 9,
    name: "Executive Reflect",
    category: "Office Mirror",
    type: "Metal Bordered",
    material: "Tempered Glass",
    colors: ["Steel", "Black"],
    sizes: ["24x36 inches", "30x42 inches"],
    price: 25000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZbj2JuZgERSmzem9kWe9E5f_DvUpEFfi2g&s",
    description: "Durable mirror for office spaces."
  },
  {
    id: 10,
    name: "Glow Dressing Panel",
    category: "Dressing Room Mirror",
    type: "Acrylic Bordered",
    material: "Acrylic Glass",
    colors: ["White", "Rose Gold"],
    sizes: ["20x30 inches", "24x36 inches"],
    price: 30000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaHCUugnqTmgIBNNDm0mwSvZ8WjDO0PHjwQ&s",
    description: "LED mirror for makeup lighting."
  },

  {
    id: 11,
    name: "Minimal Wood Frame",
    category: "Living Room Mirror",
    type: "Wooden Framed",
    material: "Tempered Glass",
    colors: ["Light Brown", "Beige"],
    sizes: ["22x34 inches", "26x38 inches"],
    price: 20000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTume1t0Q_Z0lUB2HjPcfnamI2_95xe6WDqjw&s",
    description: "Simple modern wooden mirror."
  },
  {
    id: 12,
    name: "Aqua Lite Mirror",
    category: "Bathroom Mirror",
    type: "Bluetooth Mirror",
    material: "Anti-Fog Glass",
    colors: ["White", "Grey"],
    sizes: ["18x28 inches", "22x32 inches"],
    price: 39000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtaH0BNytfpkCLK_yB6ylnp36OYpPxeqX9zg&s",
    description: "Compact Bluetooth bathroom mirror."
  },
  {
    id: 13,
    name: "Antique Royal Edge",
    category: "Bedroom Mirror",
    type: "Antique Mirror",
    material: "Glass",
    colors: ["Gold", "Champagne"],
    sizes: ["30x42 inches", "34x48 inches"],
    price: 58000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSJK0VCtnW6qhOgQROQRXSFqKgf0mrqjtWg&s",
    description: "Luxury antique mirror."
  },
  {
    id: 14,
    name: "Steel Office Panel",
    category: "Office Mirror",
    type: "Metal Bordered",
    material: "Tempered Glass",
    colors: ["Steel", "Grey"],
    sizes: ["26x36 inches", "30x44 inches"],
    price: 27000,
    currency: "PKR",
    image: "https://stylegarage.com/cdn/shop/products/01_6_f697e6dc-f8fd-4ac5-82eb-69568517ce7c.jpg?v=1744400188",
    description: "Strong steel office mirror."
  },
  {
    id: 15,
    name: "Clear Vanity Pro",
    category: "Dressing Room Mirror",
    type: "Acrylic Bordered",
    material: "Acrylic Glass",
    colors: ["Transparent", "White"],
    sizes: ["20x30 inches", "26x36 inches"],
    price: 29000,
    currency: "PKR",
    image: "https://www.hollywoodmirrors.co.uk/cdn/shop/files/hollywood-crystal-pro-mirror-80x60cm-crushed-crystal-sandblasted-frame-led-lights-lumens-glam-vanity-setup_2000x.jpg?v=1769202560",
    description: "High clarity vanity mirror."
  },

  {
    id: 16,
    name: "Modern Wood Shine",
    category: "Living Room Mirror",
    type: "Wooden Framed",
    material: "Tempered Glass",
    colors: ["Oak", "Brown"],
    sizes: ["24x36 inches", "30x40 inches"],
    price: 24000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQbW9Sda_sEeZ1PHaNgaW0TIMfjp2uxr66g&s",
    description: "Modern polished wooden mirror."
  },
  {
    id: 17,
    name: "Smart Aqua Vision",
    category: "Bathroom Mirror",
    type: "Bluetooth Mirror",
    material: "Anti-Fog Glass",
    colors: ["Black", "White"],
    sizes: ["24x36 inches", "30x42 inches"],
    price: 46000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLmPehEteFruWgLXSDoqXWGJk5GPIhWoGeA&s",
    description: "Advanced smart mirror."
  },
  {
    id: 18,
    name: "Golden Vintage Frame",
    category: "Bedroom Mirror",
    type: "Antique Mirror",
    material: "Glass",
    colors: ["Gold", "Dark Gold"],
    sizes: ["32x48 inches", "36x52 inches"],
    price: 70000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneqA2-tRacJziWgw19cJVMKWdFFuq9Cs9bg&s",
    description: "Premium gold antique mirror."
  },
  {
    id: 19,
    name: "Corporate Reflector",
    category: "Office Mirror",
    type: "Metal Bordered",
    material: "Tempered Glass",
    colors: ["Black", "Silver"],
    sizes: ["24x34 inches", "28x40 inches"],
    price: 23000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sAsCbM8LhuMxj8RQHTdbFKkUznGasuJ_kA&s",
    description: "Corporate style mirror."
  },
  {
    id: 20,
    name: "Dressing Glow Elite",
    category: "Dressing Room Mirror",
    type: "Acrylic Bordered",
    material: "Acrylic Glass",
    colors: ["White", "Pink"],
    sizes: ["22x32 inches", "26x38 inches"],
    price: 32000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuoxsDYwJRgfnYCx5sHGon8hwS7LbcKOzQg&s",
    description: "Premium LED dressing mirror."
  },

  {
    id: 21,
    name: "Rustic Wood Charm",
    category: "Living Room Mirror",
    type: "Wooden Framed",
    material: "Tempered Glass",
    colors: ["Rustic Brown", "Dark Oak"],
    sizes: ["26x36 inches", "30x44 inches"],
    price: 26000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlTCM3E49_rIm6MqM78thGJLK39roZM2ywQ&s",
    description: "Rustic wooden mirror."
  },
  {
    id: 22,
    name: "Aqua Smart Touch",
    category: "Bathroom Mirror",
    type: "Bluetooth Mirror",
    material: "Anti-Fog Glass",
    colors: ["Black", "Grey"],
    sizes: ["24x36 inches", "30x40 inches"],
    price: 50000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfHmZRP6Jjm_w2lYnVDZSP5ULXy9--hYZWw&s",
    description: "Touch-enabled smart mirror."
  },
  {
    id: 23,
    name: "Classic Heritage",
    category: "Bedroom Mirror",
    type: "Antique Mirror",
    material: "Glass",
    colors: ["Bronze", "Gold"],
    sizes: ["30x42 inches", "34x46 inches"],
    price: 62000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPC-HVO0D2lCVNsh3FXh78BIcuNJ0Z0ViIQ&s",
    description: "Traditional antique mirror."
  },
  {
    id: 24,
    name: "Office Edge Reflect",
    category: "Office Mirror",
    type: "Metal Bordered",
    material: "Tempered Glass",
    colors: ["Black", "Steel"],
    sizes: ["26x36 inches", "30x42 inches"],
    price: 26000,
    currency: "PKR",
    image: "https://cdn11.bigcommerce.com/s-l4y5j8tpyi/products/49882/images/98809/aspect-curve-floating-edge-mirror-with-cct-touch-sensor-demist-600mm-black-l083825-5__86434.1743640533.1280.1280.jpg?c=1",
    description: "Modern sharp edge mirror."
  },
  {
    id: 25,
    name: "Vanity Clear Shine",
    category: "Dressing Room Mirror",
    type: "Acrylic Bordered",
    material: "Acrylic Glass",
    colors: ["White", "Crystal"],
    sizes: ["22x32 inches", "28x38 inches"],
    price: 31000,
    currency: "PKR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCw1dpJiNyHyG7lob2D9gZ_gpDRXxTdffQ3w&s",
    description: "Bright acrylic dressing mirror."
  }
];
const singleproduct=products.find(function(item){

    return item.id==productID;
});
const container=document.getElementById('detail')
container.innerHTML+=`<div  class="col-md-4">
    <img src=${singleproduct.image}alt="" style="height:300px;">
</div>
<div class="col-md-8">
  <h1>${singleproduct.name}</h1>
  <h6>Mirrors type,${singleproduct.type}</h6>
  <h6>Material type,${singleproduct.material}</h6>
  <h5>RS,${singleproduct.price}</h5>
   <h5>COLORS,${singleproduct.colors}</h5> 
<select name="" id=""  style="width: fit-content;" >
<option value="" >${singleproduct.colors[0]}</option>
<option value="">${singleproduct.colors[1]}</option>

</select>
 <h5>SIZES,${singleproduct.sizes}</h5>
<select name="" id=""  style="width: fit-content;" >
<option value="" >${singleproduct.sizes[0]}</option>
<option value="">${singleproduct.sizes[1]}</option>
</select>
 <p>${singleproduct.category}</p>


<p>${singleproduct.description}
</p>


</div>
<button class="btn btn-primary " style="width: fit-content;" > Add to cart</button>
<button class="btn btn-secondary"  onclick="genratepdf()" style="width: fit-content;">Download</button>




`

let element=document.getElementById("detail");
function genratepdf(){
  html2pdf().from(container).save();
}

