import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";
const PostSummaryList = () => {
  return (
    <div className="list-group">
      {posts.map((element) => {
        return <PostSummaryItem post={element} />;
      })}
    </div>
  );
};
export default PostSummaryList;
