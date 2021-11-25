import Link from "next/link";

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage} passHref>
            <li className="relative text-center w-10 h-10 block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer font-bold">
              &lt;
            </li>
          </Link>
        )}

        <li className="relative text-center w-10 h-10 block py-2 px-3 bg-gray-900 text-gray-100 mr-1 font-bold">
          {currentPage}
        </li>

        {!isLast && (
          <Link href={nextPage} passHref>
            <li className="relative text-center w-10 h-10 block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer font-bold">
              &gt;
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
