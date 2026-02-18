import React from "react";

const Templetelist = ({ templates, handleDelete, handleEdit }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        My Templates
      </h2>

      {templates.length === 0 ? (
        <p className="text-gray-500">No templates found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border">Image</th>
                <th className="py-3 px-4 border">Name</th>
                <th className="py-3 px-4 border">Category</th>
                <th className="py-3 px-4 border">Description</th>
                <th className="py-3 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((item) => (
                <tr key={item.id} className="text-center hover:bg-gray-50">
                  <td className="py-2 px-4 border">
                    {item.image && (
                      <img
                        src={URL.createObjectURL(item.image)}
                        alt={item.name}
                        className="w-16 h-12 object-cover mx-auto rounded"
                      />
                    )}
                  </td>
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.category}</td>
                  <td className="py-2 px-4 border">{item.description}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Templetelist;
