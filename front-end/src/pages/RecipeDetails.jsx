import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const recipe = await response.json();
    setDetails(recipe);
  };
  return (
    <div className="w-full flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 font-['Founders_Grotesk_X_Condensed'] text-[#F8FAE5]">
      <div className="relative my-32 mx-auto w-[90vw] lg:w-[70vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl">
        <div className="flex flex-col">
          <h1 className="uppercase text-5xl  lg:text-6xl xl:text-7xl flex items-end justify-center text-center pt-10 md:pt-14 font-light leading-none">
            {details.title}
          </h1>
          <div className=" mx-5 md:mx-20 lg:mx-32 h-60 md:h-80 lg:h-96 w-auto object-cover rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={details.image}
              alt={details.title}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row mb-10 px-7 md:px-0 font-['Neue_Montreal'] text-lg lg:text-xl">
            <div className="w-full md:w-[35%] ml-5 md:ml-10 lg:ml-20 ingredients"> 
              <h1 className="uppercase pt-10 md:pt-14 text-4xl xl:text-4xl font-['Founders_Grotesk_X_Condensed'] font-light leading-tight">
                ingredients
              </h1>
              {details.extendedIngredients &&
                details.extendedIngredients.map((ingredient, index) => (
                  <ul key={index} className="list-disc text-lg">
                    <li key={ingredient.id} className="ml-4 capitalize">
                      {ingredient.original}
                    </li>
                  </ul>
                ))}
            </div>
            <div className="w-full md:w-[60%] mx-5 md:mx-10 lg:mx-16 instructions">
              <h1 className="uppercase pt-10 md:pt-14 text-4xl xl:text-4xl font-['Founders_Grotesk_X_Condensed'] font-light leading-tight">
                recipe instructions
              </h1>
              <div>
                Summary :{" "}
                <h2 dangerouslySetInnerHTML={{ __html: details.summary }} className="text-lg" />
              </div>
              <div className="mt-5">
                {" "}
                Instructions--
                {details.analyzedInstructions &&
                  details.analyzedInstructions.map((instruction, index) => (
                    <ul className="list-disc text-lg" key={index}>
                      {instruction.steps.map((step) => (
                        <li key={step.number} className="ml-4">
                          {step.step}
                        </li>
                      ))}
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
