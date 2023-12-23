import axios from "axios";
import { baseurl } from "../../../utlis/url/baseurl";
import { FETCH_SEND_COMMENTS, FETCH_SEND_POSTS, REQUEST_FAILURE, REQUEST_SUCCESS, SEND_REQUEST } from "../../../app/actions";
import confetti from 'canvas-confetti';
import { useEffect, useState } from "react";
import { routing } from "../../../utlis/routing";




// Créer un Candidat
// Fonction pour ajouter des administrateurs à l'application
export const AddComment = (idCandidat, idBlog, areaPost, title, content, toast) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        try {
            const response = await axios.post(`${baseurl.url}/api/v1/comment/post/${idCandidat}/blog/${idBlog}`, {
                areaPost,
                title,
                content,
            });

            dispatch({ type: REQUEST_SUCCESS, payload: response.data });
            confetti();
            toast.success('Votre commentaire a été ajouté avec succès');
            setTimeout(() => {
                window.location.reload();
            }, 2500);
        } catch (error) {
            dispatch({ type: REQUEST_FAILURE, payload: error.message });
            toast.error('Erreur lors de l\'ajout du commentaire');
        }
    };
};



export default function CommentAllPost(idBlog) {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        try {
          const response = await axios.get(`${baseurl.url}/api/v1/comment/blog/${idBlog}/comments`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
          });
  
          setComments(response.data.data);
          setError(null);
        } catch (error) {
          console.error(error);
          setError(error);
        }
  
        setIsLoading(false);
      }
  
      fetchData();
    }, [idBlog]); // Ajoutez idBlog comme dépendance pour déclencher la requête API lorsque son contenu change
  
    return { isLoading, error, comments };
  }


  export const fetchDataComments = async (idBlog)=> {
    return async (dispatch) => {
      dispatch({ type: FETCH_SEND_COMMENTS })
      await axios.get(`${baseurl.url}/api/v1/comment/blog/${idBlog}/comments`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
        }
      }).then((response)=>{
        dispatch({ type: FETCH_SEND_COMMENTS,payload:response.data.data });
      }).catch ((error)=>{
        console.log(error.message);
        dispatch({ type: FETCH_SEND_COMMENTS })
      })
    }
  } 