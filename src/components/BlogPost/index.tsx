import { USER_URL } from '@constants/USER_URL';
import { useRequest } from '@hooks/useRequest';
import type { IUser } from '@interfaces/IUser';
import './Style.css';

interface postProp {
  children: string | JSX.Element;
  title: string;
  userId: number;
}

export function BlogPost(props: postProp) {
  const getUser = useRequest<IUser>(`${USER_URL}/${props.userId}`);

  return (
    <div className='post-container'>
      <h1>{props.title}</h1>
      <h3>Post made by {getUser.isLoading ? 'loading' : getUser.response?.username}</h3>
      <p>{props.children}</p>
      <div className="read-more">READ MORE</div>
    </div>
  );
}
