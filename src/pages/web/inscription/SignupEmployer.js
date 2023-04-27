import React, { useState } from 'react'
import Select from 'react-select';
import { Editor } from '@tinymce/tinymce-react';

import BarnerEmployer from '../../../components/web/employer/BarnerEmployer';
import { ApiKey } from '../../../utlis/config';



const SignupEmployer = () => {
    // Edtiteur tiny
    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    };

    const options = [
        { value: 'informatique', label: 'Informatique' },
        { value: 'comptabilité', label: 'Comptabilité' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'ventes', label: 'Ventes' },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    return (
        <div>
        <BarnerEmployer />

            <div class="main p-10 d-flex flex-column">
                

                <div class="submit-resumes-box ">
                    <form>
                        <div class="h-[200px] ">

                        </div>
                        <div class="row">
                            <h3 class="text-3xl">Information sur votre entreprise</h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Nom de votre entreprise</label>
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" placeholder="Your Email" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Date de création votre entreprise</label>
                                    <input type="date" class="form-control" placeholder="Date of Birth" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Télephone</label>
                                    <input type="number" class="form-control" placeholder="Your Phone" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Adrrese de votre entreprise</label>
                                    <input type="text" class="form-control" placeholder="Côte d'ivoire , Abidjan ,  Yopougon" />
                                </div>
                            </div>


                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Dites en plus sur votre entreprise</label>

                                    <Editor
                                        class="form-control"
                                        apiKey={`${ApiKey.tiny.path}`}
                                        initialValue="<p>Décriver en plus sur votre entrprise sur votre acticté / les succès de votre entrpise</p>"
                                        init={{
                                            height: 200,
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


                            <h3>Secteur d{"'"}activté de votre entreprise </h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Selectionné votre secteur</label>
                                    <div>
                                        <Select
                                            options={options}
                                            isMulti
                                            onChange={handleChange}
                                            value={selectedOptions}
                                        />
                                        <p>Options sélectionnées:</p>
                                        <ul>
                                            {selectedOptions.map((option) => (
                                                <li key={option.value}>{option.label}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Experience</label>
                                    <input type="text" class="form-control" placeholder="Experience" />
                                </div>
                            </div>

                            <h3>Résaux sociaux</h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Facebook URL</label>
                                    <input type="text" class="form-control" placeholder="https://www.facebook.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Twitter URL</label>
                                    <input type="text" class="form-control" placeholder="https://twitter.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Linkedin URL</label>
                                    <input type="text" class="form-control" placeholder="https://www.linkedin.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Instagram URL</label>
                                    <input type="text" class="form-control" placeholder="https://instagram.com/" />
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <button type="submit" class=" btn btn-info default-btn bg-blue-600">Confimer votre inscription <i class="flaticon-send"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default SignupEmployer;