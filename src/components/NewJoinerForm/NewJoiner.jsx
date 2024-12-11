import { useState } from "react";
import "./newjoiner.css";
import countryList from "../../data/countryList.json";
import departmentList from "../../data/department.json";

const NewJoiner = ({ onGenerate }) => {
  const sortedCountryList = countryList.sort((a, b) => {
    return a.country.localeCompare(b.country);
  });
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [adid, setAdid] = useState("");
  const [password, setPassword] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
  const [country, setCountry] = useState([""]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([""]);
  const [selectedCity, setSelectedCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const countryData = countryList.find(
      (country) => country.code === countryCode
    );
    setSelectedCountry(countryCode);
    setCountry(countryData.country);
    const sortedCities = countryData
      ? countryData.city.sort((a, b) => a.cityName.localeCompare(b.cityName))
      : [];
    setCities(sortedCities);
    setSelectedCity("");
    setAddress("");
    setZipCode("");
  };

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    const cityData = cities.find((city) => city.cityName === cityName);
    setSelectedCity(cityName);
    setAddress(cityData ? cityData.address : "");
    setZipCode(cityData ? cityData.zipCode : "");
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !emailAdd ||
      !adid ||
      !jobTitle ||
      !department ||
      !manager ||
      !country ||
      !selectedCity ||
      !address
    )
      return;
    const newEmploye = {
      firstName,
      lastName,
      emailAdd,
      adid,
      jobTitle,
      department,
      manager,
      country,
      password,
      selectedCountry,
      selectedCity,
      address,
      zipCode,
    };
    onGenerate(newEmploye);
  }
  return (
    <div className="form-container">
      <form className="newjoiner-Form" onSubmit={handleSubmit}>
        <h3>Employee Details Form</h3>
        <div className="flex-box">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) =>
              setFirstName(capitalizeFirstLetter(e.target.value))
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(capitalizeFirstLetter(e.target.value))}
          />
        </div>
        <div className="flex-box">
          <input
            type="emai"
            placeholder="Email Address"
            value={emailAdd}
            onChange={(e) => setEmailAdd(e.target.value)}
          />
          <input
            type="text"
            placeholder="ADID / OKTA ID"
            value={adid}
            minLength={4}
            maxLength={10}
            onChange={(e) => setAdid(e.target.value)}
          />
        </div>
        <div className="flex-box">
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(capitalizeFirstLetter(e.target.value))}
          />
        </div>
        <div className="flex-box">
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="" disabled>
              Select Department
            </option>
            {departmentList.map((dept) => (
              <option key={dept.id}>{dept.deptName}</option>
            ))}
          </select>
          {/* <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) =>
              setDepartment(capitalizeFirstLetter(e.target.value))
            }
          /> */}
          <input
            type="text"
            placeholder="Manager"
            value={manager}
            onChange={(e) => setManager(capitalizeFirstLetter(e.target.value))}
          />
        </div>
        <div className="flex-box">
          <select
            value={selectedCountry}
            className="countryOpt"
            onChange={handleCountryChange}
          >
            <option value="" disabled>
              --Select a Country--
            </option>

            {sortedCountryList.map((country) => (
              <option key={country.code} value={country.code}>
                {country.country}
              </option>
            ))}
          </select>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedCountry}
          >
            <option value="" disabled>
              --Select a City--
            </option>
            {cities.length > 0 &&
              cities.map((city, index) => (
                <option key={index} value={city.cityName}>
                  {city.cityName}
                </option>
              ))}
          </select>
        </div>
        <div className="flex-box-address">
          <input
            className="address"
            type="text"
            value={`${address} ${zipCode}`}
            readOnly
          />
        </div>
        <div className="btnGenerate-section">
          <button className="btnGenerate">
            <strong>GENERATE </strong>
          </button>
        </div>
      </form>
    </div>
  );
};
export default NewJoiner;
