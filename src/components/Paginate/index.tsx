import { useState } from 'react';
import './style.css';

interface paginateProps {
  postPerPage: number;
  totalPosts: number | undefined;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  handleBackKey: () => void;
}

export function Paginate({
  postPerPage,
  totalPosts,
  paginate,
  currentPage,
  handleBackKey,
}: paginateProps) {
  const pageNumbers: number[] = [];
  const [firstPage, setFirstPage] = useState<number>(currentPage - 1);
  const [lastPage, setLastPage] = useState<number>(currentPage + 4);
  const displayBackKey = `page-number ${currentPage === 1 ? 'hidden' : ''}`;

  if (totalPosts === undefined) {
    return <div>LOADING</div>;
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleUpdatePages(current: number) {
    if (lastPage >= pageNumbers.length) return;

    setFirstPage(current - 1);
    setLastPage(current + 4);
  }

  function handleBackKeyPag() {
    if (firstPage === 0) return;

    setFirstPage((prevFirstPage) => prevFirstPage - 1);
    setLastPage((prevLastPage) => prevLastPage - 1);
  }

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        <li className={displayBackKey}>
          <button
            onClick={() => {
              handleBackKey();
              handleBackKeyPag();
            }}
          >
            ←
          </button>
        </li>
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
