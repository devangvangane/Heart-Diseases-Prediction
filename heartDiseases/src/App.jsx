import "./App.css";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    address: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: ""
  });

  const handleChange = (e) => {
    
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // const res = 
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Check Your Heart</h1>
      <hr className="mb-6" />
      <form className="flex gap-3 flex-col" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold mb-2">Personal Details</h2>
        <div className="flex flex-row gap-6 justify-between">
          <div>
            <label className=" font-semibold">Patient name : </label>
            <input
              type="text"
              className="border rounded-b-xs px-2 bg-gray-100"
              placeholder="Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className=" font-semibold">Patient age : </label>
            <input
              type="number"
              className="border rounded-b-xs px-2 bg-gray-100"
              placeholder="in years"
              required
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className=" font-semibold">Patient mobile number : </label>
            <input
              type="number"
              className="border rounded-b-xs px-2 bg-gray-100"
              placeholder="0123456789"
              required
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row gap-6 justify-between">
          <div>
          <label className="font-semibold ">Patient address :</label>
          <input
            type="text"
            className="border rounded-b-xs p-1 w-2xl h-10 bg-gray-100"
            required
            name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Permanent Address"
          />
        </div>
        <div>
            <label className=" font-semibold">Sex : </label>
            <select className="border rounded px-2 py-1 bg-gray-100" required name="sex"
              value={formData.sex}
              onChange={handleChange}>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </div>
        </div>

        <hr></hr>
        <div className="flex flex-row gap-6 justify-between">
          <div>
            <label className=" font-semibold">Chest pain : </label>
            <select className="border rounded px-2 py-1 bg-gray-100" required name="cp"
              value={formData.cp}
              onChange={handleChange}>
              <option value="0">Typical Angina</option>
              <option value="1">Atypical Angina</option>
              <option value="2">Non-anginal Pain</option>
              <option value="3">Asymptomatic</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Resting BP (trestbps):</label>
            <input
              type="number"
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              placeholder="in mm Hg"
              required
              name="trestbps"
              value={formData.trestbps}
              onChange={handleChange}
            />mm Hg
          </div>

          <div>
            <label className="font-semibold">Cholesterol (chol):</label>
            <input
              type="number"
              name="chol"
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              placeholder="in mg/dl"
              required
              value={formData.chol}
              onChange={handleChange}
            />mg/dl
          </div>
        </div>

        <div className="flex flex-row gap-6 justify-between">
          <div>
            <label className="font-semibold">Fasting Blood Sugar (fbs):</label>
            <select
              name="fbs"
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              required
              value={formData.fbs}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="1">Above 120 mg/dl (High)</option>
              <option value="0">120 mg/dl or lower (Normal)</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Resting ECG (restecg):</label>
            <select
              name="restecg"
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              required
              value={formData.restecg}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="0">Normal</option>
              <option value="1">ST-T wave abnormality</option>
              <option value="2">Left ventricular hypertrophy</option>
            </select>
          </div>          
        </div>

        <div className="flex flex-row gap-6 justify-between">
          <div>
            <label className="font-semibold">Max Heart Rate (thalach):</label>
            <input
              type="number"
              name="thalach"
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              required
              value={formData.thalach}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="font-semibold">
              Exercise Induced Angina (exang):
            </label>
            <select
              name="exang"
              required
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              value={formData.exang}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">ST Depression (oldpeak):</label>
            <input
              type="number"
              step="0.1"
              name="oldpeak"
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              required
              value={formData.oldpeak}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-row gap-6 justify-between">
          <div>
            <label className="font-semibold">Slope:</label>
            <select
              name="slope"
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              required
              value={formData.slope}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="0">Upsloping</option>
              <option value="1">Flat</option>
              <option value="2">Downsloping</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Major Vessels (ca):</label>
            <select
              name="ca"
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              required
              value={formData.ca}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Thal:</label>
            <select
              name="thal"
              required
              className="border rounded px-2 py-1 ml-2 bg-gray-100"
              value={formData.thal}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="0">Normal</option>
              <option value="1">Fixed defect</option>
              <option value="2">Reversible defect</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row gap-6 justify-center">
          <button type="submit" className="w-2xs">Check Result</button>
        </div>
      </form>
    </>
  );
}

export default App;
