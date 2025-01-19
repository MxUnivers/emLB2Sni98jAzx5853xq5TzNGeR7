import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const partenaires = [
  { id: 4, logo: "https://www.uvci.edu.ci/portail/assets/images/logo.png", alt: "UVCI" },
  { id: 1, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_HhV5HRZFvuhXzoMHYs7RkYSlCELG-_6PQ&s", alt: "OIPDS" },
  { id: 2, logo: "https://www.financialafrik.com/wp-content/uploads/2024/11/logo_cgeci.png", alt: "CGECI" },
  { id: 3, logo: "https://clubdsi-bf.bf/wp-content/uploads/2023/11/DSI_Club_logo-removebg-preview.png", alt: "ClubDSI" },
  { id: 4, logo: "https://www.agenceemploijeunes.ci/site/storage/app/uploads/public/62c/e9b/f85/62ce9bf853aaa025412116.png", alt: "Agence Emplois Jeunes" },

  
  { id: 4, logo: "https://static.wixstatic.com/media/5f2bcb_a71eed8476b042aca16fb70eced14bff~mv2.png/v1/fill/w_151,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HumanAI_Logo_edited.png", alt: "Partenaire 4" },
  { id: 1, logo: "https://static.wixstatic.com/media/c0e66e_97d2ca957a5043e19eabd029b4000692~mv2.jpg/v1/crop/x_237,y_71,w_877,h_1138/fill/w_70,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO_MIA_OUJDA_-_MAISON_DE_L_INTELLIGENCE_ARTIFICIELLE_OUJDA.jpg", alt: "Partenaire 1" },
  { id: 2, logo: "https://static.wixstatic.com/media/c0e66e_7e08feaa83214e02839d52625880d019~mv2.png/v1/fill/w_76,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UMPO%20Logo.png", alt: "Partenaire 2" },
  { id: 3, logo: "https://static.wixstatic.com/media/c0e66e_526883dec47246f79ed12f1b182fe711~mv2.png/v1/crop/x_0,y_471,w_5000,h_1871/fill/w_196,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OIASH-01.png", alt: "Partenaire 3" },
  { id: 4, logo: "https://static.wixstatic.com/media/b05465_84a6fd091d36425fad00e66d72e72193~mv2.jpg/v1/crop/x_0,y_481,w_1536,h_575/fill/w_196,h_73,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-coniia-1536x1536.jpg", alt: "Partenaire 4" },
  
];

const PartenairesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const pageCount = Math.ceil(partenaires.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;

  const currentItems = partenaires.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Nos Partenaires</h2>
        <div className="flex justify-center flex-wrap gap-8 mt-8">
          {currentItems.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.alt}
              className="h-16"
            />
          ))}
        </div>

        {/* Pagination */}
        <ReactPaginate
          previousLabel={"← Précédent"}
          nextLabel={"Suivant →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center mt-8 space-x-4"}
          previousLinkClassName={
            "px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          }
          nextLinkClassName={
            "px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeClassName={"font-bold text-indigo-600"}
          pageLinkClassName={
            "px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
          }
        />
      </div>
    </section>
  );
};

export default PartenairesSection;
