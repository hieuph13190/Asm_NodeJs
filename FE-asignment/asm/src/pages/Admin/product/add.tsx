
import { createProduct } from "../../../api/product"
import header from "../../../compoment/admin/header"
import menu from "../../../compoment/admin/menu"
import Product from "../../../model/product"
import { upload } from "../../../api/image"
import { getCategory } from "../../../api/category"
import Category from "../../../model/category"
const AddProductPage = {
    render: async () => {
        const res = await getCategory()
        const data: Category[] = res.data
        console.log(data)
        console.log(data.map((p) => (p._id)).join(""))
        return /*html*/`
        ${header.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${menu.render()}
            </div>
            <div class="grow px-4">
                <h3>Thêm mới sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8">
                <div class="">
                    <div class="flex flex-col justify-center items-center border rounded-md h-[250px]">
                    <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd" />
                        </svg>
                        <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png" />
                    </label>

                    <div class="mt-4">Thêm ảnh</div>
                    <img id="preview-image" />
                    </div>
                    <label for="">Mô tả ngắn</label>
                    <input id="shortDescription" class="w-full border">
                </div>
                <div class="col-span-2">
                    <div>Thông tin sản phẩm</div>
                    <div class="flex flex-col mt-4">
                    <label for="">Tên sản phẩm:</label>
                    <input id="name" type="text" placeholder="Tên sản phẩm" class="w-full border rounded-sm h-10"><span id="loi"></span>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4 mt-4">
                    <div class="flex flex-col">
                        <label for="">Giá gốc:</label>
                        <input id="originalPrice" type="number" placeholder="Giá gốc" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Giá khuyến mãi:</label>
                        <input id="saleOffPrice" type="number" placeholder="Giá khuyến mãi" class="w-full border rounded-sm h-10">
                    </div>  

                    </div>
                    <div class="mt-3 mb-3">
                    <label for="cars">Chọn Danh Mục:</label>
                    <select id="category" >
                    data.map((p) => (p._id)).join("")
                    ${data.map((p) => (`
                    <option class="text-amber-700" value="${p._id}">${p.name}</option>
                    `)).join("")}
                    </select>
                        
                    </div>

                    <div>
                    <label for="">Mô tả dài</label>
                    <textarea id="description" class="w-full border" style="
                     height: 100px;"></textarea>
                    </div>
                
                    <button class="border rounded-md bg-blue-300 mt-5" id="add-product-btn"style="color: white;">Thêm mới sản phẩm</button>
                </div>
                </div>
            </div>
        </div>
        `
    },
    afterRender: async () => {
        const addProductBtn = document.querySelector('#add-product-btn')
        console.log(addProductBtn)
        const inputFile = document.querySelector('#input-file')
        const previewImage = document.querySelector('#preview-image')
        const loi = document.querySelector("#loi")

        addProductBtn?.addEventListener('click', async (e) => {
            const name = document.querySelector('#name')?.value
            const originalPrice = document.querySelector('#originalPrice')?.value
            const saleOffPrice = document.querySelector("#saleOffPrice")?.value
            const category = document.querySelector("#category")?.value
            const description = document.querySelector("#description")?.value
            const shortDescription = document.querySelector("#shortDescription")?.value

            const imageUrl = previewImage?.src
            const product = new Product(name, originalPrice, imageUrl, saleOffPrice, category, description, shortDescription)
            if (name !== "" && originalPrice !== "" && description !== "" && category !== "" && saleOffPrice !== "") {
                try {
                    const data = await createProduct(product)
                    alert('Thêm mới thành công')
                    location.href = "/admin"
                } catch (err) {
                }
            }
            else {
                alert("bạn chưa nhạp đầy đủ thông tin");

            }
        })

        inputFile?.addEventListener('change', async (e) => {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = async () => {
                try {
                    const res = await upload(reader.result)
                    const data = res.data
                    previewImage.src = data.url
                } catch (err) {
                    console.log(err)
                }
            }
        })

    }
}

export default AddProductPage