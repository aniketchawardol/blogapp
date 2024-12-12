import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from '../appwrite/config'
import {useNavigate, useParams} from 'react-router-dom'

function EditPost() {
  const [post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if(slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post)
        }
      })
    } else {
      navigate('/')
    }
  },[])
  return post ? (
    <div className='py-8'>
      <PostForm post={post} />
    </div>
  ) : null
}

export default EditPost