import { createRoot, Root } from 'react-dom/client';
import { App } from "./App";

console.log('process.env.NODE_ENV', process.env.PORT);

const root: Root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);