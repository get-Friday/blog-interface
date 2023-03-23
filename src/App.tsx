import { BlogPost, Header } from '@components';
import { useRequest } from '@hooks/useRequest';
import { POSTS_URL } from '@constants/POSTS_URL';
import type { IBlogPost } from '@interfaces/IBlogPost';
import './styles/app.css';

type GET_BLOG_RESPONSE = IBlogPost;

function App() {
  const getAllPostRequest = useRequest<GET_BLOG_RESPONSE[]>(POSTS_URL);

  if (getAllPostRequest.isLoading) {
    return <main>Loading</main>;
  }

  if (getAllPostRequest.error !== undefined) {
    return <main>An error occurred while trying to load posts</main>;
  }

  return (
    <div>
      <Header />
      <main>
        <div className='posts-container'>
          {getAllPostRequest.response?.map((post: IBlogPost) => (
            <BlogPost title={post.title} userId={post.userId} key={post.id}>
              {post.body}
            </BlogPost>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
