import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${import.meta.env.VITE_API_KEY}`);
    const recipe = await response.json();
    setDetails(recipe);
  };
  return (
    <div className="w-full flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 font-['Founders_Grotesk_X_Condensed'] text-[#F8FAE5]">
      <div className="relative my-32 mx-auto w-[80vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl">
        <div className="flex flex-col">
          <h1 className="uppercase text-[15vh] flex items-end justify-center text-center pt-[7vh] font-light leading-none">
            {details.title}
          </h1>
          <div className=" h-80 w-auto object-cover mx-auto rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={details.image}
              alt={details.title}
              className="rounded-lg"
            />
          </div>
          <div className="flex mb-10 font-['Neue_Montreal'] text-[3vh]">
            <div className="w-[35%] ml-12 ingredients">
              <h1 className="uppercase pt-[7vh] text-[8vh] font-['Founders_Grotesk_X_Condensed'] font-light leading-none">
                ingredients
              </h1>
              {details.extendedIngredients &&
                details.extendedIngredients.map((ingredient, index) => (
                  <ul key={index} className="list-disc ">
                    <li key={ingredient.id} className="ml-4 capitalize">
                      {ingredient.original}
                    </li>
                  </ul>
                ))}
            </div>
            <div className="w-[60%] mx-16 instructions">
              <h1 className="uppercase pt-[7vh] text-[8vh] font-['Founders_Grotesk_X_Condensed'] font-light leading-none">
                recipe instructions
              </h1>
              <div>
                {/* <h2 dangerouslySetInnerHTML={{ __html:details.summary}}/> */}
                {details.analyzedInstructions &&
                  details.analyzedInstructions.map((instruction, index) => (
                    <ul className="list-disc" key={index}>
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