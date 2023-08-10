import React from 'react';
import "./Pagination.css";

export default function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className="footer_pages">
        <ul className="page_numbers_container">
            {pageNumbers && pageNumbers.map(number => (
                <li key={number} onClick={() => paginate(number)} className="page_number_box">
                    <a className="page_number_link">{number}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}
