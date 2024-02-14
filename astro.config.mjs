import { defineConfig } from 'astro/config';

// localhost server port
const SERVER_PORT = 3000;
// url for local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// url for live website
const LIVE_URL = `https://m311ow.github.io`;
// this is the astro command that npm script runs
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');

let BASE_URL = LOCALHOST_URL;
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL
});
