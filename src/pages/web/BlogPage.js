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
    
    // Pagination states
    const [pageSize, setPageSize] = useState(12); // Default page size
    const [currentPage, setCurrentPage] = useState(1);
    
    // Effect to load all blogs
    useEffect(() => {
        dispatch(fetchDataPostsAll());
    }, [dispatch]);
    
    // Extract unique categories (areaPost)
    const uniqueCategories = [...new Set(blogs.map(blog => blog.areaPost))].filter(Boolean);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email) {
            toast.success("Merci de vous email été envoyer !");
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

    // Pagination logic
    const totalPages = Math.ceil(filteredBlogs.length / pageSize);
    const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Handle page size change
    const handlePageSizeChange = (e) => {
        setPageSize(parseInt(e.target.value, 10));
        setCurrentPage(1); // Reset to first page
    };

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="main-content">
            <div className="page-content mt-[100px] px-10 mb-[100px]">
                <div className="max-w-screen-xl mx-auto">
                    <main className="mt-16 flex flex-col lg:flex-row gap-10">
                        {/* Main Content - Blog Posts */}
                        <section className="lg:w-2/3">
                            <div className="w-full flex justify-between items-center mb-6">
                                <h2 className="text-3xl font-semibold">Derniers Activités</h2>
                                {/* Page size selector */}
                                <select
                                    className="border px-2 py-1 rounded"
                                    value={pageSize}
                                    onChange={handlePageSizeChange}
                                >

                                    <option value={12}>12 par page </option>
                                    <option value={24}>24 par page
                                    </option>
                                    <option value={48}>48 par page</option>
                                </select>
                            </div>
                            <hr />

                            <div className="w-full container-fluid flex flex-wrap justify-items-center mt-10 mb-10">
                                <section className="container w-full grid md:grid-cols-3 gap-4">
                                    {isLoading ? (
                                        [1, 1, 1, 1, 1, 1].map((_, index) => (
                                            <div key={index} className="mx-3 py-3">
                                                <LoadingBlogContainer />
                                            </div>
                                        ))
                                    ) : error ? (
                                        <p className="text-center text-gray-500">Une erreur est survenue</p>
                                    ) : (
                                        paginatedBlogs.map((item) => (
                                            <BlogCard key={item._id} item={item} />
                                        ))
                                    )}
                                </section>
                            </div>

                            {/* Pagination Controls */}
                            <div className="flex justify-center space-x-2 mt-4">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-10">
                            {/* Email Subscription Section */}
                            <div className="bg-indigo-100 py-6 px-6 rounded-lg shadow-lg sticky top-24">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                                    Abonnez-vous pour recevoir nos derniers articles
                                </h2>
                                <form onSubmit={handleEmailSubmit} className="flex flex-col">
                                    <input
                                        type="email"
                                        placeholder="Entrez votre email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="px-4 py-2 mb-4 rounded-lg border focus:outline-none"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                                    >
                                        S{"'"}abonner
                                    </button>
                                </form>
                            </div>

                            {/* Categories Section with Checkboxes */}
                            <div className="bg-white shadow-lg p-6 rounded-lg sticky top-36">
                                <h3 className="text-xl font-semibold mb-4">Catégories</h3>
                                <div className="space-y-3">
                                    {uniqueCategories.map((category) => (
                                        <label key={category} className="flex items-center space-x-2 text-gray-700">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => handleCategoryChange(category)}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span>{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
