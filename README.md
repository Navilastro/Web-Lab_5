# React Product Dashboard - Web Programming Lab 5

This repository contains my solution for the first React assignment in the Web Programming lab. The purpose of this project is to build a "Simple Product Dashboard" to practice core React concepts such as components, props, state management, and list rendering. 

The project was created using Vite. As per the assignment rules, I used only functional components and `useState`. I did not use `useEffect`, API calls, Context, or any external component libraries.

## File Organization

The project files are organized according to the assignment requirements. All components are located inside the `src/components` directory.

```text
/ weblab5
├── src/
│   ├── components/
│   │   ├── Card.jsx        // A layout component that uses the 'children' prop for composition.
│   │   ├── Product.jsx     // A reusable component that displays a single product (title and price).
│   │   └── ProductList.jsx // Contains static product data and renders the list of Product components.
│   ├── App.jsx             // The root component that manages 'showProducts' and 'name' states.
│   └── main.jsx            // The main entry point of the React application.
├── index.html
└── package.json
```

## Challenges Faced

During the development of this project, I faced a few challenges as a beginner in React:

    Using the children prop: Understanding how component composition works and passing elements inside Card.jsx using the children prop was initially confusing. I had to review the lecture notes to implement it correctly.

    List Rendering and Keys: While mapping the static data array in ProductList.jsx, I received console warnings about unique keys. I learned that using array indexes as keys is a bad practice, so I used the unique id values of the products instead.

    Controlled Inputs: Binding the input field to the React state (name variable in App.jsx) required some practice. I had to make sure the input's value was strictly controlled by the state using the onChange event.