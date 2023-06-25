import { Box, Grid } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer"
      position="fixed" 
      bottom="0"
      left="95"
      right="10"
      width="90%" 
    >
      <Grid
        templateColumns="8fr 8fr"
        align="center"
        justify="center"
        h="40px"
        
        borderTop="1px solid"
        borderColor="Blue"
      >
        <p className="studentName" style={{ margin: 10 }}>
          Trianti Khoerunnisa
        </p>
        <p className="studentId" style={{ margin: 10 }}>
          FE5587585
        </p>
      </Grid>
    </Box>
  );
};

export default Footer;