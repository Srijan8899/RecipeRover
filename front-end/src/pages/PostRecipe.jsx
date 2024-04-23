import React, { useContext, useEffect, useState } from 'react'
import { FileInput ,Label, Button, Alert } from 'flowbite-react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useNavigate } from 'react-router-dom';
// import { UserContext } from '../../UserContext';

function CreatePost() {
  
const navigate = useNavigate();
//   const {userInfo} = useContext(UserContext);
//   if(!userInfo.email) {
//     return <Navigate to={'/login'} />;
//   }
const [formData, setFormData] = useState({
  title: "",
  summary: "",
  ingredients: "",
  instructions: "",
  image: null,
  authorName: "",
})

const handleFileChange = (e) => {
  const file = e.target.files[0];
  setFormData({ ...formData, image: file });
};
      const firstName = localStorage.getItem("firstName")
      const lastName = localStorage.getItem("lastName")
      const fullName = firstName + ' ' + lastName;

      const handleSubmit = async (ev) => {
        ev.preventDefault();
        
        try{
        const data= new FormData();
        data.append('title', formData.title);
        data.append('image', formData.image);
        data.append('summary', formData.summary);
        data.append('ingredients', formData.ingredients);
        data.append('instructions', formData.instructions);
        data.append('authorName', fullName);
        const response = await fetch('http://localhost:3000/recipe/post', {
          method: 'POST',
          credentials: 'include',
          body: data,
        });
        if (response.ok) {
          response.json(data);
          navigate("/");
        } else {
          console.error("Error while posting recipe");
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } 
          catch(error)  {
            // Handle any errors that occur during the fetch operation
            console.error('Error during fetch operation:', error);
          }
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
        const ingredientData = editor1.root.innerHTML; // Convert Delta to JSON string
        setFormData(prevData => ({...prevData, ingredients: ingredientData}));
      });


      const delta2 = new Delta()
        .insert({ list: 'bullet' }) // You can use 'ordered' for numbered list or 'bullet' for bullet points
      editor2.setContents(delta2);

      editor2.on('text-change', function() {
        const instructionData = editor2.root.innerHTML;
        setFormData(prevData =>({...prevData, instructions: instructionData}));
      });
    
},[]);
      

  return (
  <div className="w-full flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 text-[#F8FAE5]">
  <div className="relative my-32 mx-auto w-[80vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl">
     <div className='pt-20 max-w-3xl mx-auto '>
      <h1 className='text-center text-3xl my-5 font-semibold'>Post your Recipe</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <input
            type='title'
            placeholder='Recipe Name'
            required
            id='title'
            className='border border-gray-300 p-2 bg-transparent rounded-md w-full font-bold'
            value={formData.title}
            onChange={(ev) => setFormData({...formData , title: ev.target.value})
          }
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
            value={formData.summary}
            onChange={(ev) => setFormData({...formData , summary: ev.target.value})
          }
            //onChange={ev=>setSummary((prev)=>({...prev, summary:ev.target.value}))}
          />
        </div>
        <div className='flex gap-4 items-center justify-between border-gray-300 p-3'>
          <FileInput
            type='file'
            accept='image/*'
            required
            onChange={handleFileChange}
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