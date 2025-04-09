const Interests = ({ data, setData, errors }) => {
    const { interests } = data;
  
    const handleDataChange = (e) => {
      let updatedInterests = interests;
      let item = e.target.name;
      if (updatedInterests.includes(item)) {
        updatedInterests = updatedInterests.filter(
          (item) => item != e.target.name
        );
      } else {
        updatedInterests.push(item);
      }
  
      setData((prevState) => ({
        ...prevState,
        interests: updatedInterests,
      }));
    };
  
    return (
      <div>
        <div>
          <input
            name="java"
            type="checkbox"
            checked={data.interests.includes("java")}
            onChange={handleDataChange}
          />
          <label>Java</label>
        </div>
        <div>
          <input
            name="javascript"
            type="checkbox"
            checked={data.interests.includes("javascript")}
            onChange={handleDataChange}
          />
          <label>Javascript</label>
        </div>
        <div>
          <input
            name="python"
            type="checkbox"
            checked={data.interests.includes("python")}
            onChange={handleDataChange}
          />
          <label>Python</label>
        </div>
        {errors.interests && <label className="error">{errors.interests}</label>}
      </div>
    );
  };

  export default Interests;