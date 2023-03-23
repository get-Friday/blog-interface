import './style.css';

interface paginateProps {
  postPerPage: number;
  totalPosts: number | undefined;
  paginate: (pageNumber: number) => void;
}

export function Paginate({ postPerPage, totalPosts, paginate }: paginateProps) {
  const pageNumbers: number[] = [];
  
  if (totalPosts === undefined) {
    return <div>LOADING</div>;
  }
  
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  
  const pageNumberClass = `page-number ${(pageNumbers.length > 10) ? 'small' : ''}`
  
  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className={pageNumberClass}>
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
