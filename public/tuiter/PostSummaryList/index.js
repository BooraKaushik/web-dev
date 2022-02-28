import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js";
const PostSummaryList = () => {
    return (`<div class="list-group">
    ${exploreItems.map((element)=>{ return PostSummaryItem(element);}).join("")}
    </div>`);
}
export default PostSummaryList;