import React from 'react';

const BarnerContact = () => {
    var bgImg = "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div class="page-banner-area item-bg-four" style={{backgroundImage:`url('${bgImg}')`}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BarnerContact;