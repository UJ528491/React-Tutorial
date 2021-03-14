import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { books } from "./books";
import Book from "./Book";

const BookListContainer = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function BookList() {
  return (
    <>
      <GlobalStyle />
      <BookListContainer>
        {books.map(book => {
          return <Book key={book.id} {...book} />;
        })}
      </BookListContainer>
    </>
  );
}

/* const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
}; */

ReactDom.render(<BookList />, document.getElementById("root"));
