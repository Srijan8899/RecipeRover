import React from 'react'
import toast from 'react-hot-toast';

function ContactPage() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "299cb9a5-e461-4675-8e68-f1526f7fb9d2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        toast.success("Message Sent Successfully");
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    
<div className="w-full h-screen overflow-hidden text-[#F8FAE5]">
        <img src="./src/assets/contact.jpg" alt="" className="absolute opacity-95 brightness-75 object-cover w-full h-full"/>
        <div className="mt-3 md:mt-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] relative h-[60vh] md:h-[80vh] w-full md:w-[60vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl"> 
        <h1 className="text-4xl font-medium pt-10 text-center">Contact us</h1>
    <p className="mt-3 text-center">Email us at shreyanshv045@gmail.com or Message us here:</p>

    <form onSubmit={onSubmit} className="mt-10 flex flex-col items-center justify-center">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0 ">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-white ">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required/>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-white ">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-white ">Your message</label>
        </div>
      </div>
      <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button>
    </form>
  </div>
  </div>
  )
}

export default ContactPage