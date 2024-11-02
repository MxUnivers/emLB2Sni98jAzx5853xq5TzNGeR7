import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const ScholarshipApplicationFormPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        profilePicture: '',
        codePostal: '',
        dateOfBirth: '',
        email: '',
        phoneNumber: '',
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
        },
        educationLevel: '',
        level_school: '',
        currentInstitution: '',
        fieldOfStudy: '',
        gpa: '',
        personalStatement: '',
        references: [{ name: '', contactInfo: '', relationship: '' }],
        documents: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, address: { ...formData.address, [name]: value } });
    };

    const handleReferenceChange = (index, field, value) => {
        const updatedReferences = [...formData.references];
        updatedReferences[index][field] = value;
        setFormData({ ...formData, references: updatedReferences });
    };

    const handleAddReference = () => {
        setFormData({
            ...formData,
            references: [...formData.references, { name: '', contactInfo: '', relationship: '' }],
        });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files).map((file) => file.name);
        setFormData({ ...formData, documents: files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/scholarship/applications', formData);
            toast.success('Application submitted successfully!');
            console.log(response.data);
        } catch (error) {
            toast.error('Error submitting the application');
            console.error(error.message);
        }
    };

    return (
        <div className="container mt-20 mb-20  mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Formulaire de soumision de bourse</h2>
            <hr className="my-5"/>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-left">Nom</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-left">Prénoms</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-left">Photo</label>
                    <input
                        type="text"
                        name="profilePicture"
                        value={formData.profilePicture}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-left">Indicatif Pays</label>
                        <input
                            type="text"
                            name="codePostal"
                            value={formData.codePostal}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-left">Date de naissance</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-left">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-left">Téléphone</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <fieldset className="border p-4 rounded-md">
                    <legend className="text-sm font-medium mb-2">Address</legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-left">Street</label>
                            <input
                                type="text"
                                name="street"
                                value={formData.address.street}
                                onChange={handleAddressChange}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-left">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.address.city}
                                onChange={handleAddressChange}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-left">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.address.state}
                                onChange={handleAddressChange}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-left">Indicatif Pays</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.address.postalCode}
                                onChange={handleAddressChange}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-left">Pays d{"'"}origine</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.address.country}
                                onChange={handleAddressChange}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </fieldset>

                <div>
                <label className="block text-sm font-medium mb-1 text-left">Niveau d{"'"}etude</label>
                <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                >
                    <option value="">Select</option>
                    <option value="HIGHT_SCHOOL">High School</option>
                    <option value="UNDERGRADUATE">Undergraduate</option>
                    <option value="GRADUATE">Graduate</option>
                    <option value="PHD">PhD</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-left">Personal Statement</label>
                <textarea
                    name="personalStatement"
                    value={formData.personalStatement}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                />
            </div>

            <fieldset className="border p-4 rounded-md">
                <legend className="text-sm font-medium mb-2">References</legend>
                {formData.references.map((reference, index) => (
                    <div key={index} className="mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-left">Nom</label>
                            <input
                                type="text"
                                value={reference.name}
                                onChange={(e) => handleReferenceChange(index, 'name', e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-left">Contact Info</label>
                            <input
                                type="text"
                                value={reference.contactInfo}
                                onChange={(e) => handleReferenceChange(index, 'contactInfo', e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-left">Type de relation</label>
                            <input
                                type="text"
                                value={reference.relationship}
                                onChange={(e) => handleReferenceChange(index, 'relationship', e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddReference}
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                >
                    Ajouter Personne à contacter
                </button>
            </fieldset>

            <div>
                <label className="block text-sm font-medium mb-1 text-left">Télécharger vos Documents (Pièce identité , Diplôme , niveau d{"'"} études)</label>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>

           <div class="text-left">
           <button
           type="submit"
           className="px-4 bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
       >
           Soumetre
       </button>
           </div>
        </form>
    </div>
);
}

export default ScholarshipApplicationFormPage;
