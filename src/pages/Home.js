import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import ExerciseDetail from "../pages/ExerciseDetail";
// import Home from "./pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BmiCalculator from "./BmiCalculator";
import Contact from "../pages/Contact";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import { auth } from "../firebase";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <>
      <Box>
        <HeroBanner />
        {/* <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      /> */}
      </Box>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
