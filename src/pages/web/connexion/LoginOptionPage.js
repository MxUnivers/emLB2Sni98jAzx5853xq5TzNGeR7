import React from 'react'
import { routing } from '../../../utlis/routing'

const LoginOptionPage = () => {
    var  bgCandidat = "";
    var bgEmployeur="";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Choisir votre option de connexion
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              create a new account
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <img src={`${bgCandidat}`} alt="Candidate" className="h-32 mx-auto my-4" />
            <h3 className="text-2xl font-medium text-gray-900 mb-4">I am a Candidate</h3>
            <a href={`/${routing.connexionCandidat}`} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
              Login
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <img src={`${bgEmployeur}`} alt="Employer" className="h-32 mx-auto my-4" />
            <h3 className="text-2xl font-medium text-gray-900 mb-4">I am an Employer</h3>
            <a href={`/${routing.connexionEmployeur}`} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginOptionPage
