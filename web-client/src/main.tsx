import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithNavigate from './auth0-provider';
import './index.css';
import { Router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <Router />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
