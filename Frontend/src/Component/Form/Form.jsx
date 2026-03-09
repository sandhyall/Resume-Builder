import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TraditionalTemplate from "../../Component/Templates/TraditionalTemplate";
import ProfessionalTemplate from "../../Component/Templates/PrefessionalTemplate";
import ClassicTemplate from "../Templates/ClassicTemplate";
import html2pdf from "html2pdf.js";

const templateMap = {
  traditional: TraditionalTemplate,
  professional: ProfessionalTemplate,
  classic: ClassicTemplate,
};

const Form = () => {
  const resumeRef = useRef();
  const { type } = useParams();
  const templateType = type || "traditional";
  const TemplateComponent = templateMap[templateType] || TraditionalTemplate;

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    profile: "",
    photo: null,
    skills: [],
    education: [],
    experience: [],
    projects: [],
    references: [],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: URL.createObjectURL(file),
      }));
    }
  };

  const removeItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const addSkill = () =>
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { title: "", name: "" }],
    }));

  const handleSkillChange = (i, field, value) => {
    const updated = [...formData.skills];
    updated[i][field] = value;
    setFormData((prev) => ({ ...prev, skills: updated }));
  };

  const addEducation = () =>
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          field: "",
          school: "",
          startYear: "",
          endYear: "",
          currentlyStudying: false,
        },
      ],
    }));

  const handleEducationChange = (i, field, value) => {
    const updated = [...formData.education];
    updated[i][field] = value;
    setFormData((prev) => ({ ...prev, education: updated }));
  };

  const addExperience = () =>
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));

  const handleExperienceChange = (i, field, value) => {
    const updated = [...formData.experience];
    updated[i][field] = value;
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const addReference = () =>
    setFormData((prev) => ({
      ...prev,
      references: [
        ...prev.references,
        { name: "", position: "", company: "", phone: "", email: "" },
      ],
    }));

  const handleReferenceChange = (i, field, value) => {
    const updated = [...formData.references];
    updated[i][field] = value;
    setFormData((prev) => ({ ...prev, references: updated }));
  };

  const downloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0,
      filename: `${formData.name || "Resume"}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[calc(100rem)] lg:h-[90vh]">
          <div className="p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">
              Resume Builder
            </h2>
            <p className="text-slate-500 text-sm">
              Fill in your details to see the magic.
            </p>
          </div>

          <div className="p-6 overflow-y-auto space-y-8 custom-scrollbar">
            <section className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
              <div className="relative group">
                {formData.photo ? (
                  <img
                    src={formData.photo}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                ) : (
                  <div className="w-28 h-28 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <input
                type="file"
                id="photo-upload"
                className="hidden"
                onChange={handlePhotoChange}
              />
              <label
                htmlFor="photo-upload"
                className="mt-4 cursor-pointer text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {formData.photo ? "Change Photo" : "Upload Photo"}
              </label>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Full Name
                </label>
                <input
                  placeholder="John Doe"
                  className="form-input"
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Email
                </label>
                <input
                  placeholder="email@example.com"
                  className="form-input"
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Phone
                </label>
                <input
                  placeholder="+977 9800000000"
                  className="form-input"
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Address
                </label>
                <input
                  placeholder="Kathmandu, Nepal"
                  className="form-input"
                  onChange={(e) => handleChange("address", e.target.value)}
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold uppercase text-slate-500 ml-1">
                  Profile Summary
                </label>
                <textarea
                  placeholder="Briefly describe yourself..."
                  className="form-input"
                  onChange={(e) => handleChange("profile", e.target.value)}
                />
              </div>
            </div>

            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-700">Experience</h3>
                <button onClick={addExperience} className="add-btn">
                  + Add
                </button>
              </div>

              {formData.experience.map((exp, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-50 p-5 rounded-xl border border-slate-200 transition-all hover:border-blue-300"
                >
                  <button
                    onClick={() => removeItem("experience", i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                  >
                    ✕
                  </button>
                  <div className="grid gap-4">
                    <input
                      placeholder="Job Position"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleExperienceChange(i, "position", e.target.value)
                      }
                    />
                    <input
                      placeholder="Company Name"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleExperienceChange(i, "company", e.target.value)
                      }
                    />
                    <input
                      type="date"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleExperienceChange(i, "startDate", e.target.value)
                      }
                    />
                    <input
                      type="date"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleExperienceChange(i, "endDate", e.target.value)
                      }
                    />
                    <textarea
                      placeholder="Job Description"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleExperienceChange(i, "description", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-700">Skill</h3>
                <button onClick={addSkill} className="add-btn">
                  + Add
                </button>
              </div>

              {formData.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-50 p-5 rounded-xl border border-slate-200 transition-all hover:border-blue-300"
                >
                  <button
                    onClick={() => removeItem("skills", i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                  >
                    ✕
                  </button>
                  <div className="grid gap-4">
                    <input
                      placeholder="Title"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleSkillChange(i, "title", e.target.value)
                      }
                    />

                    <input
                      placeholder="Skill Name"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleSkillChange(i, "name", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-700">Education</h3>
                <button onClick={addEducation} className="add-btn">
                  + Add
                </button>
              </div>

              {formData.education.map((edu, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-50 p-5 rounded-xl border border-slate-200 transition-all hover:border-blue-300"
                >
                  <button
                    onClick={() => removeItem("education", i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                  >
                    ✕
                  </button>
                  <div className="grid gap-4">
                    <input
                      placeholder="Degree"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleEducationChange(i, "degree", e.target.value)
                      }
                    />

                    <input
                      placeholder="Field"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleEducationChange(i, "field", e.target.value)
                      }
                    />

                    <input
                      placeholder="College / School"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleEducationChange(i, "school", e.target.value)
                      }
                    />

                    <div className="flex gap-2">
                      <input
                        type="date"
                        className="form-input bg-white"
                        onChange={(e) =>
                          handleEducationChange(i, "startYear", e.target.value)
                        }
                      />

                      <input
                        type="date"
                        className="form-input bg-white"
                        disabled={edu.currentlyStudying}
                        onChange={(e) =>
                          handleEducationChange(i, "endYear", e.target.value)
                        }
                      />
                    </div>

                    <label className="flex gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={edu.currentlyStudying}
                        onChange={(e) =>
                          handleEducationChange(
                            i,
                            "currentlyStudying",
                            e.target.checked,
                          )
                        }
                      />
                      Currently Studying
                    </label>
                  </div>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-700">Reference</h3>
                <button onClick={addReference} className="add-btn">
                  + Add
                </button>
              </div>

              {formData.references.map((ref, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-50 p-5 rounded-xl border border-slate-200 transition-all hover:border-blue-300"
                >
                  <button
                    onClick={() => removeItem("references", i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                  >
                    ✕
                  </button>
                  <div className="grid gap-4">
                    <input
                      placeholder="Name"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleReferenceChange(i, "name", e.target.value)
                      }
                    />

                    <input
                      placeholder="Position"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleReferenceChange(i, "position", e.target.value)
                      }
                    />

                    <input
                      placeholder="Company"
                      className="form-input bg-white"
                      onChange={(e) =>
                        handleReferenceChange(i, "company", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <span className="text-sm font-medium text-slate-500">
              Live Preview (A4)
            </span>
            <button onClick={downloadPDF} className="download-btn">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export PDF
            </button>
          </div>

          <div className="preview-container overflow-auto bg-slate-400 p-8 rounded-xl shadow-inner lg:sticky lg:top-8">
            <div
              ref={resumeRef}
              className="mx-auto bg-white shadow-2xl origin-top"
              style={{ width: "210mm", minHeight: "297mm" }}
            >
              <TemplateComponent data={formData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
