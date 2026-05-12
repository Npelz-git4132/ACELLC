export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://heartage.health/#organization",
        name: "ACE HeartAge",
        legalName: "ACE Cardiometabolic LLC",
        url: "https://heartage.health",
        description:
          "A clinician-led cardiometabolic reversal program for health systems, payers, and employers.",
        medicalSpecialty: "Cardiology",
        availableService: {
          "@type": "MedicalTherapy",
          name: "ACE HeartAge Cardiometabolic Reversal Program",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://heartage.health/#org",
        name: "ACE Cardiometabolic LLC",
        url: "https://heartage.health",
        founder: { "@id": "https://heartage.health/#founder" },
      },
      {
        "@type": "Person",
        "@id": "https://heartage.health/#founder",
        name: "Anand Chockalingam",
        honorificPrefix: "Prof.",
        honorificSuffix: "MD, FACC, FAHA, FASE",
        jobTitle: "Founder & Director, ACE Cardiometabolic Program",
        worksFor: {
          "@type": "Hospital",
          name: "Vandalia Health / CAMC Institute for Academic Medicine",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
