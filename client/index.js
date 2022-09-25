const btn = document.getElementById('btn');
const list = document.getElementById('list');
const state = {
  posts: [],
};
const getPosts = async () => {
  const data = await fetch('https://backend-test-post.herokuapp.com/api/posts');
  const posts = await data.json();
  console.log(posts);
  state.posts = posts;
};
getPosts();

const createPosts = () => {
  const posts = state.posts
    .map((post) => {
      return `
        <li>
            <p>${post.author}</p>
            <p>${post.title}</p>
        </li>
        `;
    })
    .join('');
  console.log(posts);

  list.innerHTML = posts;
};

btn.addEventListener('click', createPosts);
