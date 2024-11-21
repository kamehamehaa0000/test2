import React, { useState } from 'react'
import axios from 'axios'

const InputForm = ({ setResponse }) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const jsonInput = JSON.parse(input)
      console.log(jsonInput)
      const response = await axios.post(
        'https://test1-swx6.onrender.com/bfhl',
        jsonInput
      )
      setResponse(response.data)
      setError('')
    } catch (err) {
      setError('Invalid JSON or API Error.')
      setResponse(null)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter JSON input..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  )
}

export default InputForm
