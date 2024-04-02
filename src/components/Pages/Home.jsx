import { useEffect, useState } from "react";
import DataHook from "../DataHook/DataHook";
import Banner from "./Banner";
import Books from "./Books";

const Home = () => {
    const { data } = DataHook();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setBooks(data);
    }, [data]);
    return (
        <div>
            {/* banner */}
            <Banner />
            {/* banner */}
            <div className="md:w-[90%] mx-auto md:mt-18">
                <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container p-6 mx-auto space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold">Books</h2>
                        </div>
                        {/* all books */}
                        <div className="grid grid-col-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {
                                books.map(book => <Books key={book.id} book={book}></Books>)
                            }

                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Home;