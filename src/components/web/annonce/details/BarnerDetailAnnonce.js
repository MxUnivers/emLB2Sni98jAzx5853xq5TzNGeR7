import React from 'react'

const BarnerDetailAnnonce = ({data}) => {
  var bgImg =  "https://images.pexels.com/photos/3182752/pexels-photo-3182752.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

    return (
        <div class="page-banner-area item-bg-two h[400px]" style={{backgroundImage:`url('${bgImg}')`}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-banner-content">
                            <h2>{data}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarnerDetailAnnonce;