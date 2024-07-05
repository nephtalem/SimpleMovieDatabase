import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.round(itemsCount / pageSize);

  const pages = _.range(1, pagesCount + 1);
  console.log(currentPage);
  return (
    <nav aria-label="Page navigation example">
      {pages.length > 1 && (
        <ul class="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
