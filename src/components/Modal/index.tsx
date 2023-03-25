import ReactDom from 'react-dom';
import './style.css';
import type { IBlogPost } from '@interfaces/IBlogPost';
import type { IComments } from '@interfaces/IComments';
import { useRequest } from '@hooks/useRequest';
import { POSTS_URL } from '@constants/POSTS_URL';

interface modalProps {
  open: boolean;
  handleClose: () => void;
  postData: IBlogPost | undefined;
}

export function Modal({ open, handleClose, postData }: modalProps) {
  const getPostComment = useRequest<IComments[]>(
    `${POSTS_URL}/${postData?.id ?? 0}/comments`,
  );

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        className='overlay-shadow'
        onClick={handleClose}
        onKeyDown={handleClose}
        role='button'
        tabIndex={0}
      />
      <div className='modal-container'>
        <button className='close-modal' onClick={handleClose}>
          Close
        </button>
        <h1>{postData?.title}</h1>
        <p>{postData?.body}</p>
        <div className='all-comments-container'>
          <h2>Comments</h2>
          {
            getPostComment.response?.map((comment) => (
              <div key={comment.id} className='comment-container'>
                <h2 className='comments-name'>{comment.name}</h2>
                <h3 className='comments-email'>{comment.email}</h3>
                <p>{comment.body}</p>
              </div>
            )) as React.ReactNode
          }
        </div>
      </div>
    </>,
    document.getElementById('portal') as Element,
  );
}
