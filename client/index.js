const btn = document.getElementById('btn');
const list = document.getElementById('list');
const state = {
  posts: [],
};

const getPosts = async () => {
  const data = await fetch('https://backend-test-post.herokuapp.com/api/posts');
  const posts = await data.json();
  state.posts = posts;
};
// getPosts();

async function postData(data) {
  const response = await fetch('https://backend-test-post.herokuapp.com/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
}
const obj = {
  author: 'Uladzislau',
  title: 'post test',
  content: 'lorem',
};

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

btn.addEventListener('click', () => {
  postData(obj);
});
