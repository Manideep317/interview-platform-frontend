import React from 'react'

export function Navbar() {


    return (
        <>
            <div className="flex py-5 px-6 justify-between shadow-lg">
                <div className="text-3xl font-semibold px-2 py-2">Eduhub</div>
                <div className="flex w-[250px] justify-between px-2 py-1">
                    <div className="bg-[black] font-medium rounded text-white px-4 py-2">Login</div>
                    <div className="bg-[black] font-medium rounded text-white px-4 py-2">Logout</div>
                </div>
            </div>
        </>
    )
}
