import { deleteRequest, getRequest, postRequest, putRequest } from "../request"


export const getCategoryData = () => {
    return getRequest('category/')
}

export const addCategoryData = (data) => {
    return postRequest('category/', data)
}

export const updateCategoryData = (data) => {
    return putRequest('category/', data)
}

export const deleteCategoryData = (id) => {
    return deleteRequest('category/' + id)
}