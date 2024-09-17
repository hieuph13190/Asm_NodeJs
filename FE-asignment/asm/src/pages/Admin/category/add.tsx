
import { createCategory } from "../../../api/category"
import header from "../../../compoment/admin/header"
import menu from "../../../compoment/admin/menu"
import Category from "../../../model/category"
const AddCategoryPage = {
    render: async () => {
        return /*html*/`
        ${header.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${menu.render()}
            </div>
            <div class="grow px-4">
                <h3 class="">Thêm Danh Mục</h3><br>
                <div class="ml-10 gap-8">
                <div class="col-span-2">
                    <div>Thông tin danh mục</div>
                    <div class="flex flex-col mt-4">
                    <label for="">Tên Danh Mục:</label>
                    <input id="name" type="text" placeholder="Tên sản phẩm" class="w-11/12 border rounded-sm h-10 "><span id="loi"></span><br>
                    </div>
                   <button class="border rounded-md bg-blue-300 mt-5" id="add-category-btn"style="color: white;">Thêm mới danh mục</button>
                </div>
                </div>
            </div>
        </div>
        `
    },
    afterRender: async () => {
        const addCategoryBtn = document.querySelector('#add-category-btn')
        addCategoryBtn?.addEventListener('click', async (e) => {
            const name = document.querySelector('#name')?.value
            const category = new Category(name)
            if (name !== "") {
                try {
                    const data = await createCategory(category)
                    alert('Thêm mới thành công')
                    location.href = "/admin/category"
                } catch (err) {
                }
            }
            else {
                alert("Bạn Chưa Nhập Đầy Đủ Thông Tin");

            }
        })
    }
}

export default AddCategoryPage