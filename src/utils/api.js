import axios from "axios";

const newsApi = axios.create({
    baseURL:"https://yujia-news.herokuapp.com/api"
});

export const getAllArticles = (topic) => {
    return newsApi.get("/articles", {params:{topic}}).then((res) => {
        return res.data
    })
}

export const getAllTopics = () => {
    return newsApi.get("/topics").then((res) => {
        return res.data
    })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data;
    })
};