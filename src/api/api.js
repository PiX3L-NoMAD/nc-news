import axios from "axios";

const api = axios.create({
    baseURL: 'https://janilees-northcoders-project.onrender.com/api'
})

export const getAllArticles = (topic) => {
    return api.get('/articles', { params: { topic: topic } })
    .then(({ data }) => {
        return data.articles;
    })
}

export const getAllTopics = () => {
    return api.get('/topics')
    .then(({ data }) => {
        return data.topics;
    })
}

export const getArticleById = (articleId) => {
    return api.get(`articles/${articleId}`)
    .then(({ data }) => {
        return data.article;
    })
}

export const getArticlesByTopic = (slug) => {
    return api.get(`/articles?topic=${slug}`)
    .then(({ data }) => {
        return data.articles;
    })
}

export const getCommentsByArticleId = (articleId) => {
    return api.get(`articles/${articleId}/comments`)
    .then(({ data }) => {
        return data.comments;
    })
}

export const postCommentByArticleId = (articleId, newComment) => {
    return api.post(`articles/${articleId}/comments`, newComment)
    .then(({ data }) => {
        return data.comment;
    })
}

export const deleteCommentByCommentId = (commentId, username) => {
    return api.delete(`comments/${commentId}`, username)
    .then(({ data }) => {
        return data.comment;
    })
}

export const patchVotesByArticleId = (articleId, inc_votes) => {
    return api.patch(`articles/${articleId}`, {inc_votes})
    .then(({ data }) => {
        return data.article;
    })
}