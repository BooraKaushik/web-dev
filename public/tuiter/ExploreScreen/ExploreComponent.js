import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return (`
    <div class="wd-border-gray">
    <div class="row mb-2">
        <div class="col-11">
            <div class="input-group col-10">
                <span class="wd-bgcolor-gray input-group-text wd-border-16" id="wd-search-icon"><i class="fas fa-search  fa-in"></i></span>
                <input type="text" class="wd-bgcolor-gray wd-search form-control wd-border-16" style="border-color: transparent;" placeholder="Search Twitter" aria-label="twitter" aria-describedby="wd-search-icon">

            </div>
        </div>
        <div class="col-1 m-auto"><i style="color:#2a9fd6;" class="fas fa-cog wd-double fa-in"></i></div>
    </div>
    <ul class="nav nav-tabs mb-0 wd-bct">
        <li class="nav-item">
            <a class="nav-link active wd-color-gray" href="../for-you.html">For You</a>
            <div class="wd-active"></div>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-color-gray" href="../trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-color-gray" href="../news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wd-color-gray" href="../sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-inline">
            <a class="nav-link wd-color-gray px-lg-1 px-xl-2" href="../entertainment.html">Entertainment</a>
        </li>
    </ul>
</div>
<div class="position-relative wd-border-gray">
    <img src="../explore/spacex.jfif" alt="Spacex Image" class="img-fluid">
    <h3 class="position-absolute bottom-0 start-0 px-3 py-2 wd-color-white">Space X's Starship</h3>
</div>
<div class="list-group">
           ${PostSummaryList()}</div>
    `);
}
export default ExploreComponent;