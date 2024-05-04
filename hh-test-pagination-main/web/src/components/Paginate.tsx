import React, {useState} from 'react';
import {Pagination} from 'react-bootstrap';

interface IPaginate {
  countTotalPages: number;
  handleCurrentPage: (currentPage: number) => void;
  currentPage: number;
}

export default function Paginate({countTotalPages, handleCurrentPage, currentPage}: IPaginate) {
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(10);

  const handlePrev = () => {
    handleCurrentPage(currentPage - 1);
    if (firstPage > 1) {
      setFirstPage(firstPage - 1);
      setLastPage(lastPage - 1);
    }
  }

  const handleNext = () => {
    handleCurrentPage(currentPage + 1);
    if (firstPage < countTotalPages) {
      setFirstPage(firstPage + 1);
      setLastPage(lastPage + 1);
    }
  }

  const handleFirst = () => {
    handleCurrentPage( 1);
    setFirstPage(1);
    setLastPage(10);

  }

  const handleLast = () => {
    handleCurrentPage(countTotalPages);
    setFirstPage(countTotalPages - 9);
    setLastPage(countTotalPages);
  }

    return (
      <div>
        <Pagination size="sm">
          <Pagination.First onClick={handleFirst}/>
          <Pagination.Prev onClick={handlePrev}/>
          {Array.from({length: lastPage - (firstPage-1)}, (_, index) => (
            <Pagination.Item className="pagination-item" key={index + firstPage}
                             onClick={() => handleCurrentPage(index + firstPage)}>{index + firstPage}</Pagination.Item>
          ))}
          <Pagination.Next onClick={handleNext}/>
          <Pagination.Last onClick={handleLast}/>
        </Pagination>
      </div>
    );
}
