import React from "react";
import {
  GraduationCap,
  Briefcase,
  Zap,
  Globe,
  Award,
  Heart,
  FolderKanban,
  BookOpen,
  Trophy,
  Users,
  FileText,
  Quote,
  PenTool,
  Puzzle,
  Upload,
} from "lucide-react";

const AddContent = () => {
  const categories = [
    {
      title: "Education",
      desc: "Add your degrees and schools. Include your focus, honors, or exchange terms.",
      icon: <GraduationCap size={18} />,
    },
    {
      title: "Professional Experience",
      desc: "Add your professional roles and employer history including internships.",
      icon: <Briefcase size={18} />,
    },
    {
      title: "Skills",
      desc: "Add your hard and soft skills that help you stand out from the crowd today.",
      icon: <Zap size={18} />,
    },
    {
      title: "Languages",
      desc: "Add your languages and proficiency level to show your communication range.",
      icon: <Globe size={18} />,
    },
    {
      title: "Certificates",
      desc: "Add your industry certificates or licences. Include issuer and date earned.",
      icon: <Award size={18} />,
    },
    {
      title: "Interests",
      desc: "Add relevant personal interests that support your career story and cultural fit.",
      icon: <Heart size={18} />,
    },
    {
      title: "Projects",
      desc: "Add key projects you participated in and highlight your challenges, role, and impact.",
      icon: <FolderKanban size={18} />,
    },
    {
      title: "Courses",
      desc: "Add online or in-person courses and trainings you joined and completed.",
      icon: <BookOpen size={18} />,
    },
    {
      title: "Awards",
      desc: "Add your awards and recognitions from industry, competitions, or academia.",
      icon: <Trophy size={18} />,
    },
    {
      title: "Organisations",
      desc: "Add your memberships or volunteering with organisations including your role.",
      icon: <Users size={18} />,
    },
    {
      title: "Publications",
      desc: "Add publications, articles, or books you wrote or contributed to.",
      icon: <FileText size={18} />,
    },
    {
      title: "References",
      desc: "Add your references from managers or coworkers, including their contact details.",
      icon: <Quote size={18} />,
    },
    {
      title: "Declaration",
      desc: "Add your declaration by creating or uploading your personal signature.",
      icon: <PenTool size={18} />,
    },
    {
      title: "Custom",
      desc: "Add a custom section for anything else, or combine sections cleanly.",
      icon: <Puzzle size={18} />,
      custom: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-slate-900">Add content</h2>
        <div className="flex items-center gap-4">
          <span className="text-slate-600 font-medium">Quick start:</span>
          <button className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-100 transition-all border border-indigo-100">
            <Upload size={18} />
            Import Resume
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl transition-all cursor-pointer border group hover:shadow-md
              ${
                item.custom
                  ? "bg-slate-50 border-dashed border-slate-300 border-2"
                  : "bg-slate-50/50 border-transparent hover:border-slate-200"
              }`}
          >
            <div className="flex items-center gap-3 mb-2 text-slate-800">
              <span className="group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h3 className="font-bold text-[15px]">{item.title}</h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddContent;
