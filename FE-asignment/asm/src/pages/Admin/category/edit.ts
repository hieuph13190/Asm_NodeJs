import { getCategoryid, update } from '../../../api/category'
import header from '../../../compoment/admin/header'
import menu from '../../../compoment/admin/menu'
import Category from '../../../model/category'
const EditCategoryPage = {
    render: async (id) => {
        console.log(id)
        const res = await getCategoryid(`${id}`)
        const data: Category[] = res.data.category
        return /*html*/`
        
            
            ${header.render()}
        <form id="formEdit">
           <div class="flex mt-4 divide-x">
            <div class="menu w-[250px] flex-none">
                ${menu.render()}
            </div>
            
            
            <div class="grow px-4">
                <h3 class="">Thêm Danh Mục</h3><br>
                <div class="ml-10 gap-8">
                <div class="col-span-2">
                    <div>Thông tin danh mục</div>
                    <div class="flex flex-col mt-4">
                    <label for="">Tên Danh Mục:</label>
                    <input id="name" type="text" value="${data.name}" placeholder="Tên sản phẩm" class="w-11/12 border rounded-sm h-10 "><span id="loi"></span><br>
                    </div>
                   <button class="border rounded-md bg-blue-300 mt-5" id="add-category-btn"style="color: white;">sửa danh mục</button>
                </div>
                </div>
            </div>
            
        </div>
        </form>
        
        `
    },
    afterRender: async (id) => {
        const formEdit = document.querySelector('#formEdit');
        formEdit.addEventListener('submit', function (e) {
            e.preventDefault();

            const post = {
                id: id,
                name: document.querySelector('#name').value,

            };
            // call api
            update(post);

            window.location.href = '/admin/category';

        });

    }
}

export default EditCategoryPage;