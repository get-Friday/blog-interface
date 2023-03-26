import './style.css';

interface paginateProps {
  postPerPage: number;
  totalPosts: number | undefined;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

export function Paginate({ postPerPage, totalPosts, paginate, currentPage }: paginateProps) {
  const pageNumbers: number[] = [];
  const totalpages: number = pageNumbers.length;

  if (totalPosts === undefined) {
    return <div>LOADING</div>;
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-number ${currentPage === number ? 'active' : ''}`}>
            <button
              onClick={() => {
                paginate(number);
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
