import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-b71r4yk02ac1f4bc.us.auth0.com"
    clientId="FF9Y2f51CiIvcFlmbQxWe7r6c5s3CXXC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
          <App />
     </Auth0Provider>
      
  </React.StrictMode>
);

reportWebVitals();
