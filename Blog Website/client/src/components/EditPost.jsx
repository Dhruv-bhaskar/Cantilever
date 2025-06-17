import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditPost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      
      axios.get(`${import.meta.env.VITE_API_URL}/post/${id}`)
      .then(res => {
        setTitle(res.data.title)
        setContent(res.data.content)
      })
      .catch(err => console.log(err));
    
    }, [id])

    async function handleSubmit(e) {

      e.preventDefault()
        try{
            await axios.put(`${import.meta.env.VITE_API_URL}/post/${id}`, {title, content}, {withCredentials: true})
            toast.info('Blog updated')
            navigate(`/post/${id}`)
        }
        catch(err){
            toast.error('error in updating')
        }
    }
    

  return (
    <form onSubmit={handleSubmit}>
        <h2>Edit Blog</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button type='submit'>Update</button>
    </form>
  )
}

export default EditPost
