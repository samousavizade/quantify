// import Link from 'next/link';
// import {Dispatch} from "react";
import { LinkButton } from '@dlarroder/playground';

// import {POSTS_PER_PAGE} from "@/types/default";

interface Props {
  pagination: any;
  handleNextPage: any;
  handlePreviousPage: any;
}

export default function Pagination({ pagination, handleNextPage, handlePreviousPage }: Props) {
  const currentPage = pagination.currentPage;
  const totalPages = pagination.totalPages;

  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <LinkButton onClick={handlePreviousPage} className="underline-magical">
            <button>Previous</button>
          </LinkButton>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <LinkButton onClick={handleNextPage} className="underline-magical">
            <button>Next</button>
          </LinkButton>
        )}
      </nav>
    </div>
  );
}
