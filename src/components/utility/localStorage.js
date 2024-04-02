import toast from "react-hot-toast";

// read storage 

export const savedLocalStorage = data => {
    let saveData = JSON.parse(localStorage.getItem("book")) || [];
    const existing = saveData.find(item => item.id === data.id);
    if (!existing) {
        saveData.push(data);
        localStorage.setItem("book", JSON.stringify(saveData));
        toast.success('Book saved successfully');
    } else {
        toast.error('Book already saved');
    }
}

export const getLocalStorage = () => {
    const saveData = JSON.parse(localStorage.getItem("book")) || [];
    return saveData;
}




// wishlist storage
export const wishSavedLocalStorage = data => {
    let saveData = JSON.parse(localStorage.getItem("wishlist")) || [];
    const existing = saveData.find(item => item.id === data.id);
    if (!existing) {
        saveData.push(data);
        localStorage.setItem("wishlist", JSON.stringify(saveData));
        toast.success('Book saved successfully');
    } else {
        toast.error('Book already saved');
    }
}

export const wishlistStorage = () => {
    const saveData = JSON.parse(localStorage.getItem("wishlist")) || [];
    return saveData;
};