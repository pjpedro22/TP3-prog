import React from 'react'
import { Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

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
    <ListGroup>
      {ingredients.map((ingredient, i) => (
        <li key={i}>
          <ListGroup.Item className='frank'>{ingredient.ingredient}</ListGroup.Item>
          <ListGroup.Item>{ingredient.measure}</ListGroup.Item>
        </li>
      ))}
    </ListGroup>
  )
}

export default Ingredients