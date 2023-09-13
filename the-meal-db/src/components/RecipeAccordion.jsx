import Accordion from 'react-bootstrap/Accordion';
import { useParams} from 'react-router-dom'
import Ingredients from './Ingredients';

const RecipeAccordion = ({mealInfo}) => {
  const params = useParams()

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ingredients</Accordion.Header>
        <Accordion.Body>
          <Ingredients mealInfo={mealInfo}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Directions</Accordion.Header>
        <Accordion.Body className='frank'>
          {mealInfo.strInstructions}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RecipeAccordion;