import React from 'react'

const FilterButton = () => {
  return (
    <div>
      <form className="flex w-full  items-center max-w-sm mx-auto">
        <label for="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
            placeholder="Search Jobs ..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium bg-[#00315B] rounded-lg border "
        >
          <span className="text-white">Search</span>
        </button>
      </form>
    </div>
  );
}

export default FilterButton