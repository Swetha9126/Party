import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Party from './party'
import JsonExample from './jsonexample'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Party/>
  </StrictMode>
)
