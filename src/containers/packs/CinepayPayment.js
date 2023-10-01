import { useEffect } from "react";
import { valueLocal } from "../../utlis/storage/localvalue";

const CinepayPayment = () => {
    

    return (
        <div>
            <h1>SDK SEAMLESS</h1>
            <button class="btn bg-green-600 text-white" onClick='checkout()'></button>
        </div>
    )

}

export default CinepayPayment;
