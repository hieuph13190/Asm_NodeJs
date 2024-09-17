import { singup } from "../../api/users"
const Signup = {
    render: async () => {
        return /*html*/`
        <div class="bg-gray-100 h-[100vh] flex justify-center items-center">
            <div class="w-[800px] bg-white flex">
            <div class="w-[500px] flex-none p-[45px]">
            <form id="formSignup">
                <div class="">
                <div class="">
                    <label class="block text-md font-medium text-gray-700">Name</label>
                    <input id="name" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="text" >
                    <div class="text-red-500 text-sm error"></div>
                </div>
                    <label class="block text-lg font-medium text-gray-700">Email</label>
                    <input id="email" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="text" >
                    <div class="text-red-500 text-sm hidden error"></div>
                </div>
                <div class="">
                    <label class="block text-md font-medium text-gray-700">Password</label>
                    <input id="password" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="password" >
                    <div class="text-red-500 text-sm error"></div>
                </div>
                <button id="btn-submit" class="block mt-2 py-4 text-center bg-red-600 text-white w-full">Đăng kí</button>
            </div>
            </form>
            <div class="grow p-[55px] bg-gray-50 flex justify-center items-center">
                <img src="./public/image/logo.png" alt="">
            </div>
            </div>
        </div>
        `
    },
    afterRender() {
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', async function (e) {
            e.preventDefault();

            const user = {
                name: document.querySelector("#name").value,
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value,
            };
            const result = await singup(user);
            if (result) {
                alert('Đăng kí thành công - chuyển trang sau 1s')
                setTimeout(() => {
                    window.location.href = '/singin'
                }, 1000);
            }


        })
    },

}

export default Signup;