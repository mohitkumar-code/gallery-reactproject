import React from 'react'

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-3 mt-10">
  <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition active:scale-95">
    Previous
  </button>

  <button className="w-10 h-10 rounded-lg bg-blue-600 text-white active:scale-95">
    1
  </button>

  <button className="w-10 h-10 rounded-lg bg-white border hover:bg-gray-100 active:scale-95">
    2
  </button>

  <button className="w-10 h-10 rounded-lg bg-white border hover:bg-gray-100 active:scale-95">
    3
  </button>

  <button className="w-10 h-10 rounded-lg bg-white border hover:bg-gray-100 active:scale-95">
    4
  </button>

  <button className="w-10 h-10 rounded-lg bg-white border hover:bg-gray-100 active:scale-95">
    5
  </button>

  <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition active:scale-95 active: bg-white-500">
    Next
  </button>
</div>
  )
}

export default Pagination