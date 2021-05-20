import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Tikka Masala',
    description: 'Roasted chicken cooked in fragrant rich tomato base creamy butter sauce',
    price: 5.99,
  },
  {
    id: 'm2',
    name: 'Salmon Poke Bowl',
    description: 'Premium sushi rice, salmon, wakame, carrot, cucumber, avocado, nori, edamame, soya sauce',
    price: 12.5,
  },
  {
    id: 'm3',
    name: 'Quesadilla + soup',
    description: 'Cheese Quesadilla with pork, wheat tortilla, mild salsa, source cream, beans',
    price: 6.49,
  },
  {
    id: 'm4',
    name: 'Chicken Vindaloo + Rice + Naan',
    description: 'Cubes of chicken and potatoes cooked in tomato based, spicy gravy',
    price: 11.99,
  },
  {
    id: 'm5',
    name: 'Lamb Roganjosh',
    description: 'Lamb cooked in truly kashmiri style with yogurt tomato and fennel seed',
    price: 7.89,
  },
  {
    id: 'm6',
    name: 'Shrimps Madras',
    description: 'Very spicy schrimps cooked in south indian style tempered with mustard and curry leaves.',
    price: 7.89,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
