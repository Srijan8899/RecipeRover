import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link, useParams } from "react-router-dom";
import BookCard from "../components/BookCard";

function UserFavorites() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [books, setBooks] = useState([]);

  const userInfo = localStorage.getItem("token")
    ? {
        userId: localStorage.getItem("id"),
        token: localStorage.getItem("token"),
        name: localStorage.getItem("firstName"),
        favorites: localStorage.getItem("favorites"),
      }
    : null;
  if(category === "favorites"){
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:3000/user/getFavorites", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const data = await response.json();

      setRecipes(data);
    };
    fetchRecipes();
  }, []);
}

else{
    useEffect(() => {
        const fetchBooks = async () => {
          const response = await fetch("http://localhost:3000/user/books", {
            method: "GET",
          });
          const data = await response.json();
    setBooks(data);
        };
        fetchBooks();
      }, []);

}

  return (
    <div className="w-full min-h-screen text-[#F8FAE5] bg-zinc-900">
      <h1 className="uppercase text-[15vh] flex items-end justify-center pt-[17vh] font-['Founders_Grotesk_X_Condensed'] font-light leading-none ">
        {category}
      </h1>
     
      <div className="mt-10 px-10 py-5 cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
        {category === "favorites" ? (
        recipes.map((recipe) => {
          return (
            <Link to={`/get/${recipe._id}`} key={recipe._id}>
              <Card
                image={recipe.image.url}
                title={recipe.title}
                cardKey={recipe._id}
              />
            </Link>
          );
        })
        ):(
            books.map((book) => {
                return (
                  <Link to={book.link} key={book._id} target="_blank">
                    <BookCard
                      image={book.image}
                      title={book.title}
                      cardKey={book._id}
                    />
                  </Link>
                );
              })
        )
        }
      </div>
    </div>
  );
}

export default UserFavorites;
