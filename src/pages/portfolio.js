import React from "react"
import { useTable } from "react-table"

import makeData from "../components/makeData"

import Layout from "../components/layout"
import Head from "../components/head"

// Table component
const Table = ({ columns, data }) => {

  console.log(columns)
  console.log(data)

  const { getTableProps, headerGroups, rows, prepareRow, state } = useTable({
    columns,
    data,
  })

  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <div>
        <pre>
          <code>{JSON.stringify(state[0])}</code>
        </pre>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ textAlign: 'center' }}>
                  {column.render("Header")}
                  {/* TODO */}
                  {/* Render the columns filter UI */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {firstPageRows.map(
            (row, i) =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  })}
                </tr>
              )
          )}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows.</div>
    </>
  )
}

const PortfolioPage = () => {
  // TODO: Define Filter Function Here

  const columns = React.useMemo(() => [
    {
      Header: "Projects",
      columns: [
        {
          Header: "Front End",
          accessor: "frontend",
        },
        {
          Header: "Back End",
          accessor: "backend",
          //filter: CHOICE OF FILTER
        },
        {
          Header: "Description",
          accessor: 'description'
        },
        {
          Header: 'Link',
          accessor: 'link'
        }
      ],
    },
  ])

  const data = React.useMemo(() => makeData(10), [])

  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>Portfolio</h1>
      <Table columns={columns} data={data} />
    </Layout>
  )
}

export default PortfolioPage
