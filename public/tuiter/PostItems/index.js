import Posts from "./Posts.js";
import PostList from "./PostList.js";
const book = () => {
    return `<div>${Posts.map((element)=>{return PostList(element)}).join("")}</div>`;

}
export default book;