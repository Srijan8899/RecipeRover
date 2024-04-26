import React from 'react';
import Avatar from "../assets/user.png";

const CommentList = ({ name, text }) => {
    return (
        <div className="w-full max-w-md bg-transparent shadow-md rounded-lg overflow-hidden font-['Neue_Montreal']">
            <div className="p-4">
                <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full mr-4" src={Avatar} alt="Avatar" />

                    <div>
                        <div className="font-semibold text-lg">{name} </div>
                        <p className="text-lg text-white">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentList;
