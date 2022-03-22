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
  

const cupcakesMenu = [
    {
      id: 1,
      name: "Cookies N’ Cream",
      description: "Double creme filled chocolate cake and OREO® Cookie Frosting!",
    },
    {
      id: 2,
      name: "Lemon Crumble",
      description: "Sweet lemon cake filled with tangy whipped cream, topped in smooth cream cheese rimmed in crumbled lemon shortbread."
    },
    {
      id: 3,
      name: "Midnight Magic",
      description: "Super moist semi-sweet chocolate cake topped with silky chocolate buttercream and a handful of tasty chocolate chips."
    },
    {
      id: 4,
      name:  "Peach Blossom",
      description: "Sweet peach cake frosted with simply peach buttercream."
    },
    {
      id: 5,
      name: "Scarlett's Red Velvet",
      description: "Rich scarlet red chocolate cake filled with creamy vanilla topped with our classic cream cheese frosting."
    },
  ];

const CupcakesPage = () => {
        const match = useRouteMatch();
        const findCupcakeById = (id) =>
          cupcakesMenu.filter((cupcake) => cupcake.id == id)[0];
        return (
          <div className="cupcakebody">
            <h2>Cupcakes</h2>
      
              {cupcakesMenu.map((cupcake, index) => {
                return (
                  <Alert key={index} variant="primary">
                    <Link to={`${match.url}/${cupcake.id}`}>
                      {cupcake.name}
                    </Link>
                  </Alert>
                );
              })}
      
            <Switch>
              <Route
                path={`${match.path}/:cupcakesMenuId`}
                render={(props) => (
                  <Cupcake
                    {...props}
                    data={findCupcakeById(props.match.params.cupcakesMenuId)}
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

function Cupcake(props) {
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

export default CupcakesPage;