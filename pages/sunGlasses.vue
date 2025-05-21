<template>
    <div>
        <div>
            <img src="/images/products/heroImage.png" alt="" class="h-[350px] object-cover object-[95%_center]">
        </div>
        <div class="flex flex-col items-center justify-center text-center mt-18 mb-10 ">

            <h1 class="text-[16px]">TREASURED FINDS</h1>
            <h1 class="text-[34px]">Trendsetter's Choices</h1>
        </div>
        <div class="flex flex-col items-start justify-left px-[50px]">
            <div class="flex justify-between items-center text-center w-full ">
                <div>
                    
                    <baseButton type="primary" class="border-2 border-black mb-10">All Filters</baseButton>
                </div>
                <div class="flex items-center gap-10 pr-[20px] pb-6">
                    <p class="text-sm text-gray-600">251 Results</p>
                    <p class="text-sm ">Sort By Top Seller</p>
                </div>
            </div>

            <div class="flex gap-4 flex-wrap pb-[90px] justify-center"
            >
                <baseCard v-for="product in products" :key="product.name" 
                :productName="product.name"
                 :productDescription="product.description" 
                 :productImage="product.image" 
                 :title="product.title"
                 @click="openProduct(product)"
                 />
            </div>
        </div>
        
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const route = useRouter();
const products = reactive([
    {
        name: "Oakley 009417 Hol brook XL",
        description: "$224.99",
        image: ["/images/products/product1.png","/images/products/product5.png","/images/products/product3.png","/images/products/product5.png","/images/products/product3.png","/images/products/product5.png","/images/products/product3.png"],
        title: "COSTA",
    },
    {
        name: "Radiant Sight Frames",
        description: "$299.95",
        image: ["/images/products/product2.png","/images/products/product5.png","/images/products/product5.png","/images/products/product3.png","/images/products/product5.png","/images/products/product3.png"],
        title: "coach",
    },
    {
        name: "Product 3",
        description: "$399.95",
        image: ["/images/products/product3.png","/images/products/product5.png","/images/products/product5.png","/images/products/product3.png","/images/products/product5.png","/images/products/product3.png"],
        title: "COSTA",
    },{
        name: "Oakley 009417 Hol brook XL",
        description: "$224.99",
        image: ["/images/products/product4.png","/images/products/product5.png","/images/products/product3.png","/images/products/product5.png","/images/products/product3.png","/images/products/product5.png","/images/products/product3.png"],
        title: "Arnette",
    },
    {
        name: "Radiant Sight Frames",
        description: "$299.95",
        image: ["/images/products/product5.png","/images/products/product5.png","/images/products/product5.png","/images/products/product3.png","/images/products/product5.png","/images/products/product3.png"],
        title: "Joan cruzs",
    },
    {
        name: "Product 6",
        description: "$399.95",
        image: ["/images/products/product6.png","/images/products/product5.png","/images/products/product4.png","/images/products/product5.png","/images/products/product3.png","/images/products/product5.png","/images/products/product3.png"],
        title: "Radiant",
    },
]);
function openProduct(product) {
    console.log(product)
  route.push(`/product/${encodeURIComponent(product.name)}`)
}
</script>