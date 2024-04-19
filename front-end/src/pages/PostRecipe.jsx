import React, { useContext, useEffect, useState } from 'react'
import { FileInput ,Label } from 'flowbite-react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
// import { UserContext } from '../../UserContext';

function CreatePost() {
//   const {userInfo} = useContext(UserContext);
//   if(!userInfo.email) {
//     return <Navigate to={'/login'} />;
//   }


    // const [formData, setFormData] = useState({
    //     title: "",
    //     summary: "",
    //     content:"",
    //     cover: "",
    //   });
    const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [instructions,setInstructions] = useState('');
  const [ingredient,setIngredient] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

      async function createNewPost(ev) {
        const data= new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        // const response = await fetch('http://localhost:4000/post', {
        //   method: 'POST',
        //   body: data,
        //   credentials: 'include',
        // })
        //   .catch(error => {
        //     // Handle any errors that occur during the fetch operation
        //     console.error('Error during fetch operation:', error);
        //   });

        if (response.ok) {
          alert('Post created successfully');
          setRedirect(true);
        }
      }

      if (redirect) {
        return <Navigate to="/" />;
      }
useEffect(() => {
    const editor1 = new Quill('#editor1', {
        modules: {
          toolbar: true
        },
        theme: 'snow'
      });
      const editor2 = new Quill('#editor2', {
        modules: {
          toolbar: true
        },
        theme: 'snow'
      });
      
      const Delta = Quill.import('delta');
      
      const delta1 = new Delta()
        .insert({ list: 'bullet' }) // You can use 'ordered' for numbered list or 'bullet' for bullet points
      editor1.setContents(delta1);
      editor1.on('text-change', function() {
        const ingredientdata = editor1.getContents();
        setIngredient(ingredientdata);
      });


      const delta2 = new Delta()
        .insert({ list: 'bullet' }) // You can use 'ordered' for numbered list or 'bullet' for bullet points
      editor2.setContents(delta2);
      editor2.on('text-change', function() {
        const instructiondata = editor2.getContents();
        setInstructions(instructiondata);
      });
    
},[]);
      

  return (
  <div className="w-full flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 text-[#F8FAE5]">
  <div className="relative my-32 mx-auto w-[80vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl">
     <div className='pt-20 max-w-3xl mx-auto '>
      <h1 className='text-center text-3xl my-5 font-semibold'>Post your Recipe</h1>
      <form className='flex flex-col gap-4' onSubmit={createNewPost}>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <input
            type='title'
            placeholder='Recipe Name'
            required
            id='title'
            className='border border-gray-300 p-2 bg-transparent rounded-md w-full font-bold'
            value={title}
            onChange={ev => setTitle(ev.target.value)}
            //onChange={ev=>setTitle((prev)=>({...prev, title:ev.target.value}))}
          />
        </div>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <textarea
            type='summary'
            rows={4}
            placeholder='Summary About Your Recipe. Details like nutrition, cooking time, etc.'
            required
            id='summary'
            className='border border-gray-300 bg-transparent p-2 rounded-md w-full'
            value={summary}
            onChange={ev => setSummary(ev.target.value)}
            //onChange={ev=>setSummary((prev)=>({...prev, summary:ev.target.value}))}
          />
        </div>
        <div className='flex gap-4 items-center justify-between border-gray-300 p-3'>
          <FileInput
            type='file'
            accept='image/*'
            required
            onChange={ev => setFiles(ev.target.files)}
            //onChange={ev => setFiles((prev)=>({...prev, cover:ev.target.files[0]}))}
          />
          <Label>Upload cover image</Label>
        </div>
        {/* <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-52 mb-12'
          required
          value={content}
          onChange={newValue =>setContent(newValue)}
          //onChange={ev=>setContent((prev)=>({...prev, content:ev}))}
        //   onChange={(value) => {
        //     setFormData({ ...formData, content: value });
        //   }}
        /> */}
        <h2 className="mt-10 text-[20px]"> Enter Ingredients line by line(Use Enter after every ingredient for easy understanding).</h2>
        <div id="editor1" className="quill-editor"/>
        <h2 className="mt-10 text-[20px]"> Enter Instructions line by line(Use Enter after every instruction for easy understanding).</h2>
        <div id="editor2" className="quill-editor"/>
        
        <button type='submit' className='border bg-gradient-to-r from-teal-200 to-lime-300 hover:bg-gradient-to-l text-black mb-10 p-3 rounded-md'>
          Publish
        </button>
        {/* {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )} */}
      </form>
    </div>
    <style>
        {`
          .ql-toolbar .ql-active,
          .ql-toolbar button button:hover {
            background-color: white !important;
          }
          .ql-toolbar .ql-fill, .ql-toolbar .ql-stroke {
            stroke: white;
          }
          .ql-picker .ql-picker-label {
            stroke: white;
            fill: white;
            color: white;
          }
        `}
      </style>
  </div>
  </div>
  )
}

export default CreatePost