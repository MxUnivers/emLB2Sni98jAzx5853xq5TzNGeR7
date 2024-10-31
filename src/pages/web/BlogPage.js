import React, { useEffect, useState } from 'react';
import BlogAll, { fetchDataPostsAll } from '../../action/api/blog/BlogAction';
import BlogCard from '../../components/blog/BlogCard';
import LoadingBlogContainer from '../../components/loading/LoadingBlogBarner2';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const BlogPage = () => {
const { isLoading, error, blogs } = BlogAll();
const dispatch = useDispatch();
const posts = useSelector((state) => state.posts.posts);
const [email, setEmail] = useState("");
const [selectedCategories, setSelectedCategories] = useState([]);

useEffect(() => {
dispatch(fetchDataPostsAll());
}, [dispatch]);

// Extract unique categories (areaPost)
const uniqueCategories = [...new Set(blogs.map(blog => blog.areaPost))].filter(Boolean);

const handleEmailSubmit = (e) => {
e.preventDefault();
if (email) {
toast.success("Vous êtes maintenant abonné !");
setEmail(""); // Reset the input
} else {
toast.error("Veuillez entrer un email valide.");
}
};

// Toggle category selection
const handleCategoryChange = (category) => {
setSelectedCategories(prevSelected =>
prevSelected.includes(category)
? prevSelected.filter(cat => cat !== category) // Uncheck category
: [...prevSelected, category] // Check category
);
};

// Filter blogs based on selected categories
const filteredBlogs = selectedCategories.length > 0
? blogs.filter(blog => selectedCategories.includes(blog.areaPost))
: blogs;

return (
<div className="main-content">
    <div className="page-content mt-[100px] px-10">
        <div className="max-w-screen-xl mx-auto">
            <main className="mt-16 flex flex-col lg:flex-row gap-10">

                {/* Main Content - Blog Posts */}
                <section className="lg:w-2/3">
                    <div className="w-full">
                        <h2 className="text-3xl font-semibold mb-6">Derniers Articles</h2>
                        <hr />
                    </div>
                    <div className="w-full container-fluid flex flex-wrap justify-items-center mt-10 mb-10">
                        <section className="container w-full grid md:grid-cols-3 gap-4">
                            {isLoading ? (
                            [1, 1, 1, 1, 1,1].map((_, index) => (
                            <div key={index} className="mx-3 py-3">
                                <LoadingBlogContainer />
                            </div>
                            ))
                            ) : error ? (
                            <p className="text-center text-gray-500">Une erreur est survenue</p>
                            ) : (
                            filteredBlogs.map((item) => (
                            <BlogCard key={item._id} item={item} />
                            ))
                            )}
                        </section>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="lg:w-1/3 space-y-10">
                    {/* Email Subscription Section */}
                    <div className="bg-blue-100 py-6 px-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                            Abonnez-vous pour recevoir nos derniers articles
                        </h2>
                        <form onSubmit={handleEmailSubmit} className="flex flex-col">
                            <input type="email" placeholder="Entrez votre email" value={email} onChange={(e)=>
                            setEmail(e.target.value)}
                            className="px-4 py-2 mb-4 rounded-lg border focus:outline-none"
                            required
                            />
                            <button type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                S{"'"}abonner
                            </button>
                        </form>
                    </div>

                    {/* Categories Section with Checkboxes */}
                    <div className="bg-white shadow-lg p-6 rounded-lg sticky top-24">
                        <h3 className="text-xl font-semibold mb-4">Catégories</h3>
                        <div className="space-y-3">
                            {uniqueCategories.map((category) => (
                            <label key={category} className="flex items-center space-x-2 text-gray-700">
                                <input type="checkbox" checked={selectedCategories.includes(category)} onChange={()=>
                                handleCategoryChange(category)}
                                className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span>{category}</span>
                            </label>
                            ))}
                        </div>
                    </div>

                    {/* Tags Section */}
                    {/*<div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Tags Populaires</h3>
                        <div className="flex flex-wrap gap-2">
                            <span
                                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300">
                                #Technologie
                            </span>
                            <span
                                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300">
                                #Santé
                            </span>
                            <span
                                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300">
                                #Éducation
                            </span>
                            <span
                                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300">
                                #Finance
                            </span>
                            <span
                                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300">
                                #Actualités
                            </span>
                        </div>
                    </div> */}
                </aside>
            </main>
        </div>
    </div>
</div>
);
};

export default BlogPage;