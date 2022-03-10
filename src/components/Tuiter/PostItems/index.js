import Posts from "./Posts.json";
import PostList from "./BookmarkItems";
const PostItems = () => {
  return (
    <div>
      {Posts.map((element) => {
        return <PostList post={element} />;
      })}
    </div>
  );
};
export default PostItems;
