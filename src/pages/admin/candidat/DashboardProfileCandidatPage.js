import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { routing } from '../../../utlis/routing'
import { ApiKey } from '../../../utlis/config'

const DashboardProfileCandidatPgage = () => {


    // Edtiteur tiny
    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content)
    }

    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Mon Profile de candidat</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href={`/${routing.candidatDashboard.path}`}>Tableau de bord</a></li>
                    <li class="item"><a href={`/${routing.candidatProfile.path}`}>profile</a></li>
                    <li class="item">Mon profile</li>
                </ol>
            </div>



            <div class="my-profile-box">
                <h3>Detail de mon profile </h3>

                <form>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="form-group profile-box">
                                <img src="assets/images/my-profile.jpg" alt="image" />
                                <div class="file-upload">
                                    <input type="file" name="file" id="file" accept=".JPEG,.PNG,.JPG" class="inputfile" />
                                    <label for="file"><i class="ri-upload-2-line"></i> Upload Photo</label>
                                </div>

                                <div class="text">
                                    <p>La taille maximale du fichier est de 1MB, la dimension minimale est de 450x50 : 450x450 et les fichiers appropriés sont .jpg et .png.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Nom </label>
                                <input type="text" class="form-control" placeholder="Andy Smith" />
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Prénoms </label>
                                <input type="text" class="form-control" placeholder="Andy Smith" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Job Title</label>
                                <input type="text" class="form-control" placeholder="UI Designer" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="hello@andysmith.com" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>téléphone</label>
                                <input type="phone" class="form-control" placeholder="+88 (123) 123456" />
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Votre site web</label>
                                <input type="url" class="form-control" placeholder="EnvyTheme.com" />
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Salaire actuelle ($)</label>

                                <select class="selectize-filter form-control">
                                    <option value="1">10-20 K</option>
                                    <option value="2">20-40 K</option>
                                    <option value="3">40-60 K</option>
                                    <option value="4">60-80 K</option>
                                    <option value="5">80-100 K</option>
                                </select>
                            </div>
                        </div>



                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Experience</label>
                                <input type="text" class="form-control" placeholder="4-8 Years" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Age</label>
                                <select class="selectize-filter form-control">
                                    <option value="1">20 - 25 Years</option>
                                    <option value="2">20 - 25 Years</option>
                                    <option value="3">20 - 25 Years</option>
                                    <option value="4">20 - 25 Years</option>
                                    <option value="5">20 - 25 Years</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Niveau d{"'"} éducation</label>
                                <input type="text" class="form-control" placeholder="Doctorat / Master 2 / Master 1 / Licence / " />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Langue</label>
                                <input type="text" class="form-control" placeholder="English, Turkish" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Categories</label>

                                <select class="selectize-filter">
                                    <option value="1">Categories</option>
                                    <option value="2">Banking</option>
                                    <option value="3">Human Resources</option>
                                    <option value="4">Management</option>
                                    <option value="5">Retail</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Autoriser dans la recherche et l{"'"}inscription</label>
                                <select class="selectize-filter">
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Description sur vous</label>
                                <Editor
                                    class='form-control'
                                    apiKey={`${ApiKey.tiny.path}`}
                                    initialValue='<p>Décriver en plus sur votre entrprise sur votre acticté / les succès de votre entrpise</p>'
                                    init={{
                                        height: 300,
                                        menubar: true,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar:
                                            'undo redo | formatselect | bold italic backcolor | \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent | removeformat | help'
                                    }}
                                    onEditorChange={handleEditorChange}
                                />

                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Pays</label>

                                <select class="selectize-filter">
                                    <option value="1">Australia</option>
                                    <option value="2">Chaina</option>
                                    <option value="3">United Kingdom</option>
                                    <option value="4">Germany</option>
                                    <option value="5">United Arab Emirates</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Ville</label>

                                <select class="selectize-filter">
                                    <option value="1">Melbourne</option>
                                    <option value="2">Chaina</option>
                                    <option value="3">United Kingdom</option>
                                    <option value="4">Germany</option>
                                    <option value="5">United Arab Emirates</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Adresse</label>
                                <input type="text" class="form-control" placeholder="Complete Address" />
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Données de localisation sur googgle maps</label>
                                <input type="text" class="form-control" 
                                placeholder="https://goo.gl/maps/UGgiotXbLiUW6Hou5"
                                 />
                            </div>
                        </div>

                       
                        <div class="col-xl-4 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>Taille</label>
                                <input type="text" class="form-control" placeholder="1 mêtre 82" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>lien Facebook </label>
                                <input type="text" class="form-control" placeholder="https://www.facebook.com/" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>lien Twitter </label>
                                <input type="text" class="form-control" placeholder="https://twitter.com/" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>lien Linkedin </label>
                                <input type="text" class="form-control" placeholder="https://www.linkedin.com/" />
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-12 col-md-12">
                            <div class="form-group">
                                <label>lien Instagram </label>
                                <input type="text" class="form-control" placeholder="https://instagram.com/" />
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12">
                            <button type="submit" class="default-btn bg-blue-600">Enregitrer changement <i class="flaticon-send"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DashboardProfileCandidatPgage;