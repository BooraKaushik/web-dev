const BookmarkItems = (post) => { return (`
<div class="wd-post d-flex flex-row  align-item-start justify-content-start" style="width:100%">
<div><img class="wd-user-image" src="${post.dp}" alt="Rocket Image" width="48px" height="48px"></div>
<div>
    <div class="wd-handles">
        <div><span class="wd-user-name"><strong>${post.userName} <span class='fa-stack fa-1x wd-size-8'>
        <i class='fas fa-circle fa-stack-2x fa-inverse'></i>        
        <i style='color:black' class='fas fa-check fa-stack-1x'></i>
    </span></strong></strong>&nbsp;</span><span class="wd-user-handle">${post.handle} &nbsp;&nbsp;-${post.time}</span></div>
        <div>
            <i class="material-icons">
            more_horiz
            </i>
        </div>
    </div>
    <div class="wd-data">${post.p1}</div>
    <div class="wd-sub-post wd-user-image">
        <img class="wd-post-img" width="500px" height="264px" src="${post.tweetPic}" alt="Example Image " style="z-index:-10">
        ${post.h1 && post.p2?'<div class="wd-subject-head"><b>'+post.h1+'</b></div><div class="wd-subject-tail wd-color-gray">'+post.p2+'</div>':''}

    </div>
    <div class="wd-icon">
        <div class="wd-flex">
            <a href="#"><i class=" wd-color-gray fa fa-comment"></i></a>
            <span class="wd-icon-number wd-color-gray">${post.comments}</span>

        </div>
        <div class="wd-flex">
            <a href="#"><i class="material-icons wd-color-gray">
            loop
            </i></a>
            <span class="wd-icon-number wd-color-gray">${post.retweet}</span>

        </div>
        <div class="wd-flex">
            <a href="#"><i class=" wd-color-pink fa fa-heart"></i></a>
            <span class="wd-icon-number wd-color-pink">${post.likes}</span>

        </div>
        <div class="wd-flex">
            <a href="#"><i class="material-icons wd-color-gray" style="margin:auto;">
            file_upload
            </i></a>

        </div>
    </div>
</div>
</div>`); };
export default BookmarkItems;