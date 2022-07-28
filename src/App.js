import logo from './logo.svg';
import './App.css';
import './styleapp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ErrorBoundary } from './components/ErrorBoundary';

import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import React, { Suspense, lazy } from 'react';

import { NetworkErrorBoundary } from 'rest-hooks';

const Contact = lazy(() => import('./components/Contact'));
const Home = lazy(() => import('./components/Home'));
const Work = lazy(() => import('./components/Work'));
const Blog = lazy(() => import('./components/Blog'));

// lazy() lets you load react components lazily through code splitting 
// without help from any additional libraries. 
// Lazy loading is the technique of rendering only-needed or critical user interface
// items first, then quietly unrolling the non-critical items later.

function App() {
  return (
    <div className="App">
   

   <ErrorBoundary>
  < Router>
  <Suspense fallback={<div className='center'>
  <div class="spinner-border text-danger" role="status">
</div>
<br/>
  &nbsp;Loding...
</div>

}>

{/*
Suspense is a component required by the lazy function 
basically used to wrap lazy components.
Multiple lazy components can be wrapped with the suspense component.
It takes a fallback property 
that accepts the react elements you want to render as the lazy component is being loaded.
*/}

  <Routes>             
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
  </Routes>
  </Suspense>
  </Router>
  </ErrorBoundary>


    </div>
  );
}

export default App;
