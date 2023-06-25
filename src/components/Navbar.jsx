import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="black.100" py={4}>
      <Flex
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Heading as="h1" size="md">
          <Link to="/" data-testid="home-page">
            Student Portal
          </Link>
        </Heading>
        <Flex>
          <Button colorScheme="black" mx={2}>
            <Link to="/student" data-testid="student-page">
              All Student
            </Link>
          </Button>
          <Button variant="ghost" size="md" colorScheme="blue" mx={2}>
            <Link to="/add" data-testid="add-page">
              Add Student
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;