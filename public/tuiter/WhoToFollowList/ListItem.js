const WhoToFollowListItem = (who) => {
    return (`<div class="list-group-item">
    <div class="row">
        <div class="col-2 my-auto">
            <img class="wd-curved-border" src="${who.avatarIcon}" alt="NASA Image" width="100%"></div>
        <span class="col-6">
        <div><strong class=" fa-in">${who.userName}</strong><span class='fa-stack fa-1x wd-size-8'>
            <i class='fas fa-circle fa-stack-2x fa-inverse'></i>
            <i style="color: black;" class='fas fa-check fa-stack-1x'></i>
        </span></div>
    <div class=" fa-in">@${who.handle}</div>
    </span>
    <span class="col-4 my-auto"><button class="btn btn-primary wd-button-tweet my-auto px-0">follow</button></span>
</div>

</div>`);
}
export default WhoToFollowListItem;