import { useState } from 'react'

function App() {


  return (
    <div className="flex flex-col bg-blue-300 justify-center items-center p-4">
      <h1 className="text-white font-bold text-xl">This is my edited template.</h1>
      <p className="text-white font-bold text-xl">It includes Tailwind, and React-Router pre-configured.</p>
      <p
      className="text-white font-bold text-xl"
      >Inspired by: <a className="text-blue-500 underline" href="https://avelaga.medium.com/how-to-automate-the-initialization-of-new-react-projects-d7e6f740077b">this link</a></p>
    </div>
  )
}

export default App
