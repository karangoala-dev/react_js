import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About.jsx';
import Error from './Pages/Error.jsx';
import Body from './components/Body.jsx';
import Cart from './Pages/Cart.jsx';
import RestaurantMenu from './Pages/RestaurantMenu.jsx';
import { lazy, Suspense } from 'react';
import Loading from './Pages/Loading.jsx';

//Lazy loading
//Chunking
//Dynamic Bundling
//Code splitting
//On demand loading
//Dynamic import
//this line is used to implement the above concept
const Instamart = lazy(() => import('./components/Instamart.jsx'));


//define the app router config using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu/>
      },
      {
        path : '/instamart',
        element: <Suspense fallback={<Loading/>}> <Instamart/> </Suspense>
      }
    ],
    errorElement: <Error/>
  }
])
//use router provider to provide the config to the application


//below 2 lines for rendering the root
const root = createRoot(document.getElementById("root"));
// root.render(<App/>);
root.render(<RouterProvider router={appRouter}/>)
