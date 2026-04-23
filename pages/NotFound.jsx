import React from 'react'

const NotFound = () => {
    return (
        <>
            <main className='flex-grow'>
                <div className="text-center py-20">
                    <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600">Sorry, I could not find the page you requested.</p>
                </div>
            </main>
        </>
    )
}

export default NotFound