import React from "react";

const ProfessionalTemplate = ({ data }) => {
  return (
    <div
      className="bg-white flex text-gray-800"
      style={{
        width: "794px",
        minHeight: "1123px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="w-1/3 bg-slate-800 text-white p-8">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-sm mt-1">{data.title}</p>

        {data.photo && (
          <div className="flex justify-center mt-6">
            <img
              src={data.photo}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-white"
            />
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase border-b border-gray-400 pb-1">
            Contact
          </h2>

          <div className="text-sm mt-3 space-y-1">
            {data.email && <p>{data.email}</p>}
            {data.phone && <p>{data.phone}</p>}
            {data.address && <p>{data.address}</p>}
            {data.linkedin && <p>{data.linkedin}</p>}
          </div>
        </div>

        {data.profile && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase border-b border-gray-400 pb-1">
              Profile
            </h2>
            <p className="text-sm mt-3 leading-relaxed">{data.profile}</p>
          </div>
        )}

        {data.skills?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase border-b border-gray-400 pb-1">
              Skills
            </h2>

            <ul className="mt-3 text-sm list-disc list-inside space-y-1">
              {data.skills.map((skill, i) => (
                <li key={i}>
                  <span className="font-semibold">{skill.title}:</span>{" "}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="w-2/3 p-8">
        {data.experience?.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase border-b pb-1">
              Professional Experience
            </h2>

            {data.experience.map((exp, i) => (
              <div key={i} className="mt-4">
                <p className="font-semibold">{exp.position}</p>
                <p className="text-sm">{exp.company}</p>

                <p className="text-xs text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </p>

                {exp.description && (
                  <p className="text-sm mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {data.education?.length > 0 && (
          <section className="mt-8">
            <h2 className="text-sm font-bold uppercase border-b pb-1">
              Education
            </h2>

            {data.education.map((edu, i) => (
              <div key={i} className="mt-4">
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-sm">{edu.school}</p>

                <p className="text-xs text-gray-500">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            ))}
          </section>
        )}

        {data.projects?.length > 0 && (
          <section className="mt-8">
            <h2 className="text-sm font-bold uppercase border-b pb-1">
              Projects
            </h2>

            {data.projects.map((project, i) => (
              <div key={i} className="mt-4">
                <p className="font-semibold">{project.name}</p>

                {project.tech && (
                  <p className="text-xs text-gray-500">
                    Technologies: {project.tech}
                  </p>
                )}

                {project.description && (
                  <p className="text-sm mt-1">{project.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {data.references?.length > 0 && (
          <section className="mt-8">
            <h2 className="text-sm font-bold uppercase border-b pb-1">
              References
            </h2>

            {data.references.map((ref, i) => (
              <div key={i} className="mt-3 text-sm">
                <p className="font-semibold">{ref.name}</p>
                <p>{ref.position}</p>
                <p>{ref.company}</p>
                {ref.phone && <p>{ref.phone}</p>}
                {ref.email && <p>{ref.email}</p>}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
