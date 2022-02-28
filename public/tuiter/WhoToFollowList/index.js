import WhoToFollowListItem from "./ListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`<div class="list-group">
    <div class="list-group-item  fa-in"><strong>Who to follow</strong></div>
            ${who.map((element)=>{return WhoToFollowListItem(element);})}
            </div>
`);
}
export default WhoToFollowList;