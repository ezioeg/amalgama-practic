# Amalgama Practic

Amalgama Practic is a technical web test related to React, evaluating both the understanding of its fundamental concepts and the ability to work with global state and make API calls. Additionally, it focuses on code improvement and bug fixing.

## Technologies Used

- React v17.0.2
- Redux v4.1.2
- React Redux v7.2.6
- Redux Thunk v2.4.1
- Axios v0.26.0

## Project Structure

```javascript
amalgama-web-test/
├── public/
├── src/
│   ├── components/
│   ├── data-mockup/
│   ├── redux/
│   ├── services/
│   ├── utils/
│   ├── views/
│   ├── App.js
│   └── index.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

## Exercise 1 - Components

1. List all issues or possible improvements for this component. Mention which of these are the most important.
2. Refactor the code and attach the improved solution.
3. Justify the changes made in point 2, explaining what improvements were made and why they solve the issues mentioned in point 1.

---

## Exercise 1 Response

Issues or possible improvements:

- The exercise had a missing closing parenthesis ")" for the map method.

  | Justification              | Improvement            |
  | -------------------------- | ---------------------- |
  | Fix syntax error	          | Display the app        |

  Code snippet with the error:

```javascript
{
  contact.addresses.map((address) => (
    <ul>
      <li>{address.line_1}</li>
      <li>{address.line_2}</li>
      <li>{address.zip_code}</li>
      <li>{address.city}</li>
      <li>{address.state}</li>
    </ul>
  )) // A closing parenthesis was missing here
}
```

- Creation of mock data. `contacts`, `states`, `cities`
  | Justification | Improvement |
  | ------------------------------------------------------- | ------------------- |
  | Simulate data | Faster testing |

- A missing function named `truncate` was assumed to limit text length. This function was renamed to `truncateString`.
  | Justification | Improvement |
  | ------------------------------------------------------- | ------------------- |
  | Use a more descriptive name | Code readability|

- A missing function named `findByID` was assumed to find a state or city name by its ID. This function was renamed to `findNameByID`.
  | Justification | Improvement |
  | ------------------------------------------------------- | ------------------- |
  | Use a more descriptive name | Code readability |

- Use `arrow functions` to reduce lines of code.
  | Justification | Improvement |
  | ------------------------------------------------------- | ------------------- |
  | Reduce lines of code | Cleaner, more maintainable code |

- Rename component from `ContactsComponent` to `Contacts`.
  | Justification | Improvement |
  | ------------------------------------------------------- | ------------------- |
  | Avoid redundancy with Component | Better project structure|

- Create a child component `Contact` inside the parent component `Contacts`.
  | Justification | Improvement |
  | ------------------------------------------------------- | ------------------- |
  | Avoid large and complex components | Reuse code, organize complexity into smaller parts|

- Remove the warning `Each child in a list should have a unique "key" prop.` by adding a unique key to each iterated component in the `map` method within `Contacts` and `Contact`.
  | Justification | Improvement |
  | ------------------------------------------------------- | ------------------- |
  | Remove warnings | Helps React optimize rendering|

Most important points in the exercise:

- Fix syntax error.
- Create a small mock data structure.
- Create truncate and findByID functions (as arrow functions).
- Use more descriptive function names.
- Simplify the Contacts component and create a reusable Contact component.
- Avoid redundancy in component names.
- Organize components and functions into folders.
- Fix warnings related to unique key props.

---

## Exercise 2 - State

1. Propose how this information could be stored in the local state. For example, if using Redux, define the reducers, or if using MobX, define the stores.
2. List any issues or key points regarding the chosen approach.
3. Attach a JSON representation of how the data would be stored based on point 1.

---

## Exercise 2 Response

Issues or key points (Redux):

- Only use global state when necessary to avoid unnecessary complexity. State management patterns can be difficult sometimes.
- Redux is more robust for large applications, especially for control and performance optimization.
- For small applications, the React Context API is a better choice as it is simpler and does not impact performance in small-scale use.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/tu-usuario/amalgama-practic.git

2. Navigate to the project directory:

   ```bash
   cd amalgama-practic

3. Install dependencies:

   ```bash
   npm install

## Run
To start the application in development mode, run:

   ```bash
   npm start
   ```
This will open the application in your default browser at http://localhost:3000.

## Contributions

Contributions are welcome. If you want to improve the project, please create a fork and submit a pull request.

## Contact

For questions or suggestions, you can contact me at [ezioeg@gmail.com].
