'use client'

import { useRouter } from "next/navigation"
import React, { FormEvent, useState } from 'react'

function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter()

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/search/${search}`)
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type='text'
                value={search}
                placeholder='Enter the Search term'
                onChange={(e) => setSearch(e.target.value)}
                className="border-2 mr-1 px-2"
            />
            <button type='submit' className="btn bg-blue-400 text-white font-semibold px-2 rounded-sm">
                Search
            </button>
        </form>
    )
}

export default Search