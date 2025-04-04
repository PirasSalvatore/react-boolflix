import { BrowserRouter, Routes, Route } from "react-router-dom"

import BoolflixMovieContext from "./contex/BoolflixMovieContext"
import DefaultLayout from "./Layout/DefaultLayout"

function App() {

  return (
    <>
      <BoolflixMovieContext>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={Home} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BoolflixMovieContext>
    </>
  )
}

export default App
