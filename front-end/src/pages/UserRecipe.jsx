import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserRecipe() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch recipe from database
    // const recipe = await response.json();
    // setDetails(recipe);
  };
  return (
    <div className="w-full flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 font-['Founders_Grotesk_X_Condensed'] text-[#F8FAE5]">
      <div className="relative my-32 mx-auto w-[80vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl">
        <div className="flex flex-col">
          <h1 className="uppercase text-[15vh] flex items-end justify-center text-center pt-[7vh] font-light leading-none">
            {/* {details.title} */}
          </h1>
          <div className=" h-80 w-auto object-cover rounded-lg overflow-hidden flex items-center justify-center">
            <img
            //   src={details.image}
            //   alt={details.title}
              className="rounded-lg"
            />
          </div>
          <div className="flex mb-10 font-['Neue_Montreal'] text-[3vh]">
            <div className="w-[35%] ml-12 ingredients">
              <h1 className="uppercase pt-[7vh] text-[8vh] font-['Founders_Grotesk_X_Condensed'] font-light leading-none">
                ingredients
              </h1>
              {/* <h2 dangerouslySetInnerHTML={{ __html:details.ingredients}}/> */}
            </div>
            <div className="w-[60%] mx-16 instructions">
              <h1 className="uppercase pt-[7vh] text-[8vh] font-['Founders_Grotesk_X_Condensed'] font-light leading-none">
                recipe instructions
              </h1>
              <div> Summary:
                {/* <h2 dangerouslySetInnerHTML={{ __html:details.summary}}/> */}
                {/* <h2 dangerouslySetInnerHTML={{ __html:details.instructions}}/> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRecipe;