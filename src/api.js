import axios from "axios";

const baseURL = 'http://192.168.0.169:8081/api'
const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const getArticles = async () => {
    try {                                                     //http://192.168.0.170:8081/api/articles
        const response = await axiosInstance.get('/articles') // baseUrl이 앞에 자동으로 들어감 
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getArticleById = async (id) => {
    try {
        const response = await axiosInstance.get(`/articles/${id}`) // 단일 조회
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const postArticle = async (data) => {
    try {
        const response = await axiosInstance.post('/articles', data)
        return response;
    } catch (error) {
        throw error;
    }
}

export const getComments = async (id) => {
    try {
        const response = await axiosInstance.get(`/articles/${id}/comments`)
        return response
    } catch (error) {
        throw error;
    }
}

export const delComment = async (id) => {
    try {
        const response = await axiosInstance.delete(`/comments/${id}`)
        return response
    } catch (error) {
        throw error;
    }
}

export const postComment = async (articleId, newComment) => {
    try {
        const response = await axiosInstance.post(`/articles/${articleId}/comments`,
         {...newComment, articleId})
        return response
    } catch (error) {
        throw error;
    }
}