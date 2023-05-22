import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tableau de bord</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Statistique 1</h2>
          <p>Contenu de la statistique 1</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Statistique 2</h2>
          <p>Contenu de la statistique 2</p>
        </div>

        {/* Ajoutez d'autres composants pour les statistiques supplémentaires */}
      </div>
    </div>
  )
}

export default Dashboard