"use client";

import React, { useState } from "react";

// import { Heart, Upload } from "lucide-react";

import Image from "next/image";
import CustomBreadcrumbs from "@/components/min-ui/custom-breadcrumbs/custom-breadcrumbs";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CarouselThumbnail from "@/components/min-ui/carousel-thumbnail";

const colors = [
  "#6C6C6C",
  "#307D6B",
  "#D0D0D2",
  "#E7D6D6",
  "#BAB9A9",
  "#DFCAA7",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const imgs = ["/11.png", "/12.png", "/14.png", "/15.png", "/16.png", "/17.png"];

const _carouselsExample = [
  {
    id: "1",
    title: "text",
    coverUrl: imgs[0],
    description: "text",
  },
  {
    id: "2",
    title: "text",
    coverUrl: imgs[1],
    description: "text",
  },
  {
    id: "3",
    title: "text",
    coverUrl: imgs[2],
    description: "text",
  },
  {
    id: "4",
    title: "text",
    coverUrl: imgs[3],
    description: "text",
  },
  {
    id: "5",
    title: "text",
    coverUrl: imgs[4],
    description: "text",
  },
  {
    id: "6",
    title: "text",
    coverUrl: imgs[5],
    description: "text",
  },
];

const ShadcnUICard = () => {
  const [currentColor, setCurrentColor] = useState<string>(colors[0]);
  const [counter, setCounter] = useState<number>(0);

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <Box className="m-auto max-w-6xl">
        {/* <Breadcrumb > */}
        <CustomBreadcrumbs
          links={[
            { name: "Main", href: "#" },
            { name: "Electronics and telecomunication", href: "#" },
            { name: "Portable", href: "#" },
            { name: "Portable Speakers", href: "#" },
          ]}
        />

        <Box className="flex-col gap-6 md:gap-12 md:flex-row flex ">
          {/* GALLERY */}
          <Box className="basis-1/2	grow-0 flex-col xl:grow xl:max-w-lg overflow-hidden">
            <Typography
              variant="h1"
              className="scroll-m-20 text-2xl font-medium lg:text-4xl/normal mb-5 md:hidden"
            >
              Bang & Olufsen BeoPlay A1 2nd Gen Portable Speaker
            </Typography>

            {/* <Carousel> */}
            <CarouselThumbnail data={_carouselsExample} />
          </Box>

          {/* INFO */}
          <Box className="basis-1/2 shrink-0 flex flex-col gap-5 md:gap-7 xl:shrink">
            {/* title */}
            <Typography
              variant="h1"
              className="scroll-m-20 text-3xl font-medium lg:text-4xl/normal  hidden md:block"
            >
              Bang & Olufsen BeoPlay A1 2nd Gen Portable Speaker
            </Typography>

            {/* colors */}
            <Box className="flex gap-3 lg:gap-7  justify-between sm:justify-normal">
              {colors.map((color, index) => (
                <Box
                  key={index / 10}
                  className="basis-16 aspect-square sm:basis-auto sm:w-12 sm:h-12 rounded-full	cursor-pointer p-1 sm:p-1.5 transition-all"
                  style={{
                    // backgroundColor: color,
                    border:
                      currentColor === color
                        ? `2px solid ${color}`
                        : "2px solid transparent",
                  }}
                  onClick={() => setCurrentColor(color)}
                >
                  <Box
                    className="w-full h-full rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>

            {/* price */}
            <Box className="flex justify-between items-center ">
              <Typography className="text-xl md:text-2xl font-medium">
                $210.00 - 250.00
              </Typography>
              <Box className="flex gap-4">
                <Button
                  variant="outlined"
                  sx={{
                    height: "2.5rem",
                    width: "2.5rem",
                    minWidth: "0",
                    p: 0,
                    color: "black",
                    border: "2px solid black",
                    "&:hover": {
                      border: "2px solid black",
                    },
                  }}
                >
                  <FileUploadIcon
                    sx={{
                      fontSize: "1.25rem",
                    }}
                  />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    height: "2.5rem",
                    width: "2.5rem",
                    minWidth: "0",
                    p: 0,
                    color: "black",
                    border: "2px solid black",
                    "&:hover": {
                      border: "2px solid black",
                    },
                  }}
                >
                  <FavoriteBorderIcon
                    sx={{
                      fontSize: "1.25rem",
                    }}
                  />
                </Button>
              </Box>
            </Box>

            {/* options */}
            <Box className="flex justify-between gap-4 ">
              <Autocomplete
                className="basis-1/2"
                disablePortal
                id="sizes"
                options={sizes}
                renderInput={(params) => <TextField {...params} label="Size" />}
              />
              <Autocomplete
                className="basis-1/2"
                disablePortal
                id="colors"
                options={colors}
                renderInput={(params) => (
                  <TextField {...params} label="Color" />
                )}
              />
            </Box>

            {/* accordion */}
            <Accordion
              sx={{
                boxShadow: "none",
                border: "none",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  p: 0,
                  fontWeight: "bold",
                }}
              >
                Shipping information
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  p: 0,
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                reiciendis saepe minus pariatur sint blanditiis, facere
                veritatis, quis numquam veniam ullam, eveniet quo quia quam!
              </AccordionDetails>
            </Accordion>

            {/* count & button */}
            <Box className="flex gap-4 items-center justify-between flex-wrap	">
              <Typography>Quatity (pieces)</Typography>

              <Box className="flex">
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                  <Button
                    variant="outlined"
                    sx={{
                      height: "2.5rem",
                      width: "2.5rem",
                      minWidth: "0",
                      p: 0,
                      fontSize: "1.5rem",
                      color: "black",
                      border: "1px solid black",
                      "&:hover": {
                        border: "1px solid black",
                      },
                    }}
                    onClick={() =>
                      setCounter((prev) => (prev !== 0 ? prev - 1 : 0))
                    }
                  >
                    -
                  </Button>
                  <TextField
                    sx={{
                      height: "2.5rem",
                      width: "2.5rem",
                      minWidth: "0",
                      p: 0,
                      color: "black",
                      border: "1px solid black",
                      "& input": {
                        border: "none",
                        height: "2.5rem",
                        p: 0,
                        textAlign: "center",
                      },
                    }}
                    value={counter}
                    onChange={(e) => {
                      if (e.target.value === "" && counter !== 0) {
                        setCounter(0);
                      } else if (e.target.value !== "") {
                        setCounter(parseInt(e.target.value));
                      }
                    }}
                  />
                  <Button
                    sx={{
                      height: "2.5rem",
                      width: "2.5rem",
                      fontSize: "1.5rem",
                      minWidth: "0",
                      p: 0,
                      color: "black",
                      border: "1px solid black",
                      "&:hover": {
                        border: "1px solid black",
                      },
                    }}
                    onClick={() =>
                      setCounter((prev) => (prev < 99 ? prev + 1 : 99))
                    }
                  >
                    +
                  </Button>
                </ButtonGroup>
                {/* <Button
                  variant={"counterLeft"}
                  size={"counter"}
                  onClick={() =>
                    setCounter((prev) => (prev !== 0 ? prev - 1 : 0))
                  }
                >
                  -
                </Button>
                <Input
                  maxLength={2}
                  value={counter}
                  onChange={(e) => {
                    console.log(e.target.value);
                    if (e.target.value === "" && counter !== 0) {
                      setCounter(0);
                    } else if (e.target.value !== "") {
                      setCounter(parseInt(e.target.value));
                    }
                  }}
                />
                <Button
                  variant={"counterRight"}
                  size={"counter"}
                  onClick={() =>
                    setCounter((prev) => (prev < 99 ? prev + 1 : 99))
                  }
                >
                  +
                </Button> */}
              </Box>

              <Button
                className="grow basis-full shrink-0 sm:basis-auto sm:shrink bg-black"
                sx={{
                  height: "2.5rem",
                  color: "white",
                  ":hover": {
                    backgroundColor: "gray",
                  },
                }}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default ShadcnUICard;
