import React, { useState, useEffect } from "react";
import { Skeleton } from "primereact/skeleton";
import BaseLayout from "../../layout/BaseLayout";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// icons
import SecurityIcon from "@mui/icons-material/Security";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  getForfaitById_allRight,
  getForfaitById_secure,
  getListeSuggestionForfait_allRight,
  getListeSuggestionForfait_secure,
  paiementForfaitPourTier_allRight,
  paiementForfaitPourTier_secure,
  paiementForfait_allRight,
  paiementForfait_secure,
} from "../../services/forfait/ForfaitRequest";
import {
  connexionAbonneByPassword,
  getAbonneInfo_allRight,
} from "../../services/abonne/AbonneRequest";
import { isAuthenticated } from "../../utils/AuthGuard";

const ForfaitDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [loadingPaiement, setLoadingPaiement] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forfait, setForfait] = useState(null);
  const [forfaitSuggestion, setForfaitSuggestion] = useState(null);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("ACHAT_POUR_SOI");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSouscription, setErrorSouscription] = useState("");

  const checkout = () => {
    setLoading(true);
    const customerNumber = sessionStorage.getItem("customer_number")
      ? sessionStorage.getItem("customer_number")
      : "";

    try {
      if (sessionStorage.getItem("token")) {
        paiementForfait_secure(params.id, typeTransaction, customerNumber)
          .then((res) => {
            setLoading(false);
            document.getElementById("modal-alert-checkout").click();
          })
          .catch((err) => {
            setLoading(false);
            setErrorMessage(err.response.data.donnee);
            if (err.response) {
              setErrorSouscription(err.response.data.donnee);
            } else {
              setErrorSouscription(
                "Une erreur s'est produite lors de la souscription"
              );
            }
            console.log(err);
          });
      } else {
        paiementForfait_allRight(params.id, typeTransaction, customerNumber)
          .then((res) => {
            setLoading(false);
            document.getElementById("modal-alert-checkout").click();
          })
          .catch((err) => {
            setLoading(false);
            setErrorMessage(err.response.data.donnee);
            if (err.response) {
              setErrorSouscription(err.response.data.donnee);
            } else {
              setErrorSouscription(
                "Une erreur s'est produite lors de la souscription"
              );
            }
            console.log(err);
          });
      }
    } catch (error) {
      console.log("catch error", error);
    }
  };

  const checkoutForOther = () => {
    document.getElementById("confirm-paiement-password").click();
  };

  const validerPaiementPourTier = () => {
    try {
      const beneficiaireNumber = sessionStorage.getItem("userPhoneNumber");

      const paiementDetail = {
        beneficiaire: beneficiaireNumber,
        id: params.id,
        password: password,
      };

      if (sessionStorage.getItem("token")) {
        paiementForfaitPourTier_secure(paiementDetail)
          .then((res) => {
            setLoadingPaiement(false);
            document.getElementById("confirm-paiement-password").click();
            document.getElementById("modal-alert-checkout").click();
          })
          .catch((err) => {
            setLoadingPaiement(false);
            if (err.response) {
              setErrorMessage(err.response.data.donnee);
              setErrorSouscription(err.response.data.donnee);
            } else {
              setErrorMessage(
                "Une erreur s'est produite lors de la souscription"
              );
              setErrorSouscription(
                "Une erreur s'est produite lors de la souscription"
              );
            }
            console.log(err);
          });
      } else {
        navigate("/forfaits/acheter");
      }
    } catch (error) {
      console.log("catch error", error);
    }
  };

  const validerPasswordAvantPaiement = () => {
    setErrorMessage("");
    setLoadingPaiement(true);

    const data = {
      id: 0,
      numero: "",
      password: password,
      username: user.numero,
    };

    connexionAbonneByPassword(data)
      .then((res) => {
        validerPaiementPourTier();
      })
      .catch((err) => {
        setLoadingPaiement(false);
        console.log(err);
        if (err.response) {
          setErrorMessage(err.response.data.donnee);
        } else {
          setErrorMessage("Une erreur s'est produite, essayer plus tard");
        }
      });
  };

  const backPage = () => {
    sessionStorage.removeItem("userPhoneNumber");
    navigate("/forfaits/acheter");
  };

  const getSuggestionDeForfait = (forfaitId, beneficiaire) => {
    const customerNumber = sessionStorage.getItem("customer_number")
      ? sessionStorage.getItem("customer_number")
      : "";
    if (sessionStorage.getItem("token")) {
      getListeSuggestionForfait_secure(
        "DETAIL_FORFAIT",
        forfaitId,
        beneficiaire,
        customerNumber
      )
        .then((res) => {
          setForfaitSuggestion(res.data.donnee);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getListeSuggestionForfait_allRight(
        "DETAIL_FORFAIT",
        forfaitId,
        beneficiaire,
        customerNumber
      )
        .then((res) => {
          setForfaitSuggestion(res.data.donnee);
          console.log("FROFAT", res.data.donnee);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getUserInformation = () => {
    const customerNumber = sessionStorage.getItem("customer_number")
      ? sessionStorage.getItem("customer_number")
      : "";
    getAbonneInfo_allRight(customerNumber)
      .then((res) => {
        setUser(res.data.donnee);
        if (res.data.donnee.promo) {
          setShowPromo(true);
        } else {
          setShowPromo(false);
        }
      })
      .catch((err) => {
        console.log("api error", err);
      });
  };

  const refreshForfait = (forfaitId) => {
    setForfait(null);
    const customerNumber = sessionStorage.getItem("customer_number")
      ? sessionStorage.getItem("customer_number")
      : "";
    if (sessionStorage.getItem("userPhoneNumber")) {
      getSuggestionDeForfait(
        forfaitId,
        sessionStorage.getItem("userPhoneNumber")
      );
    } else {
      getSuggestionDeForfait(forfaitId, "");
    }

    if (sessionStorage.getItem("token")) {
      getForfaitById_secure(forfaitId, customerNumber)
        .then((res) => {
          setForfait(res.data.donnee);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getForfaitById_allRight(forfaitId, customerNumber)
        .then((res) => {
          setForfait(res.data.donnee);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    try {
      getUserInformation();
      if (
        !isAuthenticated() &&
        sessionStorage.getItem("token") &&
        user &&
        user.motdepasseisactif
      ) {
        <>
          <Navigate to="/password-access" />
        </>;
      } else if (
        !sessionStorage.getItem("token") &&
        user &&
        user.motdepasseisactif
      ) {
        <>
          <Navigate to="/password-access" />
        </>;
      }

      const customerNumber = sessionStorage.getItem("customer_number")
        ? sessionStorage.getItem("customer_number")
        : "";

      if (sessionStorage.getItem("token")) {
        getForfaitById_secure(params.id, customerNumber)
          .then((res) => {
            setForfait(res.data.donnee);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        getForfaitById_allRight(params.id, customerNumber)
          .then((res) => {
            setForfait(res.data.donnee);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (sessionStorage.getItem("userPhoneNumber")) {
        getSuggestionDeForfait(
          params.id,
          sessionStorage.getItem("userPhoneNumber")
        );
      } else {
        getSuggestionDeForfait(params.id, "");
      }
    } catch (error) {
      console.log("catch error", error);
    }

    if (sessionStorage.getItem("typeAchat")) {
      setTypeTransaction(sessionStorage.getItem("typeAchat"));
    }
  }, []);

  return (
    <BaseLayout>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row w-full h-full mt-16">
          <div className="w-full sm:w-1/2 h-full bg-white px-5 md:px-10 lg:px-16 xl:px-14">
            <div className="flex flex-col items-center">
              <p className="inline text-center text-white text-xs tracking-widest font-normal bg-black px-16 py-2 rounded-tl-lg rounded-br-lg">
                Confirmer paiement :
              </p>
              <div className="w-full h-1.5 bg-black rounded-full mt-3"></div>
            </div>
            <div className="mt-16">
              <h3 className="mt-8 lg:w-96 mx-auto text-xl font-bold flex items-center">
                <span className="mr-1">Forfait choisi : </span>{" "}
              </h3>
              <div className="lg:w-96 mx-auto h-20 rounded-3xl shadow-xl border-4 border-white flex items-center mt-3">
                <div className="w-2/3 h-full bg-black rounded-tl-2xl rounded-bl-2xl flex items-center justify-center">
                  {forfait !== null ? (
                    <>
                      {forfait.volume ? (
                        <p className="text-2xl text-white font-medium">
                          {forfait.volume} {forfait.unite}
                        </p>
                      ) : (
                        <p className="text-2xl text-white font-medium">
                          Illimité
                        </p>
                      )}
                    </>
                  ) : (
                    <Skeleton
                      width="5rem"
                      height="1.5rem"
                      borderRadius="0.4rem"
                    ></Skeleton>
                  )}
                </div>
                <div className="w-4/5 h-full bg-gray-mtn rounded-tr-2xl rounded-br-2xl flex items-center px-5">
                  {forfait !== null ? (
                    <p className="text-xl text-black font-bold uppercase mt-1">
                      {forfait.cout} FCFA
                    </p>
                  ) : (
                    <Skeleton
                      width="5rem"
                      height="1.5rem"
                      borderRadius="0.4rem"
                    ></Skeleton>
                  )}
                </div>
              </div>
              <div className="mt-8">
                {forfait ? (
                  <h3 className="text-xl text-center text-gray-500 font-bold">
                    Valable :{" "}
                    {forfait.uniteValidite === "Jour"
                      ? `${forfait.validite} ${forfait.uniteValidite}(s)`
                      : forfait.uniteValidite === "Heure"
                      ? `${forfait.validite} ${forfait.uniteValidite}(s)`
                      : `${forfait.validite} ${forfait.uniteValidite}`}
                  </h3>
                ) : null}
              </div>
            </div>
            {forfaitSuggestion !== null && forfaitSuggestion.length !== 0 ? (
              <div className="mt-16 pb-16 hidden sm:block">
                <h4 className="text-center text-gray-500 text-lg font-medium">
                  Vous pouvez aussi acheter :
                </h4>
                <div className="mt-5 suggestion-forfait grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                  {forfaitSuggestion !== null
                    ? forfaitSuggestion.map((item) => (
                        <Link
                          to={`/detail-forfait/${item.id}`}
                          key={item.id}
                          className="block"
                          onClick={() => refreshForfait(item.id)}
                        >
                          <div className="w-full h-20 flex items-center border-4 border-white shadow-xl rounded-2xl bg-gray-mtn">
                            <div className="w-1/3 h-full flex flex-col items-center justify-center px-2 bg-jaune-mtn rounded-tl-2xl rounded-bl-2xl">
                              {item.volume ? (
                                <p className="font-bold text-center text-lg">
                                  {item.volume} {item.unite}
                                </p>
                              ) : (
                                <p className="font-bold text-center text-lg">
                                  Illimité
                                </p>
                              )}
                            </div>
                            <div className="w-2/3 h-full flex items-center justify-between px-5 lg:px-2">
                              <p className="leading-4 text-lg text-center font-bold">
                                {item.cout}{" "}
                                <span className="text-xs">FCFA</span>
                              </p>
                              <div className="bg-jaune-mtn w-8 h-8 rounded-full flex items-center justify-center ml-4 cursor-pointer">
                                <KeyboardArrowRightIcon />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    : null}
                </div>
              </div>
            ) : null}
          </div>
          <div className="relative w-full sm:w-1/2 h-full bg-gray-mtn mt-10 sm:mt-16 px-5 md:px-10 lg:px-16 xl:px-24 pt-10 pb-10">
            <div className="bg-white p-3 absolute right-5 sm:right-10 top-5">
              <button
                className="bg-jaune-mtn text-black uppercase font-bold text-xs px-2 py-1"
                onClick={() => navigate("/forfaits/acheter")}
              >
                Retour
              </button>
            </div>
            <h3 className="text-2xl font-bold">Détail de l'offre</h3>
            <div className="mt-5 text-sm font-medium text-black">
              {forfait === null ? (
                <>
                  <Skeleton
                    width="15rem"
                    height="1.5rem"
                    borderRadius="0.4rem"
                  ></Skeleton>
                  <Skeleton
                    width="8rem"
                    height="1.5rem"
                    borderRadius="0.4rem"
                    className="mt-3"
                  ></Skeleton>
                </>
              ) : null}

              {forfait !== null &&
              !sessionStorage.getItem("userPhoneNumber") ? (
                <p className="text-lg font-bold lg:w-3/5">
                  Pour {forfait.cout} FCFA vous bénéficiez de{" "}
                  {forfait.volume && !forfait.surplus
                    ? `${forfait.volume}
                  ${forfait.unite}`
                    : !forfait.volume && !forfait.surplus
                    ? "l'illimité"
                    : null}
                  {forfait.volume && forfait.surplus
                    ? `${forfait.volume} ${forfait.unite} + ${forfait.surplus} ${forfait.unite} = ${forfait.sommes} ${forfait.unite}`
                    : ""}{" "}
                  valable pendant{" "}
                  {forfait.uniteValidite === "Jour"
                    ? `${forfait.validite} ${forfait.uniteValidite}(s)`
                    : forfait.uniteValidite === "Heure"
                    ? `${forfait.validite} ${forfait.uniteValidite}(s)`
                    : `${forfait.validite} ${forfait.uniteValidite}`}
                </p>
              ) : null}

              {forfait !== null && sessionStorage.getItem("userPhoneNumber") ? (
                <p className="text-lg font-bold lg:w-3/5">
                  Pour {forfait.cout} FCFA le numéro{" "}
                  {sessionStorage.getItem("userPhoneNumber")} bénéficiera de{" "}
                  {forfait.volume
                    ? `${forfait.volume}
                  ${forfait.unite}`
                    : "l'illimité"}{" "}
                  valable pendant{" "}
                  {forfait.uniteValidite === "Jour"
                    ? `${forfait.validite} ${forfait.uniteValidite}(s)`
                    : forfait.uniteValidite === "Heure"
                    ? `${forfait.validite} ${forfait.uniteValidite}(s)`
                    : `${forfait.validite} ${forfait.uniteValidite}`}
                </p>
              ) : null}
            </div>
            <div className="mt-10 bg-white rounded-3xl w-full h-fit py-4 md:py-5 px-4 md:px-6 flex flex-col-reverse gap-y-2 md:gap-y-0 md:flex-row items-center justify-between">
              <div className="flex items-center gap-x-2 text-gray-400">
                <SecurityIcon />
                <span className="text-xs font-medium text-gray-400">
                  Achat sécurisé
                </span>
              </div>
              {!sessionStorage.getItem("userPhoneNumber") ? (
                <button
                  disabled={loading || forfait === null ? true : false}
                  className="bg-jaune-mtn font-bold text-sm w-full md:w-4/5 h-10 rounded-full flex items-center justify-center"
                  onClick={checkout}
                >
                  {!loading ? (
                    "Confirmer"
                  ) : (
                    <ThreeDots
                      height="40"
                      width="40"
                      radius="9"
                      color="#000"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={loading}
                    />
                  )}
                </button>
              ) : null}
              {sessionStorage.getItem("userPhoneNumber") ? (
                <button
                  disabled={loading || forfait === null ? true : false}
                  className="bg-jaune-mtn font-bold text-sm w-full md:w-4/5 h-10 rounded-full flex items-center justify-center"
                  onClick={checkoutForOther}
                >
                  {!loading ? (
                    "Confirmer"
                  ) : (
                    <ThreeDots
                      height="40"
                      width="40"
                      radius="9"
                      color="#000"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={loading}
                    />
                  )}
                </button>
              ) : null}
            </div>
            {errorSouscription ? (
              <div className="flex justify-center items-center mt-5">
                <p className="text-red-500 text-center font-bold">
                  {errorSouscription}
                </p>
              </div>
            ) : null}
            {forfaitSuggestion !== null && forfaitSuggestion.length !== 0 ? (
              <div className="mt-16 pb-16 block sm:hidden">
                <h4 className="text-center text-gray-500 text-lg font-medium">
                  Vous pouvez aussi acheter :
                </h4>
                <div className="mt-5 suggestion-forfait grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                  {forfaitSuggestion !== null
                    ? forfaitSuggestion.map((item) => (
                        <Link
                          to={`/detail-forfait/${item.id}`}
                          key={item.id}
                          className="block"
                          onClick={() => refreshForfait(item.id)}
                        >
                          <div className="w-full h-20 flex items-center border-4 border-white shadow-xl rounded-2xl bg-gray-mtn">
                            <div className="w-1/3 h-full flex flex-col items-center justify-center px-2 bg-jaune-mtn rounded-tl-2xl rounded-bl-2xl">
                              {item.volume ? (
                                <p className="font-bold text-center text-lg">
                                  {item.volume} {item.unite}
                                </p>
                              ) : (
                                <p className="font-bold text-center text-lg">
                                  Illimité
                                </p>
                              )}
                            </div>
                            <div className="w-2/3 h-full flex items-center justify-between px-5 lg:px-2">
                              <p className="leading-4 text-lg text-center font-bold">
                                {item.cout}{" "}
                                <span className="text-xs">FCFA</span>
                              </p>
                              <div className="bg-jaune-mtn w-8 h-8 rounded-full flex items-center justify-center ml-4 cursor-pointer">
                                <KeyboardArrowRightIcon />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <label htmlFor="modal-alert" id="modal-alert-checkout"></label>
        <input type="checkbox" id="modal-alert" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="modal-alert"
              className="btn btn-sm bg-black btn-circle absolute right-2 top-2"
              onClick={backPage}
            >
              ✕
            </label>
            <h3 className="text-xl text-green-500 text-center font-bold">
              Bravo!
            </h3>
            {!sessionStorage.getItem("userPhoneNumber") ? (
              <p className="py-4 text-center">
                Votre souscription pour le numéro{" "}
                {sessionStorage.getItem("userPhoneNumber")} a été effectuée avec
                succès.
              </p>
            ) : null}
            {sessionStorage.getItem("userPhoneNumber") ? (
              <p className="py-4 text-center">
                Votre souscription pour le numéro{" "}
                {sessionStorage.getItem("userPhoneNumber")} a été effectuée avec
                succès.
              </p>
            ) : null}
          </div>
        </div>

        {/* MODAL CONFIRLATION MOT DE PASSE POUR PAIEMENT POUR TIER */}
        <input
          type="checkbox"
          id="confirm-paiement-password"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
              Entrer votre mot de passe pour confirmer le paiement
            </h3>
            <div className="pt-4">
              <label className="label">
                <span className="label-text">Mot de passe</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="input input-bordered w-full"
              />
              {errorMessage ? (
                <p className="text-center font-bold text-red-500 mt-3">
                  {errorMessage}
                </p>
              ) : null}
            </div>
            <div className="modal-action flex items-center justify-between gap-x-4">
              {!loadingPaiement ? (
                <label
                  htmlFor="confirm-paiement-password"
                  className="w-full h-11 text-sm sm:text-base rounded-lg bg-gray-300 flex items-center justify-center text-black font-bold cursor-pointer"
                  onClick={() => setPassword("")}
                >
                  Annuler
                </label>
              ) : (
                <button
                  disabled={loadingPaiement}
                  className="w-full h-11 text-sm sm:text-base rounded-lg bg-gray-300 flex items-center justify-center text-black font-bold"
                >
                  Annuler
                </button>
              )}
              <button
                disabled={loadingPaiement}
                className="w-full h-11 rounded-lg bg-jaune-mtn text-sm sm:text-base text-black font-bold flex items-center justify-center"
                onClick={validerPasswordAvantPaiement}
              >
                {!loadingPaiement ? (
                  "Valider le paiement"
                ) : (
                  <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#000"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={loadingPaiement}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {showPromo ? (
          <div className="toast">
            <div className="alert bg-white shadow-2xl border border-gray-300">
              <div className="relative sm:w-96 flex flex-col items-start">
                <button
                  className="btn btn-sm btn-circle absolute -right-1 -top-1"
                  onClick={() => setShowPromo(false)}
                >
                  ✕
                </button>
                <h2 className="text-left font-bold">Promotion 🎉🥳</h2>
                <p>{user.promo}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </BaseLayout>
  );
};

export default ForfaitDetail;
