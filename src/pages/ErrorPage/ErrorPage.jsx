import React from 'react';
import { Link, useRouteError } from 'react-router';
import Navbar from '../../components/Header/Navbar';

const ErrorPage = () => {

    const error = useRouteError();
    return (<>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
            <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-xl text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-md text-gray-500 mb-6">
                <i>{error?.statusText || error?.message}</i>
            </p>
            <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Go to Home
            </Link>
        </div>
    </>
        
    );
};

export default ErrorPage;
