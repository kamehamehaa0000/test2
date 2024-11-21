import React from 'react'

const ResponseViewer = ({ filteredData }) => {
  if (!filteredData) return null

  return (
    <div className="mt-6 p-4 bg-gray-50 border rounded-md">
      <h3 className="text-lg font-semibold mb-2">Filtered Response:</h3>
      <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
        {JSON.stringify(filteredData, null, 2)}
      </pre>
    </div>
  )
}

export default ResponseViewer
