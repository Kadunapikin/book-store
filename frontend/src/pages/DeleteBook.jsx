import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { id } = useParams();

  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook