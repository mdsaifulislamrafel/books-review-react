import LocalSavedData from "../DataHook/localSaveData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "./ReadBooks";
import LocalSavedData2 from "../DataHook/LocalSavedData2";
import WishBooks from "./WishBooks";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const MarkBooks = () => {
    const { localSaveData } = LocalSavedData();
    const { wishList } = LocalSavedData2();

    const [filterType, setFilterType] = useState("ALL");

    const handleFilterClick = (filter) => {
        setFilterType(filter);
    };

    const sortBooks = (books, filter) => {
        if (filter === "ALL") {
            return books;
        } else {
            return books.slice().sort((a, b) => {
                if (a[filter] < b[filter]) {
                    return -1;
                }
                if (a[filter] > b[filter]) {
                    return 1;
                }
                return 0;
            });
        }
    };

    return (
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl font-bold bg-[#f3f3f3] py-8 rounded-lg">Books</h1>
            <Menu>
                <MenuHandler>
                    <Button className="bg-[#23BE0A] mt-5 w-fit md:w-44"><span className="flex items-center justify-center gap-2">Sort By <IoIosArrowDown className="text-2xl font-bold" /></span></Button>
                </MenuHandler>
                <MenuList className="p-5  w-44 border-2 space-y-3">
                    <MenuItem className="hover:bg-green-400 rounded-lg py-2" onClick={() => handleFilterClick("ALL")}>ALL</MenuItem>
                    <MenuItem className="hover:bg-green-400 rounded-lg py-2" onClick={() => handleFilterClick("rating")}>Rating</MenuItem>
                    <MenuItem className="hover:bg-green-400 rounded-lg py-2" onClick={() => handleFilterClick("totalPages")}>Number of Pages</MenuItem>
                    <MenuItem className="hover:bg-green-400 rounded-lg py-2" onClick={() => handleFilterClick("yearOfPublishing")}>Year Of Publishing</MenuItem>
                </MenuList>
            </Menu>

            <div className="text-start text-3xl mt-5">
                <Tabs>
                    <TabList style={{ display: "flex", gap: "2px" }}>
                        <Tab><span className="text-xl font-bold md:text-2xl">Read Books</span></Tab>
                        <Tab><span className="text-xl font-bold md:text-2xl">Wishlist Books</span></Tab>
                    </TabList>

                    <TabPanel>
                        {sortBooks(localSaveData, filterType).map((readBook) => (
                            <ReadBooks key={readBook.id} readBook={readBook}></ReadBooks>
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {sortBooks(wishList, filterType).map((wish) => (
                            <WishBooks key={wish.id} wish={wish}></WishBooks>
                        ))}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MarkBooks;
