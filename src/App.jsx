import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CustomBoolflixContextProvider } from "./context/BoolflixContext"
import DefaultLayout from "./Layout/DefaultLayout"
import Home from "./Pages/Home"

function App() {

  return (
    <>
      <CustomBoolflixContextProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={Home} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CustomBoolflixContextProvider>
    </>
  )
}

export default App
