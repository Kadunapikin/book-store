import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.get('http://localhost:5555/books', )
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
      alert('An error happened, please check the console')
      setLoading(false);
    })

  }

  return (
    <div>CreateBook</div>
  )
}

export default CreateBook