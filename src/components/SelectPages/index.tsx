import './style.css';

interface SelectPagesProps {
  handleSelect: (selectPage: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectPages({ handleSelect }: SelectPagesProps) {
  return (
    <div className='select-container'>
      <label htmlFor='postsPerPage'>Posts per page</label>
      <select
        name='postsPerPage'
        id='postsPerPage'
        onChange={handleSelect}
        defaultValue='10'
      >
        <option value='4'>4</option>
        <option value='10'>10</option>
        <option value='16'>16</option>
        <option value='24'>24</option>
      </select>
    </div>
  );
}
