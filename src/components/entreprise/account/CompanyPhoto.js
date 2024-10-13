import React, { useEffect, useState } from 'react'
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { MdOutlineAddAPhoto } from "react-icons/md";
import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchEntreprise } from '../../../action/api/employeur/EmployeurAction';
import { handleImageUploadCloudOnly } from '../../../action/upload/UploadFileCloud';



const CompanyPhoto = () => {


    var idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);

    const { isLoading, error, entreprise } = useFetchEntreprise(idEntreprise);

    const [coverPicture, setcoverPicture] = useState();
    useEffect(() => {
        if (entreprise && entreprise.logo) {
            setcoverPicture(entreprise.logo);
        }
    }, [entreprise]);



    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const err = useSelector((state) => state.reducer.error);



    const [LoadingPhoto, setLoadingPhoto] = useState(false);
    
    const HandleFileInputChangePhoto = async (event) => {
        const files = event.target.files[0];
        console.log(files.length);
        setLoadingPhoto(true)
        const url = await handleImageUploadCloudOnly(files, toast);
        if (url) {
            setcoverPicture(url);
            await axios
                .put(`${baseurl.url}/api/v1/entreprise/edit/${idEntreprise}`,
                    {
                        "logo": url
                    }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                })
                .then((response) => {
                    toast.success(" Photo Mis à jour");
                    setcoverPicture(url);
                })
                .catch((error) => {
                    toast.error("Photo non modifié !")
                });

            // setcoverPicture(url);
            setLoadingPhoto(false)
            // Tu peux maintenant utiliser l'URL, par exemple l'envoyer dans une requête pour sauvegarder l'image dans ta base de données
        }
        setLoadingPhoto(false)
    };






    return (
        <div
            class="_Ybd3WwuTVljUT4vEaM3 mngKhi_Rv06PF57lblDI mveJTCIb2WII7J4sY22F _wYiJGbRZyFZeCc8y7Sf _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi hD0sTTDgbxakubcHVW2X">
            <div
                class="Q_jg_EPdNf9eDMn1mLI2 rvdRhGyExrNYTA6euxsF xu6Xcz2CnxX04u4eQAne _Zd6CFkEZSNEHC9TBkyE SQf297smyJVNzzOO3iQL LvH1cgobxEYMRPVAp8WW fxDO_pTRQLZKehDay_Tf">

                {isLoading ? (
                    <p>en cours ...</p>
                ) : error ? (
                    <p>{error.message}</p>
                ) : (
                    entreprise && entreprise.logo ?
                        (<img
                            class="hD0sTTDgbxakubcHVW2X IxVXJAn2ZWxXpcIHvPnh nRgpYtDXPa8Sk01AYTQr mveJTCIb2WII7J4sY22F tkZo48dB4RhnHSlDXzoe RO6axy6tLw1YpZ9T54F_ _5qVeTKgUlNIvLfYDjop"
                            src={coverPicture} alt="Jese picture" />
                        ) :
                        null
                        )
                }
                <div>
                    {isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                        : error ? (<div>...</div>)
                            :
                            entreprise ?
                                (<h3
                                    class=" font-semibold Z3N7I2IDDsoXK6xJ1cSW q1oXbofRCOhVhOSB8tiU IOPhczRgtphv6NdNBDjj __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE text-lg font-medium">
                                    {entreprise.firstname} {entreprise.lastname}
                                </h3>
                                ) : null

                    }

                    {isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                        : error ? (<div>...</div>)
                            :
                            entreprise ?
                                (<><div
                                    class="hD0sTTDgbxakubcHVW2X d3C8uAdJKNl1jzfE9ynq _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                    {entreprise.title_post}
                                </div>
                                    {
                                        LoadingPhoto ?
                                            <div type="button" class="btn bg-blue-500 animate-spin h-6 w-6 ..." disabled>
                                            </div> :
                                            <>
                                                <input onChange={HandleFileInputChangePhoto} id="file" name="file" type="file" accept=".JPEG,.PNG,.JPG" class="sr-only" />
                                                <label for="file"><div
                                                    class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2 b9aD6g2qw84oyZNsMO8j _Cj_M6jt2eLjDgkBBNgI c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe ijrOHNoSVGATsWYKl4Id y6GKdvUrd7vp_pxsFb57 g40_g3BQzYCOX5eZADgY mveJTCIb2WII7J4sY22F YoPCmQ0E_V5W0GGmSIdm _dylIDxYTN3qgvD4U597 KmgKPWh7pHX4ztLneO0T d8_fVOcgDmbt7UdpfeLK WuKugQzwTT7o1wwBck2R _ZsTMX_gz275093orLWM">
                                                    <MdOutlineAddAPhoto class="h-8 w-8" />
                                                </div>
                                                </label>
                                            </>
                                    }
                                </>
                                ) : null

                    }


                </div>
            </div>
        </div>
    )
}

export default CompanyPhoto;
