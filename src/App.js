import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import Categories from './component/categories/Categories';
import store from './redux/store';
import Navbar from './component/Navbar';
import AddBook from './component/AddBook';
import BookList from './component/BookList';
import Progress from './component/Progress';

const routes = [
  {
    path: '/',
    name: 'Books',
    element: <BookList />,
  },
  {
    path: '/categories',
    name: 'categories',
    element: <Categories />,
  },
];

const App = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar title="Bookstore CMS" routes={routes} />
      <div className="container">
        <ConnectedBookList />
        <AddBook />
        <Progress />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </div>
    </Router>
  </Provider>
);

// Connect the BookList component to the Redux store
const mapStateToProps = (state) => ({
  books: state.books,
});

const ConnectedBookList = connect(mapStateToProps)(BookList);

export default App;
