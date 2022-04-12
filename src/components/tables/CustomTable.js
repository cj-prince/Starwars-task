import React,{ useMemo } from 'react'
import { useTable } from 'react-table'
import styled from 'styled-components';


function CustomTable(props) {
  const data = useMemo(() => props.data || []);

  const columns = useMemo(() => props.columns || []);

  const tableInstance = useTable({
    columns,
    data
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={i} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

const TableWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: scroll;
  font-family: 'Inter';
  font-style: normal;

  table {
    background: #ffffff;
    overflow-x: scroll;
    border: none;
    width: 100%;
    max-width: 100%;
  }

  th {
    
    text-align: left;
    padding: 0 2.3rem;
    white-space: nowrap;
  }

  tr {
    border-bottom: 1px solid #E5E5E5;
    width: 1084px;
    height: 74px;
    text-align: center;
    padding: 2.4rem 0;

    &:hover {
      .options {
        opacity: 1;
      }
    }
  }

  td {
    text-align: center;
    padding: 0 1rem;
    white-space: nowrap;
    text-transform: capitalize;
  }

  thead {
    border-bottom: 1px solid #e4e4e4;
    text-transform: uppercase;
  }

  tbody {
    tr {
      &:hover {
        background: rgba(53, 88, 199, 0.1);
      }
    }
  }
`;

export { CustomTable,TableWrapper }