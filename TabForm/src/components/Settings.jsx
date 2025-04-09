const Settings = ({ data, setData }) => {
    const handleDataChange = (e) => {
      setData((prevState) => ({
        ...prevState,
        settings: {
          theme: e.target.name,
        },
      }));
    };
    return (
      <div>
        <div>
          <input
            name="light"
            type="radio"
            checked={data.settings.theme === "light"}
            onChange={handleDataChange}
          />
          <label>Light</label>
        </div>
        <div>
          <input
            name="dark"
            type="radio"
            checked={data.settings.theme === "dark"}
            onChange={handleDataChange}
          />
          <label>Dark</label>
        </div>
      </div>
    );
  };
 
  export default Settings;