const Pagination = ({ page, setPage }) => {
  return (
    <ul className='pagination'>
      <li
        className={page === 1 ? 'page-item disabled' : 'page-item'}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </li>

      <li className='page-item' onClick={() => setPage((prev) => prev + 1)}>
        Next
      </li>
    </ul>
  );
};

export default Pagination;
