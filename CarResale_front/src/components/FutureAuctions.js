import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Header from './Header';

const API = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json';
const ITEMS_PER_PAGE = 10;

const FutureAuctions = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function getData() {
      const request = fetch(API);
      const response = await request;
      const parsed = await response.json();
      setData(parsed);
    }
    getData();
  }, []);

  if (!data) {
    return null;
  }

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentData = data.Results.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(data.Results.length / ITEMS_PER_PAGE);

  return (
    <div className="container">
      {/* <Header /> */}
      <div className="main-content">
        <table className="group">
          {currentData.map((car) => {
            return (
              <tr className="group">
                <td>
                  <strong>{car.Make_Name}</strong>
                </td>
                <td>
                  <p>{car.Model_Name}</p>
                </td>
                {/* <td><Action data={{auction:"30000"}}/></td> */}
              </tr>
            );
          })}
        </table>
      </div>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default FutureAuctions;
