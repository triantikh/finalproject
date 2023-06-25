import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/student/${id}`);
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
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

    setStudent((prevStudent) => ({ ...prevStudent, [name]: value, faculty }));
  };

  return (
    <>
      {!student ? (
        <p>Loading ...</p>
      ) : (
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
            <img src={student.profilePicture} alt="Profile Picture" />
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
              <option value="">Select Program Study</option>
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
          <div>
            <label htmlFor="faculty">Faculty:</label>
            <Input
              type="text"
              id="faculty"
              name="faculty"
              value={student.faculty}
              onChange={handleChange}
              data-testid="faculty"
              readOnly
            />
          </div>
          <Button type="submit" data-testid="edit-btn">
            Save
          </Button>
        </form>
      )}
    </>
  );
};

export default EditStudent;