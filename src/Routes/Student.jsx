import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Table, Box, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Tfoot  } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterFaculty, setFilterFaculty] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/student");
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleFilterChange = (e) => {
    setFilterFaculty(e.target.value);
  };

  const filteredStudents =
    filterFaculty !== "All"
      ? students.filter((student) => student.faculty === filterFaculty)
      : students;

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Select
            value={filterFaculty}
            onChange={handleFilterChange}
            data-testid="filter"
          >
            <option value="All">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </Select>
          <TableContainer>
          <Table id="table-student">
            <TableCaption>ABC</TableCaption>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Full Name</Th>
                <Th>Faculty</Th>
                <Th>Program Study</Th>
                <Th>Option</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredStudents.map((student, index) => (
                <Tr key={student.id} className="student-data-row">
                  <Td>{index + 1}</Td>
                  <Td>
                    <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                  </Td>
                  <Td>{student.faculty}</Td>
                  <Td>{student.programStudy}</Td>
                  <Td>
                    <button
                      onClick={() => handleDelete(student.id)}
                      data-testid={`delete-${student.id}`}
                    >
                      Delete
                    </button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default Student;