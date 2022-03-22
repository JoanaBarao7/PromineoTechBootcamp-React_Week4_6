import React from 'react';
import Review from './components/review components/review';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';

  const donutMenu = [
    {
      id: 1,
      name: "Cinnamon Sugar Cake",
      description: "A traditional vanilla cake donut, leavened with baking soda. Soft cakey texture. Coated in a mix of cinnamon and sugar."
    },
    {
      id: 2,
      name: "Lemon Pistachio Old Fashioned ",
      description: "Blooming cake donut, made with buttermilk and sour cream making it dense, moist, and slightly crunchy. Dough is flavored with lemon and topped with a pistachio glaze."
    },
    {
      id: 3,
      name: "Double Chocolate Old Fashioned",
      description: "Blooming chocolate cake donut, made with buttermilk and sour cream making it dense, moist, and slightly crunchy."
    },
    {
      id: 4,
      name: "Apple Fritter",
      description: "Fritters are made by using chopped yeast dough, cinnamon sugar, chopped apples and topped with a thin vanilla glaze."
    },
    {
      id: 5,
      name: "Blueberry Old Fashioned",
      description: "Blooming cake donut, made with buttermilk and sour cream making it dense, moist, and slightly crunchy. Dough is flavored with a blueberry fruit concentrate."
    },
  ];

const DonutsPage = () => {

        const match = useRouteMatch();
        const findDonutById = (id) =>
          donutMenu.filter((donut) => donut.id == id)[0];
        return (
          <div>
            <h2>Donuts</h2>
      
              {donutMenu.map((donut, index) => {
                return (
                  <Alert key={index} variant="primary">
                    <Link to={`${match.url}/${donut.id}`}>
                      {donut.name}
                    </Link>
                  </Alert>
                );
              })}
      
            <Switch>
              <Route
                path={`${match.path}/:donutMenuId`}
                render={(props) => (
                  <Donut
                    {...props}
                    data={findDonutById(props.match.params.donutMenuId)}
                    />
                )}
              />
              <Route path={match.path}>
                <h3>Please Select an Item.</h3>
              </Route>
            </Switch>
          </div>
        );
}

function Donut(props) {
    const {data} = props;
    return data == undefined ? <h1>404 Not Found</h1> :(
      <Card>
        <Card.Header>{data.name}</Card.Header>
        <Card.Body>
          <Card.Subtitle>{data.name}</Card.Subtitle>
          <Card.Text>{data.description}</Card.Text>
          <Review />
        </Card.Body>
      </Card>
    );
  }

export default DonutsPage