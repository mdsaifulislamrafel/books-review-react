import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { RiFolderChartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ReadBooks = ({ readBook }) => {
    const { id, bookName, author, image, rating, category, tags, yearOfPublishing, publisher, totalPages } = readBook;
    return (
        <div className="mt-8">
            <div className="md:flex items-center gap-5 rounded-lg  p-6 border md:w-[full] bg-white">
                <div className="bg-[#F3F3F3] flex items-center justify-center p-5">
                    <img alt="card navigate ui" className="w-[120px]  object-cover  rounded-lg " src={image} />
                </div>
                <div className="space-y-5">
                    <div className="grid gap-2">
                        <h1 className="font-semibold text-2xl">{bookName}</h1>
                        <p className="text-sm">By: {author}</p>
                        <hr className="border-2 border-dashed" />
                    </div>
                    <div className="flex flex-wrap items-center gap-4 border-t border-dashed dark:border-gray-600">
                        <p className="text-sm font-bold">Tag</p>
                        {
                            tags.map((tag, index) => (<a key={index} className="px-2 py-1 flex items-center text-[#23BE0A] bg-[#f4fcf3] text-sm rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">{tag}</a>))
                        }
                        <p className="text-sm flex items-center gap-1"><IoLocationOutline />Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-sm flex items-center gap-1"><GoPeople />Publisher : {publisher}</p>
                        <p className="text-sm flex items-center gap-1 justify-center"><RiFolderChartLine />{totalPages}</p>
                    </div>
                    <div className="text-sm flex flex-wrap items-center gap-4">
                        <p className="bg-[#e0eeff] py-3 px-5 rounded-full text-[#328EFF]">category: {category}</p>
                        <p className="bg-[#fff3e0] py-3 px-5 rounded-full text-[#FFAC33]">rating: {rating}</p>
                        <Link to={`/bookDetails/${id}`} className="cursor-pointer flex gap-2 list-none rounded-full px-4 py-3 text-white bg-[#23BE0A]">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooks;