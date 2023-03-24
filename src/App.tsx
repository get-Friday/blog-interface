import { useState } from 'react';
import { BlogPost, Header, Paginate, SelectPages, Footer, Welcome } from '@components';
import { useRequest } from '@hooks/useRequest';
import { POSTS_URL } from '@constants/POSTS_URL';
import type { IBlogPost } from '@interfaces/IBlogPost';
import './styles/app.css';

type GET_BLOG_RESPONSE = IBlogPost;

function App() {
  const getAllPostRequest = useRequest<GET_BLOG_RESPONSE[]>(POSTS_URL);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = getAllPostRequest.response?.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  function handleSelect(selectPage: React.ChangeEvent<HTMLSelectElement>) {
    setPostPerPage(Number(selectPage.target.value));
  }

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
        <Welcome />
        <div className='posts-container'>
          <SelectPages handleSelect={handleSelect} />
          {currentPosts?.map((post: IBlogPost) => (
            <BlogPost title={post.title} userId={post.userId} key={post.id}>
              {post.body}
            </BlogPost>
          ))}
          <Paginate
            postPerPage={postPerPage}
            totalPosts={getAllPostRequest.response?.length}
            paginate={paginate}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
