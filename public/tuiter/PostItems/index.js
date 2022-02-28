import Posts from "./Posts.js";
import PostList from "./BookmarkItems.js";
const book = () => {
    return `<div>${Posts.map((element)=>{return PostList(element)}).join("")}</div>`;

}
export default book;