import React from 'react'

const Settings = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Paramètres</h2>
            <div className="w-full max-w-xs">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Nom :
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email :
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Mot de passe :
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Enregistrer
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Settings;