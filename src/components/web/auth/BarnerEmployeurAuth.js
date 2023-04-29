import React from 'react';

const BarnerEmployeurAuth = () => {
    var bgImg =  "https://images.pexels.com/photos/5668878/pexels-photo-5668878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    
    //style={{backgroundImage:`url('${bgImg}')`}}
    return (
        <div class="page-banner-area item-bg-two h-[200px]" style={{backgroundImage:`url('${bgImg}')`}} >
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            <h2>Connexion Employeur</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarnerEmployeurAuth;