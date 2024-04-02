
import { useEffect, useState } from "react";
import { wishlistStorage } from "../utility/localStorage";



const LocalSavedData2 = () => {
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        setWishList(wishlistStorage)
    }, []);
    return { wishList }
};

export default LocalSavedData2;