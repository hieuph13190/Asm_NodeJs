import instance from "./instance";
import Product from "../model/product";
import { isAutheticate } from "../utils/localStorage";
if (JSON.parse(localStorage.getItem('user'))) {
    const userid = JSON.parse(localStorage.getItem('user')).id
}
else {

}
export const getProducts = () => {
    const url = "/products"
    return instance.get(url)
}
export const createProduct = (product: Product) => {
    const url = `/products/${userid}`
    return instance.post(url, product)
}
export const remove = (id) => {
    return instance.delete(`/products/${id}`);
};
export const update = (product: Product) => {
    console.log(product)
    const url = `/products/${product.id}`
    return instance.put(url, product)
}
export const getProductsid = (id) => {
    const url = `/products/${id}`
    return instance.get(url)
}