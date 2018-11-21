import axios from "axios";
const BASE_URL = "https://hannahs-nc-news.herokuapp.com/api";

export const getArticles = topic => {
  const url = topic
    ? `${BASE_URL}/topics/${topic}/articles`
    : `${BASE_URL}/articles`;
  return axios.get(url).then(({ data }) => data.articles);
};

export const getArticle = article_id => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}`)
    .then(({ data }) => data.article);
};

export const getComments = article_id => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}/comments`)
    .then(({ data }) => data.comments);
};

export const vote = async (id, section, direction) => {
  const { data } = await axios.patch(
    `${BASE_URL}/${section}/${id}?vote=${direction}`
  );
  return data;
};

export const getUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const postComment = (id, body, created_by) => {
  return axios.post(`${BASE_URL}/articles/${id}/comments`, {
    belongs_to: id,
    body,
    created_by
  });
};

export const deleteComment = id => {
  return axios.delete(`${BASE_URL}/comments/${id}`);
};

export const addArticle = async (title, belongs_to, body, user) => {
  console.log(title, belongs_to, body, user, "!<<<<<<<<");
  return axios
    .post(`${BASE_URL}/topics/${belongs_to}/articles`, {
      title,
      body,
      created_by: user,
      belongs_to
    })
    .then(({ data }) => data.articles);
};

export const getUsers = () => {
  return axios.get(`${BASE_URL}/users`).then(({ data }) => data.users);
};
