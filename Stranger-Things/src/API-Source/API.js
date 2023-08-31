//API.js

const COHORT_NAME = "2302-ACC-PT-WEB-PT-A";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// Fetch posts
export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const responseJson = await response.json();
    const posts = responseJson.data.posts;
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Create a new post
export async function createNewPost(postData, token) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: postData,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Fetch users
export async function fetchUsers(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    const user = responseJson.data.user;
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Test the API
export async function testApi() {
  try {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Login user
export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}
