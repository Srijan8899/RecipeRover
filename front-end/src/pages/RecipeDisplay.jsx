import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link, useParams } from 'react-router-dom'
import Search from '../components/Search';

function RecipeDisplay() {
    const {type, category} =useParams();
    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);

    if(type === "viewrecipe"){
        useEffect(() => {
            const fetchRecipes = async()=> {
                const response = await fetch('http://localhost:3000/recipe/get');
                const data = await response.json();
                setRecipes(data);
            };
            fetchRecipes();
        }, []);
    }
    else if(type === "searchedbyname"){
        useEffect(() => {
            const fetchRecipes = async()=> {
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${category}&instructionsRequired=true&apiKey=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                setRecipes(data.results);
            };
            fetchRecipes();
        }, [offset, category]);
    }

        else if(type === "searchedbyingredient"){
            useEffect(() => {
                const fetchRecipes = async()=> {
                    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${category}&instructionsRequired=true&apiKey=${import.meta.env.VITE_API_KEY}`);
                    const data = await response.json();
                    setRecipes(data.results);
                };
                fetchRecipes();
            }, [offset]);
        }

    else if(category === "lacto-vegeterian" || category === "vegan"){
        useEffect(() => {
            const fetchRecipes = async()=> {
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${type}=${category}&excludeIngredients=chicken,beef,egg&offset=${offset}&instructionsRequired=true&apiKey=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                setRecipes(data.results);
            };
            fetchRecipes();
        }, [offset, category]);
    }
        else{
        useEffect(() => {
                const fetchRecipes = async()=> {
                    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${type}=${category}&offset=${offset}&instructionsRequired=true&apiKey=${import.meta.env.VITE_API_KEY}`);
                    const data = await response.json();
                    setRecipes(data.results);
                };
                fetchRecipes();
            }, [offset, category]);
        }
    
    const handleLoadMore = () => {
        setOffset(prevOffset => prevOffset + 10);
    };

  return (
    <div className="w-full min-h-screen text-[#F8FAE5] bg-zinc-900">
        <h1 className="uppercase text-[15vh] flex items-end justify-center pt-[17vh] font-['Founders_Grotesk_X_Condensed'] font-light leading-none "> {category} </h1>
        {(type !== "searchedbyname" || type !== "searchedbyingredient") &&( 
            <Search currentpage="other"/>          
        )}
    
        <div className="mt-10 px-10 py-5 cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
            { type !== "viewrecipe" ?(
                recipes.map((recipe) => {
                    return (
                        <Link 
                        to={`/fetch/${recipe.id}`}
                        key={recipe.id}>
                        <Card image={recipe.image} title={recipe.title} cardKey={recipe.id}/></Link>
                    )
                })

            ):(
                recipes.map((recipe) => {
                    return (
                        <Link 
                        to={`/get/${recipe._id}`}
                        key={recipe._id}>
                        <Card image={recipe.image} title={recipe.title} cardKey={recipe._id}/></Link>
                    )
                })
            )
            }
        
        </div>
        <div className=" flex items-center justify-center py-10">
        <button onClick={handleLoadMore} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next Page</button>
        </div></div>
  )
}

export default RecipeDisplay