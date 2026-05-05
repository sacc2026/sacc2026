export default function SpeakersPage() {
  const speakers = [
    { name: "Prof. Alice Tan", affiliation: "NUS" },
    { name: "Prof. John Smith", affiliation: "MIT" },
    { name: "Dr. Mei Lin", affiliation: "Industry Research Lab" },
  ];

  return (
    <>
      <h2>Invited Speakers</h2>
      <ul>
        {speakers.map((s, i) => (
          <li key={i}>
            <strong>{s.name}</strong> – {s.affiliation}
          </li>
        ))}
      </ul>
    </>
  );
}
