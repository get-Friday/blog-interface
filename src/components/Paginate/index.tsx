import { useState } from 'react';
import './style.css';

interface paginateProps {
  postPerPage: number;
  totalPosts: number | undefined;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export function Paginate({
  postPerPage,
  totalPosts,
  paginate,
  currentPage,
}: paginateProps) {
  const pageNumbers: number[] = [];
  const [firstPage, setFirstPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(5);

  if (totalPosts === undefined) {
    return <div>LOADING</div>;
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleUpdatePages(current: number) {
    switch (current) {
      case 1:
      case 2:
        setFirstPage(0);
        setLastPage(5);
        break;
      case pageNumbers.length:
      case pageNumbers.length - 1:
        setFirstPage(pageNumbers.length - 5);
        setLastPage(pageNumbers.length);
        break;
      default:
        setFirstPage(current - 3);
        setLastPage(current + 2);
        break;
    }
  }

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        {pageNumbers.slice(firstPage, lastPage).map((number) => (
          <li
            key={number}
            className={`page-number ${currentPage === number ? 'active' : ''}`}
          >
            <button
              onClick={() => {
                paginate(number);
                handleUpdatePages(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
