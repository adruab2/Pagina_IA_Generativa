import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AppProvider } from '@/contexts/AppContext';
import { AuthProvider } from '@/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';


const router = createRouter({ routeTree });

const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <AuthProvider>
          <AppProvider>
            <Suspense fallback={<LoadingSpinner />}>
              <RouterProvider router={router} />
            </Suspense>
          </AppProvider>
        </AuthProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}
