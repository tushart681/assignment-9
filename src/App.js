import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main/Main';
import Home from './components/home/Home';
import Topics from './components/topics/Topics';
import Statics from './components/statics/Statics';
import Blogs from './components/blogs/Blogs';
import Header from './components/header/Header';
import Quiz from './components/quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/topics', element: <Topics></Topics>
        },
        {
          path:'/:name/:id',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        },
        {
          path:'/statics', element: <Statics></Statics>
        },
        {
          path:'/blogs', element: <Blogs></Blogs>
        },
      ]
    },
    {
      path:'/',
      element:<Header></Header>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
