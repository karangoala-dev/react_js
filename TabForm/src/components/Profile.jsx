const Profile = ({ data, setData, errors }) => {
    const handleDataChange = (e, field) => {
      setData((prevState) => ({
        ...prevState,
        [field]: e.target.value,
      }));
    };
    return (
      <div>
        <div>
          <label>Name : </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleDataChange(e, "name")}
          />
          {errors.name && <label className="error">{errors.name}</label>}
        </div>
        <div>
          <label>Age : </label>
          <input
            type="number"
            value={data.age}
            onChange={(e) => handleDataChange(e, "age")}
          />
          {errors.age && <label className="error">{errors.age}</label>}
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleDataChange(e, "email")}
          />
        </div>
        {errors.email && <label className="error">{errors.email}</label>}
      </div>
    );
  };

  export default Profile;
