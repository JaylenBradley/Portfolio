import data from "../data/certifications.json";

export default function Certifications({ limit }) {
  let certifications = data.certifications;
  if (limit) certifications = certifications.slice(0, limit);

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {certifications.map((cert, idx) => (
        <div
          key={idx}
          className="border border-primary rounded-xl p-4 flex flex-col items-center shadow"
        >
          <img
            src={cert.image}
            alt={cert.name}
            className="w-20 h-20 object-contain rounded-full border-2 border-primary mb-3"
          />
          <div className="text-lg font-bold text-text text-center mb-1">{cert.name}</div>
          <div className="text-muted text-sm mb-1">{cert.issuing_company}</div>
          <div className="text-xs text-muted mb-2">{cert.obtained}{cert.expires ? ` • Expires ${cert.expires}` : ""}</div>
          {cert.credential_link && (
            <a
              href={cert.credential_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted font-bold text-xs hover:text-accent transition"
            >
              View Credential
            </a>
          )}
          {cert.validation_number && (
            <div className="text-xs text-muted text-center mt-1">
              Validation Number: <span className="font-mono">{cert.validation_number}</span>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};