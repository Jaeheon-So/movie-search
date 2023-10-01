import { useContext } from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import QueryStringContext from "../contexts/QueryStringContext";

type Props = {
  totalResults: string;
};

const Paging = ({ totalResults }: Props) => {
  const queryValue = useContext(QueryStringContext);

  const handlePageChange = (page: number) => {
    queryValue?.actions.pageChange(page.toString());
  };

  return (
    <Container>
      <Pagination
        activePage={Number(queryValue?.state.selectOptions.page)}
        itemsCountPerPage={10}
        totalItemsCount={Number(totalResults)}
        pageRangeDisplayed={10}
        prevPageText={"<"}
        nextPageText={">"}
        hideDisabled={true}
        onChange={handlePageChange}
      />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 35px;
  display: flex;
  justify-content: center;

  .pagination {
    color: #0d6efd;
    display: flex;
    justify-content: center;
    padding-left: 0;
    list-style: none;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #dee2e6;

    li a {
      position: relative;
      display: block;
      padding: 10px 12px;
      color: #0d6efd;
      text-decoration: none;
      border-right: 1px solid #dee2e6;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
      &:hover {
        /* z-index: 2; */
        background-color: #e9ecef;
        border-color: #dee2e6;
      }
    }

    li:last-child a {
      border: none;
    }

    li.active a {
      /* z-index: 3; */
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
  }
`;

export default Paging;
