import { ThemeProvider } from './components/ThemeProvider';
import AppRoutes from './routes/AppRoute'
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <ThemeProvider>
        <AppRoutes />
        <Toaster position="top-center" reverseOrder={false} />
      </ThemeProvider>
    </>
  )
}

export default App
