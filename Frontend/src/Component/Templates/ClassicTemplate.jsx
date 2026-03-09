import React from "react";

const ClassicTemplate = ({ data }) => {
  return (
    <div
      className="bg-white text-gray-900 px-12 py-10"
      style={{
        width: "794px",
        minHeight: "1123px",
        fontFamily: "Georgia, serif",
        fontSize: "14px",
        lineHeight: "1.6",
      }}
    >
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">{data.name}</h1>

        {data.title && <p className="text-lg mt-1">{data.title}</p>}

        <p className="text-sm text-gray-600 mt-2">
          {data.address}
          {data.address && " | "}
          {data.phone}
          {data.phone && " | "}
          {data.email}
        </p>
      </header>

      <hr className="border-gray-400 mb-6" />

      {data.profile && (
        <section className="grid grid-cols-4 gap-8 mb-6">
          <h2 className="text-xs font-bold uppercase text-gray-600">Profile</h2>

          <div className="col-span-3 text-justify">{data.profile}</div>
        </section>
      )}

      {data.experience?.length > 0 && (
        <>
          <hr className="border-gray-300 mb-6" />

          <section className="grid grid-cols-4 gap-8 mb-6">
            <h2 className="text-xs font-bold uppercase text-gray-600">
              Work Experience
            </h2>

            <div className="col-span-3 space-y-5">
              {data.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">
                      {exp.position} — {exp.company}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-500 italic">
                    {exp.startDate} – {exp.endDate}
                  </p>

                  {exp.description && (
                    <ul className="list-disc ml-5 mt-2">
                      {exp.description.split("\n").map((item, idx) => (
                        <li key={idx}>{item.trim()}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {data.education?.length > 0 && (
        <>
          <hr className="border-gray-300 mb-6" />

          <section className="grid grid-cols-4 gap-8 mb-6">
            <h2 className="text-xs font-bold uppercase text-gray-600">
              Education
            </h2>

            <div className="col-span-3 space-y-4">
              {data.education.map((edu, i) => (
                <div key={i}>
                  <h3 className="font-semibold">
                    {edu.degree}
                    {edu.field && `, ${edu.field}`} — {edu.school}
                  </h3>

                  <p className="text-sm text-gray-500 italic">
                    {edu.startYear} – {edu.endYear}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {data.skills?.length > 0 && (
        <>
          <hr className="border-gray-300 mb-6" />

          <section className="grid grid-cols-4 gap-8 mb-6">
            <h2 className="text-xs font-bold uppercase text-gray-600">
              Skills
            </h2>

            <div className="col-span-3 grid grid-cols-2 gap-3">
              {data.skills.map((skill, i) => (
                <div key={i}>
                  <span className="font-semibold">{skill.title}</span>:{" "}
                  {skill.name}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {data.projects?.length > 0 && (
        <>
          <hr className="border-gray-300 mb-6" />

          <section className="grid grid-cols-4 gap-8 mb-6">
            <h2 className="text-xs font-bold uppercase text-gray-600">
              Projects
            </h2>

            <div className="col-span-3 space-y-4">
              {data.projects.map((project, i) => (
                <div key={i}>
                  <h3 className="font-semibold">{project.name}</h3>

                  {project.tech && (
                    <p className="text-sm text-gray-600">
                      Technologies: {project.tech}
                    </p>
                  )}

                  {project.description && (
                    <p className="mt-1">{project.description}</p>
                  )}

                  {project.github && (
                    <p className="text-sm text-blue-600">
                      GitHub: {project.github}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {data.references?.length > 0 && (
        <>
          <hr className="border-gray-300 mb-6" />

          <section className="grid grid-cols-4 gap-8">
            <h2 className="text-xs font-bold uppercase text-gray-600">
              References
            </h2>

            <div className="col-span-3 space-y-3">
              {data.references.map((ref, i) => (
                <div key={i}>
                  <p className="font-semibold">{ref.name}</p>
                  {ref.position && <p>{ref.position}</p>}
                  {ref.company && <p>{ref.company}</p>}
                  {ref.phone && <p>{ref.phone}</p>}
                  {ref.email && <p>{ref.email}</p>}
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ClassicTemplate;
