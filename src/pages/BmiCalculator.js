import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchData, BMIOptions } from "../utils/fetchData";

const BmiCalculator = () => {
  // set state of weight,height and age
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [BMI, setBMI] = useState("Not Calcualted");
  const [health, setHealth] = useState("Not Calcualted");
  const [healthyBmiRange, setHealthyBmiRange] = useState("Not Calcualted");
  const [loading, setLoading] = useState(false);

  const fetchBMICalData = async () => {
    if (
      weight > 40 &&
      weight < 160 &&
      height > 130 &&
      height < 230 &&
      age > 0 &&
      age < 80
    ) {
      const BMIData = await fetchData(
        `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,
        BMIOptions
      );
      setLoading(true);
      if (BMIData.status_code === 200) {
        console.log(BMIData);
        setBMI(BMIData.data.bmi);
        setHealth(BMIData.data.health);
        setHealthyBmiRange(BMIData.data.healthy_bmi_range);
      } else {
        alert("Unable to fetch data from API");
      }
      window.scrollTo({ top: 1400, behavior: "smooth" });
    } else {
      alert("Please enter valid values");
    }
  };

  return (
    <div>
      <Stack
        p="80px"
        gap="30px"
        backgroundColor="#FFF"
        width="90%"
        margin="auto"
        mt="100px"
      >
        <TextField
          type="number"
          placeholder="Your Weight in Kg(must be 40kg to 160kg in range)"
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          type="number"
          placeholder="Your Height in CM (must be 130cm to 230cm in range)"
          onChange={(e) => setHeight(e.target.value)}
        />
        <TextField
          type="number"
          placeholder="Your Age(must be 0 to 80 in range)"
          onChange={(e) => setAge(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={fetchBMICalData}
          disabled={loading}
        >
          Calculate BMI
        </Button>
      </Stack>
      {BMI === "Not Calcualted" ? (
        ""
      ) : (
        <Stack
          p="80px"
          gap="30px"
          backgroundColor="#FFF"
          width="90%"
          margin="auto"
          mt="100px"
        >
          <Typography variant="h3">BMI Results</Typography>
          <Box>
            <Typography variant="h5">
              BMI:{" "}
              <span
                style={{
                  color: "#ffb700",
                  fontWeight: "600",
                  fontSize: "40px",
                }}
              >
                {BMI}
              </span>
            </Typography>
            <Typography variant="h5">
              HEALTH:{" "}
              <span
                style={{
                  color: "#ffb700",
                  fontWeight: "600",
                  fontSize: "40px",
                }}
              >
                {health}
              </span>
            </Typography>
            <Typography variant="h5">
              HEALTH_BMI_RANGE:{" "}
              <span
                style={{
                  color: "#ffb700",
                  fontWeight: "600",
                  fontSize: "40px",
                }}
              >
                {healthyBmiRange}
              </span>
            </Typography>
          </Box>
        </Stack>
      )}
    </div>
  );
};

export default BmiCalculator;
