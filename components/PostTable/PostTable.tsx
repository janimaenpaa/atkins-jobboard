import { Post, PostStatus } from "@prisma/client";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { format } from "date-fns";
import { useSortBy, useTable } from "react-table";
import { DELETE, PUT } from "../../lib/api";
import Card from "../Card";

type Props = {
  posts: Post[];
};

const PostTable = ({ posts }: Props) => {
  const data = useMemo(() => posts, []);
  const router = useRouter();
  const className = "px-6 py-3 max-w-[200px]";

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Recruiter",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Created",
        accessor: "createdAt",
        Cell: ({ value }: any) => format(value, "dd.MM.yyyy"),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value, row }: any) => {
          const { id } = row.original;
          return (
            <select
              value={value}
              onChange={(event) => {
                handleStatusUpdate(id, event.target.value);
              }}
            >
              <option value={PostStatus.APPROVED}>Approved</option>
              <option value={PostStatus.WAITING}>Waiting</option>
              <option value={PostStatus.SPONSORED}>Sponsored</option>
              <option value={PostStatus.REJECTED}>Rejected</option>
            </select>
          );
        },
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: ({ value }: any) => (
          <div>
            <button
              onClick={() => router.push(`/admin/posts/${value}`)}
              className="mr-2 w-[50px] h-[26px] bg-emerald-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(value)}
              className="mr-2 w-[60px] h-[26px] bg-rose-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const handleDelete = (id: number) => {
    const request = DELETE(`posts/${id}`);
    router.reload();
  };

  const handleStatusUpdate = async (id: number, status: any) => {
    const updatedPost = await PUT(`posts/${id}`, { status: status });
    router.reload();
  };

  return (
    <Card fullWidth>
      <h2 className="text-2xl text-center m-2 font-bold">Posts</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={className}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <td {...cell.getCellProps()} className={className}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default PostTable;
