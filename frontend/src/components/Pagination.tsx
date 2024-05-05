export type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, totalPages, onPageChange }: Props) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      <ul className="flex rounded-md">
        {pageNumbers.map((number) => (
          <li
            className={`px-2 py-1 rounded ${
              page === number ? "bg-gray text-white font-semibold" : ""
            }`}
          >
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
