"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import { Heart, Upload } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const ShadcnUICard = () => {
  const [currentColor, setCurrentColor] = useState<string>(colors[0]);
  const [currentImg, setCurrentImg] = useState<string>(imgs[0]);
  const [counter, setCounter] = useState<number>(0);

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="m-auto max-w-6xl">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Main</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Electronics and telecomunication
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Portable</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Portable Speakers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex-col gap-6 md:gap-12 md:flex-row flex ">
          {/* GALLERY */}
          <div className="basis-1/2	grow-0 flex-col xl:grow">
            <h1 className="scroll-m-20 text-3xl font-medium lg:text-4xl/normal mb-5 md:hidden">
              Bang & Olufsen BeoPlay A1 2nd Gen Portable Speaker
            </h1>
            <Image
              className="object-cover w-full select-none aspect-square rounded-xl mb-5"
              src={currentImg}
              width={"1024"}
              height={"1024"}
              alt="gallery-photo"
            />

            <Carousel
              opts={{
                align: "start",
              }}
            >
              <CarouselContent>
                {imgs.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/5">
                    <div className="flex aspect-square">
                      <Image
                        className="object-cover w-full select-none aspect-square rounded-xl cursor-pointer transition-all"
                        src={img}
                        width={"1024"}
                        height={"1024"}
                        alt="gallery-photo"
                        onClick={() => setCurrentImg(img)}
                        style={{
                          filter: img !== currentImg ? "grayscale(100%)" : "",
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* INFO */}
          <div className="basis-1/2 shrink-0 flex flex-col gap-5 md:gap-7 xl:shrink">
            {/* title */}
            <h1 className="scroll-m-20 text-3xl font-medium lg:text-4xl/normal  hidden md:block">
              Bang & Olufsen BeoPlay A1 2nd Gen Portable Speaker
            </h1>

            {/* colors */}
            <div className="flex gap-3 lg:gap-7  justify-between sm:justify-normal">
              {colors.map((color, index) => (
                <div
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
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* price */}
            <div className="flex justify-between items-center ">
              <p className="text-xl md:text-2xl font-medium">
                $210.00 - 250.00
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Upload height={"17"} strokeWidth={3} />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart height={"17"} strokeWidth={3} />
                </Button>
              </div>
            </div>

            {/* options */}
            <div className="flex justify-between gap-4 ">
              <Select>
                <SelectTrigger className="basis-1/2">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="basis-1/2">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  {colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* accordion */}
            <Accordion type="single" collapsible className="w-full ">
              <AccordionItem value="item-1">
                <AccordionTrigger>Shipping information</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  reiciendis saepe minus pariatur sint blanditiis, facere
                  veritatis, quis numquam veniam ullam, eveniet quo quia quam!
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* count & button */}
            <div className="flex gap-4 items-center justify-between flex-wrap	">
              <p>Quatity (pieces)</p>

              <div className="flex">
                <Button
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
                </Button>
              </div>

              <Button className="grow basis-full shrink-0 sm:basis-auto sm:shrink">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShadcnUICard;
