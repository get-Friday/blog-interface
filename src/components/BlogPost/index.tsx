import { USER_URL } from '@constants/USER_URL';
import { useRequest } from '@hooks/useRequest';
import type { IUser } from '@interfaces/IUser';
import './style.css';

interface postProp {
  children: string | JSX.Element;
  title: string;
  userId: number;
}

export function BlogPost({ children, title, userId }: postProp) {
  const getUser = useRequest<IUser>(`${USER_URL}/${userId}`);

  return (
    <div className='post-container'>
      <h1>{title}</h1>
      <p>{children}</p>
      <div className="post-footer">
        <p>
          Post made by{' '}
          {getUser.isLoading ? 'loading' : getUser.response?.username}
        </p>
        <div className='read-more'>READ MORE</div>
      </div>
    </div>
  );
}
