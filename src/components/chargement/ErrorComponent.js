import React from 'react'

const ErrorComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Erreur de chargement</h1>
            <p className="text-gray-600 mb-8">Les éléments n{"'"}ont pas pu être chargées. Veillez rechercher la page</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => { window.location.reload() }}>Réessayer</button>
        </div>
    )
}
export default ErrorComponent;

