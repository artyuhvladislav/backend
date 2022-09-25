const btn = document.getElementById('btn');
const list = document.getElementById('list');
const form = document.getElementById('form');
const state = {
  posts: [],
};

const getPosts = async () => {
  const data = await fetch('https://backend-test-post.herokuapp.com/api/posts');
  const posts = await data.json();
  state.posts = posts;
};

async function postData(data) {
  const response = await fetch('https://backend-test-post.herokuapp.com/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const createPosts = () => {
  const posts = state.posts
    .map((post) => {
      return `
        <li>
            <p>${post.author}</p>
            <p>${post.title}</p>
            <P>${post.content}</P>
        </li>
        `;
    })
    .join('');
  console.log(posts);

  list.innerHTML = posts;
};

const getDataFromForm = () => {
  const formData = new FormData(form);
  const data = [];
  for (let item of formData) {
    data.push(item);
  }
  const objData = Object.fromEntries(data);
  return objData;
};

btn.addEventListener('click', async () => {
  await getPosts();
  createPosts();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getDataFromForm();
  postData(data);
});
