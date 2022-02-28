const PostItem = (post) => {
    return `<div class="list-group-item  wd-border-gray">
    <div class="row">
        <div class="col-9 col-lg-10">
            <p class="text-secondary mb-1 fa-in">${post.topic}</p>
            <div class="d-flex flex-row justify-content-start align-items-center">
                <p class=" h5 d-inline m-0  fa-in">${post.userName}</p>
                <span class='fa-stack fa-1x wd-size-8 my-auto'>
                    <i class='fas fa-circle fa-stack-2x fa-inverse'></i>
                    <i style="color:black;" class='fas fa-check fa-stack-1x'></i>
                </span>
                <div class="text-secondary">&nbsp;&nbsp;- ${post.time}</div>
            </div>
            <p class="fa-in">${post.title}</p>
            ${post.tweets?'<p class="text-secondary">'+post.tweets+' tweets</p>':''}
        </div>
        <div class="col-3 col-md-2 my-auto"><img src="${post.image}" alt="React Image" class="img-fluid"></div>
    </div>
</div>
    `;
};
export default PostItem;