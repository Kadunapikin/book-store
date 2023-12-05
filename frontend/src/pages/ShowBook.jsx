import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const ShowBook = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setBooks(response.data);
      setLoading
      (false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }, [])

  return (
    <div>ShowBook</div>
  )
}

export default ShowBook