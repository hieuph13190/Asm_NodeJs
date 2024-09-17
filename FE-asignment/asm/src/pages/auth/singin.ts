import { signin } from "../../api/users";
import { authenticate } from "../../utils/localStorage";
const Signin = {
    render: async () => {
        return /*html*/`
        <div class="bg-gray-100 h-[100vh] flex justify-center items-center">
            <div class="w-[800px] bg-white flex">
            <div class="w-[500px] flex-none p-[45px]">
            <h2>Xin chào <span id="name"></span></h2>
            <div class="alert"></div>
            <form id="formSignin">
                <div class="">
                    <label class="block text-lg font-medium text-gray-700">Email</label>
                    <input id="email" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="text" >
                    <div class="text-red-500 text-sm hidden error"></div>
                </div>
                <div class="">
                    <label class="block text-md font-medium text-gray-700">Mật khẩu</label>
                    <input id="password" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="password" >
                    <div class="text-red-500 text-sm error"></div>
                </div>
                <button id="btn-submit" class="block mt-2 py-4 text-center bg-red-600 text-white w-full">Đăng nhập</button>
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
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async function (e) {
            e.preventDefault();
            try {
                const user = {
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                };
                const result = await signin(user);
                if (result) {
                    document.querySelector('#name').innerHTML = result.data.user.email;
                    console.log(result)
                    authenticate(result.data.user, () =>
                        alert("đăng nhập thành công chọn ok để chuyển trang sau 2 giây"))
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 2000)
                }
            } catch (error) {
                document.querySelector('.alert').innerHTML = `lỗi ${error.response.data}`;
                console.log(error.response.data)
            }


        });
    }
}
export default Signin