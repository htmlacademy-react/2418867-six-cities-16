import { postAPI } from '../../services/post-service';
import PostItem from './post-item';

const PostContainer = () => {
  const { data: posts } = postAPI.useFetchAllUsersQuery(5);
  return (
    <div>
      {posts &&
        posts
          .slice(1,2)
          .map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default PostContainer;
