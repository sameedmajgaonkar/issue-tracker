import {
  Pagination as RadixPagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Text } from "@/components/ui/text";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

interface Props {
  itemCount: number;
  currentPage: number;
  pageSize: number;
}
const Pagination = ({ itemCount, currentPage, pageSize }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  return (
    <>
      <RadixPagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationButton disabled={currentPage === 1}>
              <HiChevronDoubleLeft />
            </PaginationButton>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious disabled={currentPage === 1} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext disabled={currentPage === pageCount} />
          </PaginationItem>
          <PaginationItem>
            <PaginationButton disabled={currentPage === pageCount}>
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
