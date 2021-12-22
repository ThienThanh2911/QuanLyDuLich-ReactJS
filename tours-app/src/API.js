import axios from "axios";
import cookies from 'react-cookies';

export let endpoints = {
    'users': '/users/',
    'tours': '/tours/',
    'category': '/category/',
    'blog': '/blog/',
    'current-user': '/users/current-user/',
    'login': '/o/token/',
    'province': '/province/',
    'tour-detail': (tourId) => `/tours/${tourId}/`,
    'tour-comment': (tourId) => `/tours/${tourId}/comments/`,
    'tour-add-comment': (tourId) => `/tours/${tourId}/add-comment/`,
    'tour-rating': (tourId) => `/tours/${tourId}/rating/`,
    'blog-comment': (blogId) => `/blog/${blogId}/comments-blog/`,
    'blog-add-comment': (blogId) => `/blog/${blogId}/add-comment-blog/`,
    'blog-rating': (blogId) => `/blog/${blogId}/rating-blog/`,
    'tour-views': (tourId) => `/tours/${tourId}/views/`,
    'blog-detail': (blogId) => `/blog/${blogId}/`,
    'update-user': (userId) => `/users/${userId}/`
}

export let AuthAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Authorization': `Bearer ${cookies.load('access_token')}`
    }
})

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})