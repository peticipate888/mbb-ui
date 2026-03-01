"use client";
import { cn } from "../utils/cn";

interface MbbPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function MbbPagination({ currentPage, totalPages, onPageChange, className }: MbbPaginationProps) {
  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <nav className={cn("flex items-center justify-center gap-1", className)} aria-label="分頁導覽">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-link-prev"
        aria-label="上一頁"
      >
        <img src="/images/assets/icon-arrow-left.svg" alt="" className="h-4 w-4" />
      </button>
      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="page-link-mbb disabled">...</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn("page-link-mbb", page === currentPage && "active")}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-link-next"
        aria-label="下一頁"
      >
        <img src="/images/assets/icon-arrow-right.svg" alt="" className="h-4 w-4" />
      </button>
    </nav>
  );
}

export { MbbPagination };
