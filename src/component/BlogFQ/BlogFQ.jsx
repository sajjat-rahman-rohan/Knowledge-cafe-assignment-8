import React from "react";
import { Accordion } from "react-bootstrap";
import "./BlogFQ.css";

const BlogFQ = () => {
  return (
    <Accordion defaultActiveKey="0" className="container mt-5 mb-5 pb-5">
      <Accordion.Item eventKey="1" className="item">
        <Accordion.Header>1. Props vs state</Accordion.Header>
        <Accordion.Body>
          State is referred to the local state of the component which cannot be
          accessed and modified outside of the component and only can be used &
          modified inside the component. Props, on the other hand,make
          components reusable by giving components the ability to receive data
          from the parent component in the form of props.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="item">
        <Accordion.Header>2. How does useState work?</Accordion.Header>
        <Accordion.Body>
          UseState: useState is React Hook that allows you to add state to a
          functional component. It returns an array with two values: the current
          state and a function to update it. The Hook takes an initial state
          value as an argument and returns an updated state value whenever the
          setter function is called.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="item">
        <Accordion.Header>
          3. Purpose of useEffect other than fetching data.
        </Accordion.Header>
        <Accordion.Body>
          {/* The useEffect hook is the Swiss Army knife of all the hooks. It's the
          solution to many problems: how to fetch data when a component mounts,
          how to run code when state changes or when a prop changes, how to set
          up timers or intervals. */}
          The useEffect in react js allows you to perform side effects in your
          components. The react useEffect examples of side effects include
          retrieving data, direct DOM updates, and timers. The second argument
          is optional.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="item">
        <Accordion.Header>4. How Does React work?</Accordion.Header>
        <Accordion.Body>
          React is without a doubt one of the most powerful and flexible
          frontend frameworks. But with its great power comes great
          responsibility - it's easy to misuse it and create a mess of an app.
          To avoid it, one needs to really understand how React works internally
          by studying its code implementation and structure. Coincidentally, it
          is also one of the best ways to learn React in general.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default BlogFQ;
