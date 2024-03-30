 export function Products(props) {
     return(
         <div className='productList align-items-center object-center flex mt-5'>
             <div key={props.id} className='productCard relative bg-gray-300 m-1 max-w-xl max-h-full transition flex-auto'>
                 <img src={props.image} alt='product-img' className='productImage mt-8 m-auto h-70'></img>
                 <div className='productCard__content m-8'>
                     <h2 className='productName font-bold text-center text-2xl '>{props.name}</h2>
                     <div className='discription mt-6'>{props.discription}
                      </div>
                      <button class="bg-green-500  mt-8 ml-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">See Recipe</button>
                 </div>   
             </div> 
         </div>
     )
 }