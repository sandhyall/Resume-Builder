import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit3, Grid } from "lucide-react";

const ResumeDetails = () => {
  const api = import.meta.env.VITE_API_URL;

  const imageBase =
    import.meta.env.VITE_IMAGE_URL || "http://localhost:8000/uploads";

  const { id } = useParams();
  const navigate = useNavigate();

  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTemplate = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${api}/${id}`);
      setTemplate(res.data.data);
    } catch (err) {
      console.error("Failed to fetch template:", err);
      setError(
        "We couldn't load the template details. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  }, [api, id]);

  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-pulse">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium">
          Fetching template details...
        </p>
      </div>
    );
  }

  if (error || !template) {
    return (
      <div className="max-w-md mx-auto mt-20 text-center p-8 bg-red-50 rounded-2xl border border-red-100">
        <p className="text-red-600 font-semibold mb-4">
          {error || "Template not found"}
        </p>
        <button
          onClick={() => navigate("/templates")}
          className="text-sm text-red-700 underline hover:text-red-800"
        >
          Return to Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Templates
        </button>

        <div className=" shadow-xl shadow-gray-200/50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          <div className="lg:w-3/5 w-full  p-6 flex items-center justify-center">
            <div className="relative group">
              <img
                src={`${imageBase}/${template.image}`}
                alt={template.name}
                className="w-full max-h-[600px] object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-black/5 pointer-events-none" />
            </div>
          </div>

          <div className="lg:w-2/5 w-full p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
              {template.category || "Professional"}
            </span>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {template.name}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {template.description ||
                "Craft a winning resume with this professionally designed layout. Perfect for highlighting your skills and experience to recruiters."}
            </p>

            <div className="space-y-4">
              <button
                onClick={() =>
                  navigate(
                    `/temnavbar/${template.type ? template.type.toLowerCase() : "traditional"}`,
                  )
                }
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transform active:scale-95 transition-all shadow-lg shadow-blue-200"
              >
                <Edit3 className="w-5 h-5" />
                Use This Template
              </button>

              <button
                onClick={() => navigate("/resume")}
                className="w-full flex items-center justify-center gap-2 border-2 border-gray-100 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 hover:border-gray-200 transition-all"
              >
                <Grid className="w-5 h-5" />
                Explore Other Designs
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">
                  Format
                </p>
                <p className="text-sm font-medium text-gray-700">
                  PDF, Web ready
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">
                  Difficulty
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Beginner Friendly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetails;
