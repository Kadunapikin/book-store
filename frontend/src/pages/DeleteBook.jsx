import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
      alert('An error happened, please check the console');
      setLoading(false);
    })
  }

  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook