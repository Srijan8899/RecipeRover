import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CommentList from "../components/CommentList";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaCommentAlt, FaRegBookmark, FaBookmark } from "react-icons/fa";
import toast from "react-hot-toast";

function UserRecipe() {
  const navigate = useNavigate();
  const { id } = useParams(); //id of recipe
  const [details, setDetails] = useState({}); // to show recipe details
  const apiURL = import.meta.env.VITE_SERVER_URL;


  const [comment, setComment] = useState(""); //for text of comment
  const [comments, setComments] = useState([]); // to show all comments

  const [commentBox, setCommentBox] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const postedBy = details && details.postedBy

  const userInfo = localStorage.getItem("token")
    ? {
        userId: localStorage.getItem("id"),
        token: localStorage.getItem("token"),
        name: localStorage.getItem("firstName"),
        favorites: localStorage.getItem("favorites"),
      }
    : null;

    
  const userID = userInfo &&userInfo.userId


  const fetchData = async () => {
    const response = await fetch(`${apiURL}/recipe/get/${id}`);
    const data = await response.json();
    setDetails(data);
    setComments(data.comments);
    setLikeCount(data.likes.length);
    setCommentCount(data.comments.length);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const deleteRecipe = async () => {
    try {
      const response = await fetch(
        `${apiURL}/recipe/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      const data = await response.json();
      if (data.success === true) {
        toast('Recipe Deleted.', {
          icon: '🗑️',
        });
        navigate("/user/viewrecipe");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${apiURL}/recipe/comment/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            id,
            comment: comment,
            name: userInfo.name,
          }),
        }
      );
      const data = await response.json();
      if (data.success === true) {
        toast('Comment added Successfully', {
          icon: '💬',
        });
        fetchData();
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showCommentBox = () => {
    if (commentBox) {
      setCommentBox(false);
    } else {
      setCommentBox(true);
    }
  };

  const addLike = async () => {
    try {
      const { data } = await fetch(
        `${apiURL}/recipe/addLike/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            id,
          }),
        }
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  //remove like
  const removeLike = async () => {
    try {
      const { data } = await fetch(
        `${apiURL}/recipe/removeLike/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            id,
          }),
        }
      );
      fetchData();
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const addFavorite = async () => {
    try {
      const response = await fetch(
        `${apiURL}/recipe/addFavorite/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            id,
          }),
        }
      );
      const data = await response.json();
      localStorage.setItem("favorites", data);
      toast('Added to favorites', {
        icon: '❤️',
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      const response = await fetch(
        `${apiURL}/recipe/removeFavorite/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            id,
          }),
        }
      );
      const data = await response.json();
      localStorage.setItem("favorites", data);
      toast('Removed from favorites', {
        icon: '❤️',
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };


 
const [isFavorite, setIsFavorite] = useState(false);

  // useEffect to update isFavorite when userInfo or id changes
  useEffect(() => {
    // Check if the recipe ID of this page is in the user's favorites
    if(userInfo !== null){
      setIsFavorite(userInfo.favorites.includes(id));
    }
  }, [userInfo, id]); // Update isFavorite when userInfo or id changes

  const likesId = details && details.likes;
  return (
    <div className="w-full flex flex-col bg-gradient-to-br from-slate-500 to-slate-900 font-['Founders_Grotesk_X_Condensed'] text-[#F8FAE5] items-center">
      <div className="relative my-20 mx-auto w-[80vw] bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl">
        <div className="flex flex-col">
          <h1 className="uppercase text-[15vh] flex items-end justify-center text-center pt-[7vh] font-light leading-none">
            {details.title}
          </h1>
          <div className="mx-32 h-[24rem] w-auto object-cover rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={details.image && details.image.url}
              alt={details.title}
              className="rounded-lg"
            />
          </div>
          {postedBy === userID && (
              <div className="flex items-center justify-center gap-10 my-5 font-['Neue_Montreal'] text-[1vw]">
                <Link to={`/user/recipe/update/${id}`}>
                  <button className="rounded-xl p-4 uppercase bg-[#00a86b] hover:bg-[#00a86aba] text-white font-bold">
                    Update recipe
                  </button>
                </Link>
                <button
                  onClick={deleteRecipe}
                  className="rounded-xl p-4 uppercase bg-[#d2042d] hover:bg-[#d2042dc1] text-white font-bold"
                >
                  {" "}
                  Delete Recipe
                </button>
              </div>
            )}

            <div className="flex items-center justify-between gap-10 my-5 mx-36 font-['Neue_Montreal'] text-[1vw]">
            <span>
            {new Date(details.createdAt).toLocaleDateString()}
            </span>
            <span className=" font-bold ">
              -Posted By {details && details.authorName}
            </span>
        <span>
          - {likeCount} Likes❤️ & &nbsp;
           {commentCount} Comments 💬
        </span>
              </div>

          <div className="flex mb-10 font-['Neue_Montreal'] text-[3vh]">
            <div className="w-[35%] ml-20 ingredients">
              <h1 className="uppercase pt-[7vh] text-[8vh] font-['Founders_Grotesk_X_Condensed'] font-light leading-none">
                ingredients
              </h1>
              <div className="data-display">
                <h2 dangerouslySetInnerHTML={{ __html: details.ingredients }} />
              </div>
            </div>
            <div className="w-[60%] mx-16 instructions">
              <h1 className="uppercase pt-[7vh] text-[8vh] font-['Founders_Grotesk_X_Condensed'] font-light leading-none">
                recipe instructions
              </h1>
              <div>
                {" "}
                Summary:{details.summary} <br />
                <br />
                <div className="data-display">
                  <h2
                    dangerouslySetInnerHTML={{ __html: details.instructions }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
          .data-display ul{
            list-style-type: disc;
          }
          .data-display ol{
            list-style-type: decimal;
          }
          `}
        </style>
      </div>

      {userInfo !== null ? (
      <div className=" relative mb-10 mx-auto bg-transparent rounded-2xl backdrop-brightness-75 backdrop-blur-sm shadow-2xl flex gap-8 p-5 text-3xl ">
        {likesId?.includes(userInfo && userInfo.userId) ? (
          <button onClick={removeLike}>
            <MdFavorite size={50} />
            Like
          </button>
        ) : (
          <button onClick={addLike}>
            <MdFavoriteBorder size={50} />
            Like
          </button>
        )}
        <button onClick={showCommentBox} className="text-center ml-3">
          <FaCommentAlt size={40} className="mx-auto my-[.4rem]" />{" "}
          <span className="pt-10">Comment</span>
        </button>
        {isFavorite ? (
          <button onClick={removeFavorite}>
            <FaBookmark size={40} className="mx-auto my-[.4rem]" />
            <span className="pt-10">Remove from Favorite</span>
          </button>
        ) : (
          <button onClick={addFavorite}>
            <FaRegBookmark size={40} className="mx-auto my-[.4rem]" />
            <span className="pt-10">Save as Favorite</span>
          </button>
        )}
      </div>
      ) : (
        ""
      )}

      {userInfo !== null && commentBox ? (
        <div className="flex justify-around items-start py-4 pb-10 gap-20">
          <div>
            {comments.length === 0 ? (
              ""
            ) : (
              <>
                <h5 className="pt-3 mb-2 font-['Neue_Montreal']">Comments:</h5>

                {comments.map((comment) => (
                  <CommentList
                    key={comment._id}
                    name={comment.postedBy.name}
                    text={comment.text}
                  />
                ))}
              </>
            )}
          </div>
          <div className="pl-3 bg-transparent font-['Neue_Montreal']">
            <h2 className="mb-4">Add your comment here!</h2>
            <form onSubmit={addComment}>
              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                aria-label="minimum height"
                rows={3}
                placeholder="Add a comment..."
                className="w-80 md:w-96 h-auto p-2 bg-transparent"
              />
              <div className="pt-1 flex">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0f1d2c] text-white rounded-md"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserRecipe;
