import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CustomBoolflixMovieContextProvider } from "./context/BoolflixMovieContext"
import DefaultLayout from "./Layout/DefaultLayout"
import Home from "./Pages/Home"

function App() {

  return (
    <>
      <CustomBoolflixMovieContextProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={Home} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CustomBoolflixMovieContextProvider>
    </>
  )
}

export default App
