
import React from 'react';


const AnnonceSearch = () => {

    var bgImg = "https://ouch-cdn2.icons8.com/eAbn_g4JF-BA0gfrr_3_Qsj1aJ57Ok58gyaww2z2-dM/rs:fit:341:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91aS1lbGVt/Lzk4Mi8xZmRmZjVl/Yi0yODBiLTQ5N2Ut/YmNlNi1jYmYzZjg5/ZTdmNmEucG5n.png";


    return (
        <div class="page-banner-area item-bg-two" style={{backgroundImage:`url('${bgImg}')`}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            <h2>Recherche des annonces ('recherche...')</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnonceSearch;