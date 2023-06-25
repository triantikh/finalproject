import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";

const AddStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const data = await response.json();
      console.log("Success: ", data);
      navigate("/student");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let faculty = ""; // Initialize faculty variable

    if (name === "programStudy") {
      // Check the value of programStudy and set the faculty accordingly
      switch (value) {
        case "Ekonomi":
        case "Manajemen":
        case "Akuntansi":
          faculty = "Fakultas Ekonomi";
          break;
        case "Administrasi Publik":
        case "Administrasi Bisnis":
        case "Hubungan Internasional":
          faculty = "Fakultas Ilmu Sosial dan Politik";
          break;
        case "Teknik Sipil":
        case "Arsitektur":
          faculty = "Fakultas Teknik";
          break;
        case "Matematika":
        case "Fisika":
        case "Informatika":
          faculty = "Fakultas Teknologi Informasi dan Sains";
          break;
        default:
          faculty = ""; // Set faculty to empty if none of the cases match
          break;
      }
    }

    setStudent({ ...student, [name]: value, faculty });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            value={student.fullname}
            onChange={handleChange}
            data-testid="name"
            required
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <Input
            type="text"
            id="profilePicture"
            name="profilePicture"
            value={student.profilePicture}
            onChange={handleChange}
            data-testid="profilePicture"
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            id="address"
            name="address"
            value={student.address}
            onChange={handleChange}
            data-testid="address"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={student.phoneNumber}
            onChange={handleChange}
            data-testid="phoneNumber"
            required
          />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <Input
            type="text"
            id="birthDate"
            name="birthDate"
            value={student.birthDate}
            onChange={handleChange}
            data-testid="date"
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <Input
            type="text"
            id="gender"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            data-testid="gender"
            required
          />
        </div>
        <div>
          <label htmlFor="programStudy">Program Study:</label>
          <select
            id="programStudy"
            name="programStudy"
            value={student.programStudy}
            onChange={handleChange}
            data-testid="prody"
            required
          >
            <option value="">-- Select Program Study --</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">Hubungan Internasional</option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </select>
        </div>
        <Button type="submit" data-testid="add-btn">
          Add Student
        </Button>
      </form>
    </>
  );
};

export default AddStudent;