import React from 'react'
import { Col } from 'react-bootstrap';

const Ingredients = ({mealInfo}) => {
  const ingredients = [];

  for (let i = 0; i < 20; i++) {
    const ingredient = mealInfo[`strIngredient${i}`]
    const measure = mealInfo[`strMeasure${i}`]

    if (ingredient && ingredient !== '' && measure && measure !== '') {
      ingredients.push({ingredient, measure})
    }
  }

  return (
    <ul>
      {ingredients.map((ingredient, i) => (
        <li key={i}>
          <Col>{ingredient.ingredient}</Col>
          <Col>{ingredient.measure}</Col>
          <hr />
        </li>
      ))}
    </ul>
  )
}

export default Ingredients