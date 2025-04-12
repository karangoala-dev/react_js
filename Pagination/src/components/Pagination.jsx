const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const handleClick = (n) => {
      setCurrentPage(n);
    };
  
    const onPrevClick = () => {
      setCurrentPage((prevState) => prevState - 1);
    };
  
    const onNextClick = () => {
      setCurrentPage((prevState) => prevState + 1);
    };
    return (
      <div className="pagination-main">
        <button
          disabled={currentPage == 0 ? true : false}
          className="page"
          onClick={onPrevClick}
        >
          ⬅️
        </button>
        {[...Array(totalPages).keys()].map((n) => (
          <div
            className={"page" + (currentPage == n ? " active" : "")}
            onClick={() => handleClick(n)}
            key={n}
          >
            {n + 1}
          </div>
        ))}
        <button
          disabled={currentPage == totalPages - 1 ? true : false}
          className="page"
          onClick={onNextClick}
        >
          ➡️
        </button>
      </div>
    );
  };
  
  export default Pagination;
  