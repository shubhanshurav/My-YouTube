import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
 
// if the path is "/" than Body component rendered  after the the Head Component->[RouterProvider] 
// and in Childeren of Body if path is "/" than rendered MainContainer 
const appRouter = createBrowserRouter([
  {
   path: "/",
   element: <Body />,
    children:[
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <div className='bg-black text-white'>
          <Head />
          {/* <Body /> */}
          <RouterProvider router = {appRouter} />
      </div>
    </Provider>
  );
}

export default App;
