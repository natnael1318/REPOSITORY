import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100 bg-transparent p-6 rounded-lg shadow-md ">
            <h2 className="text-xl  font-bold mb-4">Contact Us</h2>
            <form 
                action="mailto:healway09@gmail.com" 
                method="POST" 
                encType="text/plain"
                className="flex flex-col"
            >
                <label className="mb-2 " htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="mb-4 p-2 bg-gray-800 bg-opacity-50 border border-gray-300 rounded"
                />
                
                <label className="mb-2 " htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="mb-4 p-2 bg-gray-800 bg-opacity-50 border border-gray-300 rounded"
                />
                
                <label className="mb-2 " htmlFor="message">Message:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="2" 
                    className="mb-4 p-2 bg-gray-800 bg-opacity-50 border border-gray-300 rounded"
                ></textarea>
                
                <button 
                    type="submit" 
                    className="bg-blue-950 text-white p-2 rounded hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;