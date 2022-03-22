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

  const cookiesMenu = [
    {
      id: 1,
      name: "Mint Brownie",
      description: "For those who love brownies with a cool minty zing—all topped with a chocolate ganache."
    },
    {
      id: 2,
      name: "Sea Salt Toffee",
      description: "A delicious infusion of toffee and milk chocolate chips, topped off with a dash of sea salt."
    },
    {
      id: 3,
      name: "Peanut Butter Cookies & Cream",
      description: "The smoothness of chocolate and peanut butter with the sweet crunch of cookies and cream bits."
    },
    {
      id: 4,
      name: "Sugar (Gold Coin)",
      description: "Some sweet, vanilla smoothness with a gold chocolate coin. Don't spend it all in one place."
    },
    {
      id: 5,
      name: "Original ft. Lucky Charms™",
      description: "Inspired by the iconic cereal—rich with ﻿white chocolate chips, vanilla marshmallow frosting, and Lucky Charms™ marshmallows sprinkled on top."
    },
  ];

const CookiesPage = () => {

        const match = useRouteMatch();
        const findCookieById = (id) =>
          cookiesMenu.filter((cookie) => cookie.id == id)[0];
        return (
          <div>
            <h2>Cookies</h2>
      
              {cookiesMenu.map((cookie, index) => {
                return (
                  <Alert key={index} variant="primary">
                    <Link to={`${match.url}/${cookie.id}`}>
                      {cookie.name}
                    </Link>
                  </Alert>
                );
              })}
      
            <Switch>
              <Route
                path={`${match.path}/:cookieMenuId`}
                render={(props) => (
                  <Cookie
                    {...props}
                    data={findCookieById(props.match.params.cookieMenuId)}
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

function Cookie(props) {
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

export default CookiesPage