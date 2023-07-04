import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import "./write.css"

const Write = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/write')
      .then((response) => setArticles(response.data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    axios
      .post('http://localhost:3001/write', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,

        },
      })
      .then((response) =>{window.location.href = '/write'; console.log('Article created:', response.data)})
      .catch((error) => console.error('Error creating article:', error));

    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <>
      <Navbar />

      <div className='write'>
        <div className='custom2'>Create New Article</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" onChange={(event) => setImage(event.target.files[0])} />
          </div>
          <button className='write_btn' type="submit">Submit</button>
        </form>
      </div>
      <div className='custom'>Custom Articles</div>
      <div className="article-container">

        {articles.map((article) => (
          <div className="article-card" key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            {article.imageUrl && <img src={`http://localhost:3001/${article.imageUrl}`} alt="Article" />}
            <p className="author">Author: {article.author ? article.author.username : 'Unknown'}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default Write;
