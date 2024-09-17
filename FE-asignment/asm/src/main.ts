import './style.css'
import typescriptLogo from './typescript.svg';
import Navigo from "navigo";
import AdminPage from './pages/Admin/product';
import AddProductPage from './pages/Admin/product/add';
import EditProductPage from "./pages/Admin/product/edit";
import homePage from './pages/homePage/home';
import detailPage from './pages/detailPage/detail';
import Signup from './pages/auth/signup';
import Signin from './pages/auth/singin';
import detailCategory from './pages/detailCategory/detailCategory';
import AdminPageCategory from './pages/Admin/category';
import AddCategoryPage from './pages/Admin/category/add';
import EditCategoryPage from './pages/Admin/category/edit';
const router = new Navigo('/', { linksSelector: "a" });

export type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}
const print = async (component: ComponentBase, id: any) => {
  console.log(id)
  document.getElementById('app').innerHTML = await component.render(id)
  if (component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  "/": () => {
    print(homePage)
  },
  "/products/:id": (value) => {
    console.log(value.data.id);
    print(detailPage, value.data.id);
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  "/admin/products/edit/:id": (a) => {
    const id = a.data.id
    console.log(id)
    print(EditProductPage, id)
  },
  "/admin/category": () => {
    print(AdminPageCategory)
  },
  "/admin/category/add": () => {
    print(AddCategoryPage)
  },
  "/admin/category/edit/:id": (a) => {
    const id = a.data.id
    console.log(id)
    print(EditCategoryPage, id)
  },
  "/singup": () => {
    print(Signup)
  },
  "/singin": () => {
    print(Signin)
  },
  "/homeCategory/:id": (value) => {
    const id = value.data.id
    print(detailCategory, id)
  }
})
router.resolve()