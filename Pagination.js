import React from 'react'

const Pagination = ({postsPerPage, totalPosts , paginate}) => {
    const pageNumbers = []; 
    for(let i=1 ; i <= Math.ceil(totalPosts/postsPerPage);i++ ){
    pageNumbers.push(i);
    }
    return (
        <nav className="d-flex flex-row-reverse bd-highlight">
            <ul className='pagination p-2'>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='!#' className='page-link'>
                    {number}
                </a>
                </li>
                
            ))}
            </ul>
        </nav>
    )
}

export default Pagination
