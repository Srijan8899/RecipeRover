import React, { useEffect } from 'react'

function Fetch() {
 useEffect(() => {
    fetchData();
 }, [])
 
    const fetchData = async () => {
        const response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2?apiKey=${process.env.API_KEY}")
        const data = await response.json();
        console.log(data);
    }
  return (
    <div>Fetch</div>
  )
}

export default Fetch