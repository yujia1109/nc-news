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

export const getUsers = () => {
    return newsApi.get('/users').then((res) => {
        return res.data;
    })
}

export const updateVotes = (article_id, votes) => {
    return newsApi.patch(`articles/${article_id}`, {
        inc_votes: votes
    }).then((res) => {
        return res.data
    })
}