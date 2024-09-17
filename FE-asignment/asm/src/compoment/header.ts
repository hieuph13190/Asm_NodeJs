import { authenticate } from "../utils/localStorage"
const header = {
    render: (() => {

        if (localStorage.getItem('user')) {
            var b = `<div class="mr-12" id="b"> Xin Chào: ${JSON.parse(localStorage.getItem('user')).name} </div>`
            var c = `<a ><button id="c"   class="flex items-center justify-center px-4 border-l">Logout</button></a>`
        }
        else {
            var b = `<a href="/singin"><button  class="flex items-center justify-center px-4 border-l">Đăng Nhập</button></a>
            <a href="/singup"><button class="flex items-center justify-center px-4 border-l">Đăng Ký</button></a>`
            var c = ""
        }
        return (
            /*html*/`
            <div class="flex bg-blue-300 justify-between">
                <a href="/"><img class="w-[64px] p-2" src="../../../public/image/logo.png"/></a>
                <div class="ml-auto flex items-center">
                ${b}  
                <div>${c}</div>
                <div class="flex items-center justify-center">
                
                
                    <div class="flex border-2 rounded">
                        <input type="text" class="px-4 py-2 w-80" placeholder="Search...">
                        <button class="flex items-center justify-center px-4 border-l">
                            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </button>
                    </div>
                </div>

            <!-- Cart -->
                <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group m-1 p-2 flex items-center">
                    <!-- Heroicon name: outline/shopping-bag -->
                    <svg class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span class=" text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span class="sr-only">items in cart, view bag</span>
                </a>
                </div>
            </div>
            </div>

            
            `
        )
    }
    ),
    afterRender: () => {
        const logout = document.querySelector("#c");
        console.log(logout)
        logout?.addEventListener("click", () => {
            localStorage.removeItem("user")
            window.location.href = '/'
        })
    }
}


export default header