import React , {useState , useEffect} from 'react'
import { localvalue } from '../../../../utlis/storage/localvalue'
import { AnnoncesOfEntreprisesId } from '../../../../action/api/annonces/AnnoncesAction';



const Dashboard = () => {
  var idAdmin = localStorage.getItem(localvalue.emloyeur.idEmployeur);

  const [annonces, setannonces] = useState([]);
  const [annonces2, setannonces2] = useState([]);


  useEffect(() => {
    AnnoncesOfEntreprisesId(idAdmin, setannonces, setannonces2);
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tableau de bord</h1>

      <div className="grid grid-cols-2 gap-6">
        {
          annonces.map((item)=>{
            return(
        <div className="bg-emerald-900 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-white">{item.titre}</h2>
          <p class="text-gray-200">{item.candidats.length}</p>
        </div>
        )
          })
        }
        {/* Ajoutez d'autres composants pour les statistiques supplémentaires */}
      </div>
    </div>
  )
}

export default Dashboard