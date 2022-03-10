import NavigationSidebar from "../NavigationSidebarComponent";
import PostSummaryList from "../PostSummaryList";
import PostItems from "../PostItems";

const HomeScreen = () => {
  return (
    <>
      <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar parameter="home" />
        </div>
        <div class="col-10 col-lg-6 ps-3 pe-0">
          <PostItems />
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <PostSummaryList />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
