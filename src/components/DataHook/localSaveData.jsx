import { useEffect, useState } from "react";
import { getLocalStorage } from "../utility/localStorage";



const LocalSavedData = () => {
    const [localSaveData, setLocalSaveData] = useState([]);
    useEffect(() => {
        setLocalSaveData(getLocalStorage);
    }, []);
    return { localSaveData };
};

export default LocalSavedData;