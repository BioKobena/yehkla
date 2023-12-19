// import { Navigate, useRoutes } from 'react-router-dom';
// // ----------------------------------------------------------------------
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Products from './components/pages/Products';
// import Page404 from './components/pages/Page404';
// import Login from './components/pages/Login';

// export default function Router() {
//   const routes = useRoutes([
//     {
//       path: 'login',
//       element: <Login />,
//       children: [
//         { element: <Navigate to="/app/home" />, index: true },
//         { path: 'home', element: <Home /> },
//         { path: 'about', element: <About /> },
//         { path: 'services', element: <Products /> },
//         { path: 'contact', element: <Contact /> },
//         { path: '*', element: <Navigate to="/404" /> },
//       ],
//     },
//     // {
//     //   path: 'home',
//     //   element: <Home />,
//     // },
//     // {
//     //   element: <Home />,
//     //   children: [
//     //     { element: <Navigate to="/dashboard/home" />, index: true },
//     //     { path: '404', element: <Page404 /> },
//     //     { path: '*', element: <Navigate to="/404" /> },
//     //   ],
//     // },
//     // {
//     //   path: '*',
//     //   element: <Navigate to="/404" replace />,
//     // },
//   ]);

//   return routes;
// }
