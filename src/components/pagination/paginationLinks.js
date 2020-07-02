import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const paginationLinks = ({ currentPage, numberOfPages }) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numberOfPages
    const previousPage =
        currentPage - 1 === 1 ? '/blog' : '/page/' + (currentPage - 1).toString()
    const nextPage = '/page/' + (currentPage + 1).toString()
    return (
        <Pagination >
            {isFirst ? (
                <PaginationItem disabled>
                    <PaginationLink previous href="/blog" />
                </PaginationItem>
            ) : (
                    <PaginationItem>
                        <PaginationLink previous href={previousPage} />
                    </PaginationItem>
                )}
            {Array.from({ length: numberOfPages }, (_, i) =>
                currentPage === i + 1 ? (
                    <PaginationItem active key={`page-number${i + 1}`}>
                        <PaginationLink href={`/${i === 0 ? 'blog' : 'page/' + (i + 1)}`}>
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ) : (
                        <PaginationItem key={`page-number${i + 1}`}>
                            <PaginationLink href={`/${i === 0 ? 'blog' : 'page/' + (i + 1)}`}>
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )
            )}
            {isLast ? (
                <PaginationItem disabled>
                    <PaginationLink next href={nextPage} />
                </PaginationItem>
            ) : (
                    <PaginationItem>
                        <PaginationLink next href={nextPage} />
                    </PaginationItem>
                )}
        </Pagination>
    )
}

export default paginationLinks;
