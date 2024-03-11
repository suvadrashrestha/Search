import React from 'react'
import { addPost, deletePost } from '../../../lib/Action'

export default function Test() {
  
   
  return (
    <div>
      <form action={addPost}>
        <input  type='text' name="title" placeholder='title'/>
        <input type='text' name="desc" placeholder='desc'/>
        <input type='text' name="slug" placeholder='slug'/>
        <input type='text' name="userId" placeholder='userId'/>
        <button>Create</button>
      </form>
      <div>
        <form action={deletePost}>
          <input type='text' name='id' placeholder='id'/>
          <button>delete</button>
        </form>
      </div>
    </div>
  )
}
