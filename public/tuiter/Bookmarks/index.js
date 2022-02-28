import Bookmarks from "./Bookmarks.js";
import BookmarkItems from "./BookmarkItems.js";
const book = () => {
    return `<div>${Bookmarks.map((element)=>{return BookmarkItems(element)}).join("")}</div>`;

}
export default book;