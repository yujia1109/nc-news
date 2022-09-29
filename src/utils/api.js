import axios from "axios";

const newsApi = axios.create({
    baseURL:"https://yujia-news.herokuapp.com/api"
});

export const getAllArticles = (params) => {
    return newsApi.get("/articles", {params}).then((res) => {
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

export const getCommentsByArticleId = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data;
    })
}

export const updateVotes = (article_id, votes) => {
    return newsApi.patch(`/articles/${article_id}`, {
        inc_votes: votes
    }).then((res) => {
        return res.data
    })
}

export const postComment = (article_id, username, body) => {
    return newsApi.post(`/articles/${article_id}/comments`, {
        username, body
    }).then((res) => {
        return res.data;
    })
}

export const deleteComment = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`)
    .then((res) => {
        return res.data;
    })

}