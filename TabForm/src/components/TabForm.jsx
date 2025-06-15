import { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {
  const [errors, setErrors] = useState([]);
  const tabConfig = [
    {
      name: "Profile",
      component: Profile,
      validate: function () {
        if (data.name.length <= 2) {
          setErrors((prev) => ({
            ...prev,
            name: "Name must be longer than 2",
          }));
          return false;
        }
        if (data.age < 18) {
          setErrors((prev) => ({
            ...prev,
            age: "Age must be atleast 18",
          }));
          return false;
        }
        if (data.email.length < 5) {
          setErrors((prev) => ({
            ...prev,
            email: "Email must be in proper format",
          }));
          return false;
        }
        return true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: function () {
        if (data.interests.length == 0) {
          setErrors((prev) => ({
            ...prev,
            interests: "Atleast one interest must be selected",
          }));
          return false;
        }
        return true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: function(){
        return true;
      }
    },
  ];

  const [data, setData] = useState({
    name: "Karan",
    age: 25,
    email: "kg@email.in",
    interests: ["java", "javascript"],
    settings: {
      theme: "dark",
    },
  });

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const handleTabClick = (ind) => {
    setActiveComponent(ind);
  };

  const [activeComponent, setActiveComponent] = useState(0);

  const ActiveTab = tabConfig[activeComponent].component;

  const handlePrevClick = () => {
    if (tabConfig[activeComponent].validate()) {
      setActiveComponent((prevState) => prevState - 1);
    }
  };
  const handleNextClick = () => {
    if (tabConfig[activeComponent].validate()) {
      setActiveComponent((prevState) => prevState + 1);
    }
  };
  const handleSubmitClick = () => {
    console.log(data);
    //call some api
  };

  return (
    <div>
      <div className="tab-name-container">
        {tabConfig.map((item, ind) => (
          <div
            key={ind}
            className="tab-name"
            onClick={() => handleTabClick(ind)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        {<ActiveTab data={data} setData={setData} errors={errors} />}
      </div>
      <div className="footer">
        {activeComponent > 0 && (
          <button onClick={() => handlePrevClick()}>Prev</button>
        )}
        {activeComponent < tabConfig.length - 1 && (
          <button onClick={() => handleNextClick()}>Next</button>
        )}
        {activeComponent == tabConfig.length - 1 && (
          <button onClick={() => handleSubmitClick()}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;