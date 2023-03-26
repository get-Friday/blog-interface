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
  const [firstPage, setFirstPage] = useState<number>(currentPage - 1);
  const [lastPage, setLastPage] = useState<number>(currentPage + 4);

  if (totalPosts === undefined) {
    return <div>LOADING</div>;
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleUpdatePages(current: number) {
    switch (current){
      case 1: 
      setFirstPage(current - 1);
      setLastPage(current + 4);
      break
      case 2: 
      setFirstPage(current - 2);
      setLastPage(current + 3);
      break
      case pageNumbers.length:
        setFirstPage(pageNumbers.length - 5);
        setLastPage(pageNumbers.length);
      break
      case pageNumbers.length - 1:
        setFirstPage(pageNumbers.length - 5);
        setLastPage(pageNumbers.length);
      break
      default:
        setFirstPage(current - 3);
        setLastPage(current + 2);
      break
    }
    console.log(current)
    console.log(firstPage)
    console.log(lastPage)
    console.log(pageNumbers.length)
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
