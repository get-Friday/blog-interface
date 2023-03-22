import { BlogPost } from '@components';
import { useRequest } from '@hooks/useRequest';
import { POSTS_URL } from '@constants/POSTS_URL';
import type { IBlogPost } from '@interfaces/IBlogPost';

type GET_BLOG_RESPONSE = IBlogPost;

function App() {
  const getAllPostRequest = useRequest<GET_BLOG_RESPONSE[]>(POSTS_URL);

  if (getAllPostRequest.isLoading) {
    return <main>Carregando</main>;
  }

  if (getAllPostRequest.error !== undefined) {
    return <main>Houve um erro ao obter as postagens</main>;
  }

  return (
    <main>
      { getAllPostRequest.response?.map((post: IBlogPost) => 
        <BlogPost title={post.title} key={post.id}>{ post.body }</BlogPost>
      )}
    </main>
  );
}

export default App;
