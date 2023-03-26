import { useState } from 'react';
import {
  BlogPost,
  Header,
  Paginate,
  SelectPages,
  Footer,
  Welcome,
  Modal,
} from '@components';
import { useRequest } from '@hooks/useRequest';
import { POSTS_URL } from '@constants/POSTS_URL';
import type { IBlogPost } from '@interfaces/IBlogPost';
import './styles/app.css';

function App() {
  const getAllPostRequest = useRequest<IBlogPost[]>(POSTS_URL);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentPostModal, setCurrentPostModal] = useState<IBlogPost>();

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

  function handleModalVisibility(visible: boolean, blogData?: IBlogPost) {
    setIsModalOpen(visible);

    if (blogData === undefined) return;

    setCurrentPostModal(blogData);
  }

  if (getAllPostRequest.isLoading) {
    return <main>Loading</main>;
  }

  if (getAllPostRequest.error !== undefined) {
    return <main>An error occurred while trying to load posts</main>;
  }

  return (
    <>
      <Modal
        open={isModalOpen}
        handleClose={() => {
          handleModalVisibility(false);
        }}
        postData={currentPostModal}
      />
      <Header />
      <main>
        <Welcome />
        <div className='posts-container'>
          <SelectPages handleSelect={handleSelect} />
          {currentPosts?.map((post: IBlogPost) => (
            <BlogPost
              title={post.title}
              userId={post.userId}
              key={post.id}
              handleModalOpen={() => {
                handleModalVisibility(true, post);
              }}
            >
              {post.body}
            </BlogPost>
          ))}
          <Paginate
            postPerPage={postPerPage}
            totalPosts={getAllPostRequest.response?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
