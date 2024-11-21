import React from 'react'
import Select from 'react-select'

const MultiSelect = ({ response, setFilteredData }) => {
  const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    {
      value: 'highest_lowercase_alphabet',
      label: 'Highest Lowercase Alphabet',
    },
  ]

  const handleChange = (selectedOptions) => {
    if (!selectedOptions) {
      setFilteredData(null)
      return
    }

    const selectedKeys = selectedOptions.map((opt) => opt.value)
    const filtered = selectedKeys.reduce((acc, key) => {
      acc[key] = response[key]
      return acc
    }, {})

    setFilteredData(filtered)
  }

  return (
    <div className="mt-4">
      <Select
        isMulti
        options={options}
        onChange={handleChange}
        placeholder="Select fields to display..."
        className="text-black"
      />
    </div>
  )
}

export default MultiSelect
