import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

<<<<<<< HEAD
// import tableStyles from "./portfolio.module.scss"

// Table component
const Table = ({ columns, data }) => {
  console.log(columns)
  console.log(data)

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <div>
        {/* <pre>
          <code>{JSON.stringify(state[0].rowState)}</code>
        </pre> */}
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{ textAlign: "center" }}
                >
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
          Header: "Tech Stacks",
          accessor: "techstacks",
          //filter: CHOICE OF FILTER
        },
      ],
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Description",
          accessor: "description",
        },
        {
          Header: "Link",
          accessor: "link",
        },
      ],
    },
  ])

  const data = React.useMemo(() => makeData(10), [])

=======
const PortfolioPage = () => {
  // TODO: Define Filter Function Here
>>>>>>> add-portfolio-page
  return (
    <Layout style={{ width: !"90%" }}>
      <Head title="Portfolio" />
      <section id="portfolio">
        <h1 id="page-header">Portfolio</h1>
        <div id="filter">Filter</div>
        <div id="gallery">Gallery</div>
      </section>
    </Layout>
  )
}

export default PortfolioPage
