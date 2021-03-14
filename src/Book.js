import React from "react";
import styled from "styled-components";

const BookContainer = styled.article`
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  h1 {
    margin-top: 0.5rem;
  }
  // jsx css > styled css
  h4 {
    color: #617d98;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
  img {
    width: 300px;
  }
`;
const Book = ({ img, title, author }) => {
  const clickHandler = e => {
    alert("hello");
    console.log(e);
    console.log(e.target);
  };
  const complexExample = title => {
    console.log(title);
  };
  return (
    <BookContainer
      className="book"
      onMouseOver={() => {
        console.log("mouse over!");
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      <button type="button" onClick={() => complexExample(title)}>
        print title
      </button>
      <button></button>
    </BookContainer>
  );
};

export default Book;
