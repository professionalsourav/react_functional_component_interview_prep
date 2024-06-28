import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
const LazyApp = React.lazy(() => import("./App.jsx"));
import './index.css'
import Loading from './component/Loading.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading/>}>
     <LazyApp/>
    </React.Suspense>
   
  </React.StrictMode>
);
