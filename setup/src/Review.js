import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const persons = [...people]

  const [index, setIndex] = useState(0)

  const onClickPrevHandler = () => {
    if (index > 0) {
      setIndex(index - 1)

    } else {
      setIndex(persons.length - 1)
    }
  }

  const onClickNextHandler = () => {
    if (index < persons.length - 1) {
      setIndex(index + 1)

    } else {
      setIndex(0)
    }
  }

  const shufflePersons = () => {
    const randomIndex = Math.floor(Math.random() * persons.length)
    setIndex(randomIndex)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={persons[index].image} alt="person" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>
        {persons[index].name}
      </h4>
      <p className="job">
        {persons[index].job}
      </p>
      <p className="info">
        {persons[index].text}
      </p>
      <div className="button-container">
        <button className="prev-btn" onClick={onClickPrevHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={onClickNextHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={shufflePersons}>
        Surprise Me
      </button>
    </article>
  )
}

export default Review;
