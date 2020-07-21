const apiUrl = process.env.VUE_APP_BASE_API;
import axios from "axios";

function getUsers() {
  return axios
    .get(`${apiUrl}/users`)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return JSON.parse(error);
    });
}
function getUserByName(name) {
  return axios
    .get(`${apiUrl}/users/${name}`)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return JSON.parse(error);
    });
}
function createUser(body) {
  return axios
    .post(`${apiUrl}/users`, body)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return JSON.parse(error);
    });
}

function updateUser(id) {
  return axios
    .get(`${apiUrl}/users/${id}`)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return JSON.parse(error);
    });
}

export { getUsers, getUserByName, createUser, updateUser };
