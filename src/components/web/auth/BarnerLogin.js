import React from 'react';

const BarnerLogin = () => {
    var bgImg =  "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
//style={{backgroundImage:`url('${bgImg}')`}}
    return (
        <div class="page-banner-area item-bg-two h-[500px]" style={{backgroundImage:`url('${bgImg}')`}} >
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            <h2>Connexion</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarnerLogin;