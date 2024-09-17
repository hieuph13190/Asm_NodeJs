import { getCategory, remove } from "../../../api/category";
import header from "../../../compoment/admin/header";
import menu from "../../../compoment/admin/menu";
import Category from "../../../model/category";

const AdminPageCategory = {
    render: async () => {
        const res = await getCategory()
        const data: Category[] = res.data
        console.log(data)
        console.log(data.map((p) => (p._id)))
        return /*html*/`
        ${header.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${menu.render()}
            </div>
            <div class="grow px-4">
                <div class="flex justify-between">
                    <div>
                    DANH MỤC
                    </div>
                    <a href="/admin/category/add">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </a>
                </div>
                <table class="table-auto border mt-8" style="width:100%;">
                    <thead>
                    <tr>
                        <th class="w-[5%] border">#Stt</th>
                        <th class="w-[60%] border">Danh Mục</th>
                        <th class="w-[10%] border text-center">Xóa</th>
                        <th class="w-[10%] border">Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${data.map((p, index) => /*html*/`
                        <tr>
                            <td class="border text-center">${index + 1}</td>
                            <td class="border">${p.name}</td>
                            <td class="border"><button class="btn btn-danger btn-remove" style="margin-left: 30%;background-color: red;border-radius: 10px " data-id=${p._id}>Remove</button></td>
                            <td class="border">
                                <a href="/admin/category/edit/${p._id}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg></a>
                            </td>
                        </tr>
                    `).join('')}
                    </tbody>
                </table>         
            </div>
        </div>
        `
    },

    afterRender() {
        const btns = document.querySelectorAll('table .btn'); // nodeList=[btn]
        for (let btn of btns) {
            const id = btn.dataset.id;
            console.log(id)
            // event click
            btn.addEventListener('click', async function () {
                if (btn.classList.contains('btn-remove')) {
                    const confirm = window.confirm('Bạn có chắc chắn xóa không?');
                    if (confirm) {
                        const { data } = await remove(id);

                        if (data) {
                            alert('xóa thành thành công')
                            location.href = "/admin/category"
                        }
                    }
                }
            });
        }
    },
};

export default AdminPageCategory