import React, { useState } from 'react'
import InputForm from './components/InputForm'
import MultiSelect from './components/MultiSelect'
import ResponseViewer from './components/ResponseViewer'

const App = () => {
  const [response, setResponse] = useState(null)
  const [filteredData, setFilteredData] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-6">ABCD123</h1>{' '}
      {/* Replace with your roll number */}
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-md">
        <InputForm setResponse={setResponse} />
        {response && (
          <>
            <MultiSelect
              response={response}
              setFilteredData={setFilteredData}
            />
            <ResponseViewer filteredData={filteredData} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
