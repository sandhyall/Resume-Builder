import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

const ResumeTemplete = () => {
  const [templete, setTemplate] = useState([]); 
  const [loading, setLoading] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  const fetchTemplates = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${api}/list`); 
      setTemplate(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Free Resume Templates</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Choose an ATS-ready resume template in your preferred style and format.
          Try our free online resume builder and enjoy unlimited PDF downloads.
          No paywall. No watermarks. No hidden fees. Yes, really 🚀
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">Loading templates...</p>
        ) : templete.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 py-10">
            No templates found
          </p>
        ) : (
          templete.map((item) => (
            <div
              key={item._id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              {item.image && (
                 <Link to={`/templete/${item._id}`}>

                <img
                  src={`http://localhost:8000/uploads/${item.image}`}
                  alt={item.name || "template image"}
                  className="w-full h-auto object-contain"
                />
                </Link>
              )}

              <div className="p-4">
                <p className="font-semibold text-gray-800 text-lg">{item.name}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResumeTemplete;
