# Description

This is the repository for the mobile devices purchase application. This application has been developed using React and Create React App.
## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Creates an optimized production build of the app in the build folder.\
The code is minified and the filenames include the hashes. Your app is ready to be deployed.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run lint`

Runs the ESLint linter to check that the code follows the style rules defined in the `.eslintrc.json` file.

### `npm run coverage`

To run tests and generate code coverage.  The tool generates a report that shows how much of the code is covered by the tests.


## File Structure

The file structure of the application is as follows:\
Components are in the `src/components/` folder and pages are in the `src/pages/` folder. Redux is in `src/redux` and the mock to test it in
`src/mocks`.

## Code coverage

In this project the actual coverage is:

File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------|---------|----------|---------|---------|-------------------
All files                       |   91.17 |    89.28 |   88.23 |   92.06 |                   
 src                            |   33.33 |      100 |     100 |   33.33 |                   
  App.jsx                       |     100 |      100 |     100 |     100 |                   
  index.jsx                     |       0 |      100 |     100 |       0 | 9-10              
 src/assets                     |     100 |      100 |     100 |     100 |                   
  logo.png                      |     100 |      100 |     100 |     100 |                   
 src/components/Header          |     100 |      100 |     100 |     100 |                   
  Header.jsx                    |     100 |      100 |     100 |     100 |                   
 src/components/ProductDetail   |     100 |       90 |     100 |     100 |                   
  ProductDetail.jsx             |     100 |       90 |     100 |     100 | 12-13,92          
 src/components/ProductListItem |     100 |      100 |     100 |     100 |                   
  ProductListItem.jsx           |     100 |      100 |     100 |     100 |                   
 src/components/Search          |     100 |      100 |     100 |     100 |                   
  Search.jsx                    |     100 |      100 |     100 |     100 |                   
 src/components/Select          |   66.66 |        0 |      50 |      80 |                   
  Select.jsx                    |   66.66 |        0 |      50 |      80 | 8                 
 src/mocks                      |     100 |      100 |     100 |     100 |                   
  handlers.js                   |     100 |      100 |     100 |     100 |                   
  server.js                     |     100 |      100 |     100 |     100 |                   
 src/pages                      |   86.66 |       90 |      75 |   84.61 |                   
  NotFound.jsx                  |     100 |      100 |     100 |     100 |                   
  ProductDetailPage.jsx         |      75 |    85.71 |      50 |      75 | 24                
  ProductListPage.jsx           |      90 |     92.3 |      80 |    87.5 | 41                
 src/redux                      |     100 |      100 |     100 |     100 |                   
  api.js                        |     100 |      100 |     100 |     100 |                   
  index.js                      |     100 |      100 |     100 |     100 |                   
  store.js                      |     100 |      100 |     100 |     100 |                   
 src/utils                      |     100 |      100 |     100 |     100 |                   
  utils-test.jsx                |     100 |      100 |     100 |     100 |                   

Test Suites: 5 passed, 5 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        2.12 s



