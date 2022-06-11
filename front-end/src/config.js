import axios from 'axios'

export const baseUrl = axios.create({
  baseURL: 'https://mern-blog-mohammad.herokuapp.com/',
})
