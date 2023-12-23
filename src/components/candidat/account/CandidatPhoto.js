import React, { useEffect, useState } from 'react'
import useFetchCandidat, { CandidatEditPhoto } from '../../../action/api/candidat/CandidatAction';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { MdOutlineAddAPhoto } from "react-icons/md";
import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';



const CandidatPhoto = () => {


    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const { isLoading, error, candidat } = useFetchCandidat(idCandidat);

    const [coverPicture, setcoverPicture] = useState();
    useEffect(() => {
        if (candidat && candidat.coverPicture) {
            setcoverPicture(candidat.coverPicture);
        }
    }, [candidat]);



    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const err = useSelector((state) => state.reducer.error);



    const [LoadingPhoto, setLoadingPhoto] = useState(false);
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader(); fileReader.readAsDataURL(file); fileReader.onload = () => { resolve(fileReader.result); };
            fileReader.onerror = (error) => { reject(error); };
        });
    }
    function uploadSinglePhoto(base64) {
        setLoadingPhoto(true);
        axios.post(`${baseurl.url}/uploadImage`, { image: base64 })
            .then(async (res) => {
                setcoverPicture(res.data);
                await axios
                    .put(`${baseurl.url}/api/v1/candidat/edit/${idCandidat}`,
                        {
                            "coverPicture": res.data
                        }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                        }
                    })
                    .then((response) => {
                        toast.success(" Photo Mis à jour");
                    })
                    .catch((error) => {
                        toast.error("Photo non modifié !")
                    });

            })
            .then(() => setLoadingPhoto(false))
            .catch(() => {
                console.log("Photo ,on uploder");
                toast.error("Photo mis a jour  !")
                setLoadingPhoto(false);
            });
    }
    const HandleFileInputChangePhoto = async (event) => {
        const files = event.target.files;
        console.log(files.length);
        if (files.length === 1) {
            const base64 = await convertBase64(files[0]);
            uploadSinglePhoto(base64); return;
        }
        const base64s = [];
        for (var i = 0; i < files.length; i++) { var base = await convertBase64(files[i]); base64s.push(base); }
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
                    candidat ?
                        (<img
                            class="hD0sTTDgbxakubcHVW2X IxVXJAn2ZWxXpcIHvPnh nRgpYtDXPa8Sk01AYTQr mveJTCIb2WII7J4sY22F tkZo48dB4RhnHSlDXzoe RO6axy6tLw1YpZ9T54F_ _5qVeTKgUlNIvLfYDjop"
                            src={coverPicture} alt="Jese picture" />
                        ) :
                        null)
                }
                <div>
                    {isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                        : error ? (<div>...</div>)
                            :
                            candidat ?
                                (<h3
                                    class=" font-semibold Z3N7I2IDDsoXK6xJ1cSW q1oXbofRCOhVhOSB8tiU IOPhczRgtphv6NdNBDjj __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE text-lg font-medium">
                                    {candidat.firstname} {candidat.lastname}
                                </h3>
                                ) : null

                    }

                    {isLoading ? (<div class="animate-pulse w-36 h-8 rounded-sm" />)
                        : error ? (<div>...</div>)
                            :
                            candidat ?
                                (<><div
                                    class="hD0sTTDgbxakubcHVW2X d3C8uAdJKNl1jzfE9ynq _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                                    {candidat.title_post}
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

export default CandidatPhoto;
