import { getProducts } from "../../api/product"
import Product from "../../model/product"
import footer from "../../compoment/footer"
import header from "../../compoment/header"
import banner from "../../compoment/banner"
import Category from "../../model/category"
import { getCategoryid } from "../../api/category"
import { getCategory } from "../../api/category"
const detailCategory = {
    render: async (id) => {
        const res = await getCategoryid(`62ec840af4785a23d87da017`)
        const data: Product[] = res.data

        const res3 = await getCategoryid(`${id}`)
        const data3: Category[] = res3.data
        console.log(data3)
        const res2 = await getCategory()
        const data2: Category[] = res2.data
        return /*html*/`
            ${header.render()}
        <div class="flex mt-4 divide-x">
        <div class="max-w-[80%]">
        <ul>
            <li class="flex items-center hover:bg-blue-300 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <a href="/">Sản phẩm chung</a>
            </li>
            ${data2.map((p) => (`
            <li class="flex items-center hover:bg-blue-300 rounded-md mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="/homeCategory/${p._id}">${p.name}</a>
            </li>
            `)).join("")}
            

            <li class="flex items-center hover:bg-blue-300 rounded-md mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <a href="/audio">Âm thanh</a>
            </li>
        </ul>
    </div>
            ${banner.render()}
        </div>    
        <h1 class="ml-20 mt-10 text-lg ">${data3.category.name}</h1> 
        <div class="product ">
            
            <div class=" grid grid-cols-5 gap-6 m-10">
            ${data3.products.map((p, index) => /*html*/`
                <div>
                    <a href="/products/${p._id}"><img src="${p.image}"  class="mb-2" alt=""></a>
                    <a href="/products/${p._id}"><p class="mb-2">${p.name}</p></a>
                    <label class="text-red-700 pr-4">${p.saleOffPrice}</label>
                    <label class="text-gray-400">${p.originalPrice}</label>
                    <p class="bg-gray-100 p-3 mt-2">${p.shortDescription}</p>
                </div>`).join('')}
            </div>
        </div>
        <div class="phukien mx-[100px]">
            <div class="grid grid-cols-2 mb-5 ">
                <h1 class="ml-20 mt-10 text-lg">PHỤ KIỆN</h1>
                <a href="#" class="ml-20 mt-10 ">Xem tất cả</a>
            </div>
            <div class="grid grid-cols-9 gap-4 mx-20">
                <div class="bg-[#FFB8B8] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="../../../public/image/phukien.jpg" alt="">
            </div>
            ${data.products.map((p) => (`
            <div class="bg-[#FF94EB] rounded-lg">
            <p class="text-white">${p.name}</p>
                <img src="${p.image}" alt="">
            </div>
            `)).join("")}
           
        </div>
        </div>
  </div>
  <br>
  <br>
  ${footer.render()}
        `}
}

export default detailCategory