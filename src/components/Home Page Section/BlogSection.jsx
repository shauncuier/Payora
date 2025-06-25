import React from 'react';

const BlogSection = () => {

    const blogs = [
        {
            id: 1,
            title: "5 Tips to Save Money on Utility Bills",
            author: "Payora Team",
            date: "April 20, 2025",
            image: "https://i.ibb.co.com/xtN5H9wx/177abe33ccaa.jpg",
        },
        {
            id: 2,
            title: "How Digital Bill Payment is Changing Bangladesh",
            author: "Finance Journal",
            date: "March 10, 2025",
            image: "https://i.ibb.co.com/SwfGBgDq/cac709b232cd.jpg",
        },
        {
            id: 3,
            title: "Top 5 Mistakes People Make While Paying Bills Online",
            author: "Payora Experts",
            date: "May 1, 2025",
            image: "https://i.ibb.co.com/rTt2mXJ/283a2422efb1.webp",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Latest from the Payora Blog</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="card shadow-xl hover:shadow-2xl transition duration-300">
                            <figure>
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-lg">{blog.title}</h3>
                                <p className="text-sm text-gray-500">By {blog.author} • {blog.date}</p>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-outline btn-sm">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;