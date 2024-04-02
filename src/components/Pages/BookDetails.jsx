import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataHook from '../DataHook/DataHook';
import { savedLocalStorage, wishSavedLocalStorage } from '../utility/localStorage';
import toast from 'react-hot-toast';

const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({});
    const { id: index } = useParams();
    const idx = parseInt(index);
    const { data } = DataHook();
    const [addedToReadingList, setAddedToReadingList] = useState(false);
    useEffect(() => {
        if (data) {
            const singleBookData = data.find(item => item.id === idx);
            if (singleBookData) {
                setSingleBook(singleBookData);
            }
        }
    }, [data, idx]);
    const { bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing } = singleBook;

    const handelReading = () => {
        savedLocalStorage(singleBook)
        setAddedToReadingList(true);
    };

    const handleWishlist = () => {
        if (!addedToReadingList) {
            wishSavedLocalStorage(singleBook);
        } else {
            toast.error("Book already added to reading list");
        }
    };
    return (
        <section className="dark:bg-gray-100 max-w-7xl mx-auto dark:text-gray-800">
            <div className="container flex md:gap-12 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
                <div className="flex bg-[#f3f3f3] items-center justify-center p-20 mt-8 ">
                    <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col space-y-5  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl font-bold leading-none sm:text-5xl">{bookName}
                    </h1>
                    <p className="text-lg font-bold">By : {author}
                    </p>
                    <hr className='border-2 border-dotted' />
                    <p>{category}</p>
                    <hr className='border-2 border-dotted' />
                    <h4 className='text-xl'><span className=' font-semibold'>Review</span> : {review}</h4>
                    <div className="flex flex-wrap gap-2 border-t border-dashed dark:border-gray-600">
                        {tags && tags.map((tag, index) => (
                            <a key={index} className="px-3 py-1 text-[#23BE0A] bg-[#f4fcf3] rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">{tag}</a>
                        ))}
                    </div>
                    <hr className='border-2 ' />
                    <ul className='flex gap-12'>
                        <div className='space-y-3'>
                            <li>Number of Pages:</li>
                            <li>Publisher:</li>
                            <li>Year of Publishing:</li>
                            <li>Rating:</li>
                        </div>
                        <div className='space-y-3'>
                            <li><span className='font-bold'>{totalPages}</span></li>
                            <li><span className='font-bold'>{publisher}</span></li>
                            <li><span className='font-bold'>{yearOfPublishing}</span></li>
                            <li><span className='font-bold'>{rating}</span></li>
                        </div>
                    </ul>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button onClick={handelReading} className="rounded-lg border-2 w-24 border-sky-500 hover:border-0 px-4 py-3 text-xl text-sky-500 duration-200 hover:bg-red-500 hover:text-white">Read </button>

                        <button onClick={handleWishlist} className="text-xl w-32 h-14 rounded-lg bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Wishlist</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;
