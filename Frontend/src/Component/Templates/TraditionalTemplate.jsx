import React from "react";

const TraditionalTemplate = ({ data }) => {
  return (
    <div
      className="bg-white text-gray-900 p-10"
      style={{
        width: "794px",
        minHeight: "1123px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="text-center border-b pb-4">
        <h1 className="text-3xl font-bold">{data.name}</h1>

        {data.title && <p className="text-sm mt-1 font-medium">{data.title}</p>}

        <p className="text-sm mt-1">
          {data.address}
          {data.address && " | "}
          {data.phone}
          {data.phone && " | "}
          {data.email}
        </p>
      </div>

      {data.profile && (
        <section className="mt-6">
          <h2 className="uppercase text-sm font-bold border-b pb-1">
            Professional Summary
          </h2>

          <p className="mt-2 text-sm leading-relaxed">{data.profile}</p>
        </section>
      )}

      {data.skills?.length > 0 && (
        <section className="mt-6">
          <h2 className="uppercase text-sm font-bold border-b pb-1">Skills</h2>

          <ul className="mt-2 text-sm list-disc list-inside space-y-1">
            {data.skills.map((skill, i) => (
              <li key={i}>
                <span className="font-semibold">{skill.title}:</span>{" "}
                {skill.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.education?.length > 0 && (
        <section className="mt-6">
          <h2 className="uppercase text-sm font-bold border-b pb-1">
            Education
          </h2>

          {data.education.map((edu, i) => (
            <div key={i} className="mt-3">
              <p className="font-semibold text-sm">
                {edu.degree} {edu.field && `in ${edu.field}`}
              </p>

              <p className="text-sm">{edu.school}</p>

              <p className="text-xs text-gray-600">
                {edu.startYear} - {edu.endYear}
              </p>
            </div>
          ))}
        </section>
      )}

      {data.experience?.length > 0 && (
        <section className="mt-6">
          <h2 className="uppercase text-sm font-bold border-b pb-1">
            Work Experience
          </h2>

          {data.experience.map((exp, i) => (
            <div key={i} className="mt-3">
              <p className="font-semibold text-sm">{exp.position}</p>

              <p className="text-sm">{exp.company}</p>

              <p className="text-xs text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>

              {exp.description && (
                <p className="text-sm mt-1">{exp.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {data.projects?.length > 0 && (
        <section className="mt-6">
          <h2 className="uppercase text-sm font-bold border-b pb-1">
            Projects
          </h2>

          {data.projects.map((project, i) => (
            <div key={i} className="mt-3">
              <p className="font-semibold text-sm">{project.name}</p>

              {project.tech && (
                <p className="text-xs text-gray-600">
                  Technologies: {project.tech}
                </p>
              )}

              {project.description && (
                <p className="text-sm mt-1">{project.description}</p>
              )}

              {project.github && (
                <p className="text-xs text-blue-600">
                  GitHub: {project.github}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {data.references?.length > 0 && (
        <section className="mt-6">
          <h2 className="uppercase text-sm font-bold border-b pb-1">
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
  );
};

export default TraditionalTemplate;
