"use client";
import {
  Pagination as RadixPagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

interface Props {
  itemCount: number;
  currentPage: number;
  pageSize: number;
}
const Pagination = ({ itemCount, currentPage = 1, pageSize }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount <= 1) return null;
  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  return (
    <>
      <RadixPagination className="mt-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationButton
              disabled={currentPage === 1}
              onClick={() => changePage(1)}
            >
              <HiChevronDoubleLeft />
            </PaginationButton>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              disabled={currentPage === 1}
              onClick={() => changePage(currentPage - 1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              disabled={currentPage === pageCount}
              onClick={() => changePage(currentPage + 1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationButton
              disabled={currentPage === pageCount}
              onClick={() => changePage(pageCount)}
            >
              <HiChevronDoubleRight />
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </RadixPagination>
      <p className="text-sm text-center mt-5 text-muted-foreground">
        Showing page {currentPage} of {pageCount}
      </p>
    </>
  );
};

export default Pagination;
