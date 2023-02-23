import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: "/system-inventary/"    //al subirse al repositorio de github se tiene que habilitar para que no falle
})

//VIDEO DE EXPLICACION DE DEPLOY A GITHUB
//https://www.youtube.com/watch?v=igCO5i4NnfU