const NavigationSidebar = (parameter) => {
    return (`<div class="row">
    <div class="list-group col-12 col-lg-12 col-xl-12 pe-0">
        <a href="../home.html" class="list-group-item list-group-item-action"><i class="fab fa-twitter fa-in"></i></a>
        <a href="../HomeScreen/explore.html" class="list-group-item list-group-item-action ${parameter==='home'?' active':""}"><i class="fa fa-home fa-in"></i><span class="d-none d-xl-inline ms-1 fa-in">Home</span></a>
        <a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action${parameter==='explore'?' active':""}" aria-current="true"><i class="fa fa-hashtag fa-in"></i><span class="d-none d-xl-inline ms-1 fa-in">Explore</span></a>
        <a href="../notifications.html" class="list-group-item list-group-item-action${parameter==='notifications'?' active':""}"><i class="fa fa-bell fa-in"></i><span class="d-none d-xl-inline ms-1 fa-in">Notifications</span></a>
        <a href="../messages.html" class="list-group-item list-group-item-action${parameter==='messages'?' active':""}"><i class="fa fa-envelope fa-in"></i><span class="d-none d-xl-inline ms-1 fa-in">Messages</span></a>
        <a href="../bookmarks.html" class="list-group-item list-group-item-action${parameter==='bookmarks'?' active':""}"><i class="fa fa-bookmark fa-in"></i><span class="d-none d-xl-inline ms-1 fa-in">Bookmarks</span></a>
        <a href="../lists.html" class="list-group-item list-group-item-action${parameter==='items'?' active':""}"><i class="fa fa-list fa-in"></i><span class="d-none d-xl-inline ms-1 fa-in">Items</span></a>
        <a href="../profile.html" class="list-group-item list-group-item-action${parameter==='more'?' active':""}"><i class="fa fa-user fa-in"></i><span class="d-none d-xl-inline ms-1 fa-in">Profile</span></a>
        <a href="../more.html" class="wd-pl-12 list-group-item list-group-item-action">
            <span class='fa-stack fa-1x wd-size-8'>
    <i class='fas fa-circle fa-stack-2x fa-inverse'></i>
    <i style ="color:black" class='fas fa-ellipsis-v fa-stack-1x fa-rotate-90'></i>
</span><span class="d-none d-xl-inline ms-1 fa-in">More</span></a>
    </div>
    <button class="btn btn-primary mt-2 wd-button-tweet px-0">Tweet</button>
</div>`);
};

export default NavigationSidebar;