// PostsPage.jsx
import React, { useState, useEffect } from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Ошибка загрузки постов:', error));
  }, []);

  return (
    <div>
      <h2>Посты</h2>
      <ul>
        {Array.isArray(posts) ? (
          posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <li>Посты загружаются...</li>
        )}
      </ul>
    </div>
  );
};

export default PostsPage;
