import instance from "./instance";
import Category from "../model/category";
export const getCategory = () => {
    const url = "/category"
    return instance.get(url)
}
export const createCategory = (category: Category) => {
    const url = "/category"
    return instance.post(url, category)
}
export const getCategoryid = (id) => {
    const url = `/category/${id}`
    return instance.get(url)
}
export const remove = (id) => {
    return instance.delete(`/category/${id}`);
};
export const update = (category: Category) => {
    const url = `/category/${category.id}`
    return instance.put(url, category)
}