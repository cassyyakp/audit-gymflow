import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://3e4af831654bdc91eb4aec8300e068c1@o4511704551784448.ingest.de.sentry.io/4511717152260176",
  integrations: [
    Sentry.browserTracingIntegration(),
  ],
  tracesSampleRate: 1.0,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if ('requestIdleCallback' in window) {
  requestIdleCallback(initSentry)
} else {
  setTimeout(initSentry, 1000)
}

async function initSentry() {
  const Sentry = await import('@sentry/react')
  Sentry.init({
    dsn: "https://3e4af831654bdc91eb4aec8300e068c1@o4511704551784448.ingest.de.sentry.io/4511717152260176",
    integrations: [
      Sentry.browserTracingIntegration(),
    ],
    tracesSampleRate: 0.2, 
  });
}