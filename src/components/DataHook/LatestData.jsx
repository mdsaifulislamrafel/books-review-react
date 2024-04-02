import { useEffect, useState } from "react";

const LatestData = () => {
    const [latestData, setLatestData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/coming.json');
            const data = await res.json();
            setLatestData(data);
        };
        fetchData();
    }, []);
    return { latestData };
};

export default LatestData;