import React, { useState, useEffect } from "react";
import Templetelist from "./Templetelist";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;

const Templetedashboard = () => {
  const [templete, setTemplete] = useState({
    name: "",
    category: "",
    type:"",
    description: "",
    image: null,
  });

  const [templatesList, setTemplatesList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  useEffect(() => {
    fetchTemplete();
  }, []);

  const fetchTemplete = async () => {
    try {
      const res = await axios.get(`${api}/list`);
      setTemplatesList(res.data.data || []);
    } catch (err) {
      console.log(err);
      setTemplatesList([]);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") setTemplete({ ...templete, image: files[0] });
    else setTemplete({ ...templete, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", templete.name);
    formData.append("category", templete.category);
    formData.append("type", templete.type);
    formData.append("description", templete.description);
    if (templete.image) formData.append("image", templete.image);

    try {
      if (editId) {
        await axios.put(`${api}/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEditId(null);
      } else {
        await axios.post(`${api}/insert`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setTemplete({ name: "", category: "", description: "", image: null });
      setFileInputKey(Date.now());
      fetchTemplete();
    } catch (err) {
      console.log(err);
      alert("Error saving template");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/${id}`);
      fetchTemplete();
    } catch (err) {
      console.log(err);
      alert("Error deleting template");
    }
  };

  const handleEdit = (id) => {
    const selectedTemplate = templatesList.find((item) => item._id === id);
    if (!selectedTemplate) return;

    setTemplete({
      name: selectedTemplate.name,
      category: selectedTemplate.category,
      description: selectedTemplate.description,
      image: null,
    });
    setEditId(id);
    setFileInputKey(Date.now());
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-8 border">
          <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-6">
            {editId ? "Edit Template" : "Create New Template"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Template Name"
              value={templete.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              required
              type="text"
              name="category"
              placeholder="Category"
              value={templete.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              required
              type="text"
              name="type"
              placeholder="Type (traditional / professional / classic)"
              value={templete.type}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              required
              name="description"
              placeholder="Description"
              value={templete.description}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              key={fileInputKey}
              type="file"
              name="image"
              accept="image/*,application/pdf"
              onChange={handleChange}
              className="w-full text-sm text-gray-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              {editId ? "Update Template" : "Add Template"}
            </button>
          </form>
        </div>

        <Templetelist
          templates={templatesList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default Templetedashboard;
