// CreatePostPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
      });
      
      if (response.ok) {
        navigate('/'); // Перенаправление на страницу со списком постов
      } else {
        throw new Error(response.statusText || 'Не удалось создать пост');
      }
    } catch (error) {
      console.error('Ошибка при создании поста:', error.message);
    }
  };

  return (
    <div>
      <h2>Создать пост</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Заголовок:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="body">Текст:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
