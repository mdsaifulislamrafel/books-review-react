import { useEffect, useState } from "react";
import LatestData from "../DataHook/LatestData";
import BookLatest from "./BookLatest";


const LatestBook = () => {
    const { latestData } = LatestData();
    const [book, setBook] = useState([]);
    useEffect(() => {
        setBook(latestData);
    }, [latestData]);
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <h1 className="text-5xl bg-300% text-center my-10 font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Programming books</h1>
            <hr className="border-2 border-dashed my-5" />
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src="https://source.unsplash.com/random/480x360" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl">{book[0]?.bookName}</h3>
                        <span className="text-xs dark:text-gray-600">February 19, {book[0]?.yearOfPublishing}</span>
                        <p>{book[0]?.review}</p>
                    </div>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        book.map(item => <BookLatest key={item.id} item={item}></BookLatest>)
                    }

                </div>
            </div>
        </section>
    );
};

export default LatestBook;