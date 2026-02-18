import React, { useState } from "react";
import Templetelist from "./Templetelist";

const Templetedashboard = () => {
  const [templete, setTemplete] = useState({
    name: "",
    category: "",
    description: "",
    image: null,
  });

  const [templatesList, setTemplatesList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setTemplete({ ...templete, image: files[0] });
    } else {
      setTemplete({ ...templete, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setTemplatesList(
        templatesList.map((item) =>
          item.id === editId ? { ...templete, id: editId } : item,
        ),
      );
      setEditId(null);
    } else {
      const newTemplate = {
        id: Date.now(),
        ...templete,
      };
      setTemplatesList([...templatesList, newTemplate]);
    }

    
    setTemplete({
      name: "",
      category: "",
      description: "",
      image: null,
    });

    setFileInputKey(Date.now());
  };

  const handleDelete = (id) => {
    setTemplatesList(templatesList.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const selectedTemplate = templatesList.find((item) => item.id === id);
    setTemplete(selectedTemplate);
    setEditId(id);
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
              accept="image/*"
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
