import React from 'react'

function Fetch() {

    const fetchData = async () => {
        const response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2")
        const data = await response.json();
        console.log(data)
    }
  return (
    <div>Fetch</div>
  )
}

export default Fetch