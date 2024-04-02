/* eslint-disable react/prop-types */

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
    const { id, bookName, author, image, rating, category, tags } = book;
    return (
        <Link to={`/bookDetails/${id}`} className="max-w-[350px] space-y-4 rounded-lg  p-6 border md:w-[350px] bg-white">
            <div className="bg-[#F3F3F3] flex items-center justify-center p-5">
                <img alt="card navigate ui" className="w-[120px]  object-cover  rounded-lg " src={image} />
            </div>
            <div className="flex flex-wrap gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags.map((tag, index) => (<p key={index} className="px-3 py-1 text-[#23BE0A] bg-[#f4fcf3] rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">{tag}</p>))
                }
            </div>
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">{bookName}</h1>
                <p className="text-sm font-bold">By: {author}</p>
                <hr className="border-2 border-dashed" />
            </div>
            <div className="flex justify-between items-end gap-4">
                <p className="text-xl">{category}</p>
                <p className="text-xl flex items-center gap-1 justify-center">{rating} <FaRegStar className="text-xl" /></p>

            </div>
        </Link>
    );
};

export default Books;