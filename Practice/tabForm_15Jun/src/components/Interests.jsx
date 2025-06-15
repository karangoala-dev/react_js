const Interests = ({ data, setData }) => {
  let interests = data.Interests.interests;
  const handleChange = (e) => {
    if (interests.includes(e.target.name)) {
      interests = interests.filter((i) => i != e.target.name);
    } else {
      interests.push(e.target.name);
    }

    setData((prev) => ({
      ...prev,
      Interests: {
        ...prev[Interests],
        interests: interests,
      },
    }));
  };
  return (
    <div className="interests">
      <span>
        <input
          type="checkbox"
          name="Coding"
          onChange={handleChange}
          checked={interests && interests.includes("Coding")}
        />
        Coding
      </span>
      <span>
        <input
          type="checkbox"
          name="Rust"
          onChange={handleChange}
          checked={interests && interests.includes("Rust")}
        />
        Rust
      </span>
      <span>
        <input
          type="checkbox"
          name="Football"
          onChange={handleChange}
          checked={interests && interests.includes("Football")}
        />
        Football
      </span>
    </div>
  );
};

export default Interests;
