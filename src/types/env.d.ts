/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ENV: 'dev' | 'prod';
  VITE_API_BASE_URL: string;
  VITE_USE_MOCK_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
