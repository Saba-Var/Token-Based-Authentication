/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_API_BASE_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
