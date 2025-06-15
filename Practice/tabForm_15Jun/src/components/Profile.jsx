const Profile = ({ data, setData }) => {
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData((prev) => ({
      ...prev,
      Profile: {
        ...prev.Profile,
        [key]: value,
      },
    }));
  };
  return (
    <div className="profile">
      <div className="item">
        Name:{" "}
        <input
          type="text"
          name="name"
          value={data.Profile.name}
          onChange={handleChange}
        />
      </div>
      <div className="item">
        Age:{" "}
        <input
          type="text"
          name="age"
          value={data.Profile.age}
          onChange={handleChange}
        />
      </div>
      <div className="item">
        Email:{" "}
        <input
          type="text"
          name="email"
          value={data.Profile.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Profile;
