/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ENV: 'dev' | 'prod';
  VITE_API_BASE_URL: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
