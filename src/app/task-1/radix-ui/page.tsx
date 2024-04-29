"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import MyAccordionItem from "@/components/MyAccordionItem";
import Image from "next/image";
// import classNames from "classnames";

const colors = [
  "#816051",
  "#1E848E",
  "#152E61",
  "#9A4E40",
  "#AF4E72",
  "#72D1EF",
];
const imgs = ["/01.png", "/02.png", "/03.png", "/04.png", "/05.png", "/06.png"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const RadixUICard = () => {
  const [currentColor, setCurrentColor] = useState<string>(colors[0]);
  const [currentSize, setCurrentSize] = useState<string>(sizes[0]);
  const [currentImg, setCurrentImg] = useState<string>(imgs[0]);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <Grid
        className="m-auto max-w-5xl"
        columns={"repeat(auto-fit, minmax(280px, 1fr))"}
        gap="1rem 2rem"
      >
        {/* GALLERY */}
        <Flex direction={"column"}>
          <Heading as="h2" className="mb-5 uppercase md:hidden">
            Gucci
          </Heading>
          <Box flexGrow={"1"}>
            <Image
              width={"1024"}
              height={"1024"}
              src={currentImg}
              alt="product"
              className="object-cover h-full w-full max-h-96 md:max-h-full"
            />
          </Box>
        </Flex>

        {/* GALLERY CONTROLS */}
        <Flex direction={"column"} gridColumnStart={"1"} gridRowStart={"2"}>
          <ScrollArea scrollbars="horizontal" style={{ height: "auto" }}>
            <Flex gap={"0.5rem"}>
              {imgs.map((img, index) => (
                <Box
                  key={index}
                  flexBasis={"calc(20% - 0.4rem)"}
                  flexShrink={"0"}
                  className="cursor-pointer"
                  onClick={() => setCurrentImg(img)}
                  style={{
                    border: currentImg === img ? "2px solid black" : "",
                  }}
                >
                  <Image
                    width={"1024"}
                    height={"1024"}
                    src={img}
                    alt="product"
                    className="object-cover h-full w-full"
                  />
                </Box>
              ))}
            </Flex>
          </ScrollArea>
        </Flex>

        {/* INFO */}
        <Box
          gridColumnStart={{
            initial: "1",
            sm: "2",
          }}
          gridColumnEnd={{
            initial: "2",
            sm: "4",
          }}
          gridRowStart={{
            initial: "3",
            sm: "1",
          }}
          gridRowEnd={{
            initial: "4",
            sm: "2",
          }}
        >
          <Heading as="h2" className="mb-5 uppercase hidden md:block">
            Gucci
          </Heading>
          <Text className="mb-7" as="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            alias unde rem dolorem nam quis libero et illo fugiat, eius, optio
            cupiditate provident totam voluptatem?
          </Text>

          {/* PRICE */}
          <Flex gap="0.3rem" align={"center"} className="mb-7">
            <Text className="text-stone-500 line-through">$180</Text>
            <Text className="font-bold" size="5">
              $110
            </Text>
            <Text className="text-yellow-500 font-medium">(45% OFF)</Text>
          </Flex>

          {/* OPTIONS */}
          <Flex direction={"column"} gap={"1rem"} className="mb-5">
            <Box>
              <Text className="mb-2" as="p">
                SIZE
              </Text>
              <Flex gap={"0.5rem"}>
                {sizes.map((size, index) => (
                  <Flex
                    key={index * 10}
                    className="w-9 h-9 rounded-full	transition-all cursor-pointer select-none	"
                    style={{
                      backgroundColor: currentSize === size ? "black" : "white",
                      color: currentSize === size ? "white" : "black",
                    }}
                    onClick={() => setCurrentSize(size)}
                    align={"center"}
                    justify={"center"}
                  >
                    {size}
                  </Flex>
                ))}
              </Flex>
            </Box>

            <Box>
              <Text className="mb-2" as="p">
                COLOR
              </Text>
              <Flex gap={"0.5rem"}>
                {colors.map((color, index) => (
                  <Box
                    key={index / 10}
                    className="w-9 h-9 rounded-full	cursor-pointer"
                    style={{
                      backgroundColor: color,
                      border: currentColor === color ? "2px solid black" : "",
                    }}
                    onClick={() => setCurrentColor(color)}
                  ></Box>
                ))}
              </Flex>
            </Box>
          </Flex>

          {/* BUTTONS */}
          <Flex
            gap={"1rem"}
            direction={{
              initial: "column",
              sm: "row",
            }}
          >
            <Button
              className="uppercase bg-black p-12 grow"
              radius="none"
              style={{
                padding: "2rem",
                backgroundColor: "black",
                textTransform: "uppercase",
                flexGrow: 1,
                border: "2px solid black",
              }}
            >
              Add to card
            </Button>
            <Button
              // className="cursor-pointer"
              radius="none"
              style={{
                padding: "2rem",
                backgroundColor: "white",
                color: "black",
                textTransform: "uppercase",
                border: "2px solid black",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Wishlist
            </Button>
          </Flex>
        </Box>

        {/* ACCORDIONS */}
        <Box
          gridColumnStart={{
            initial: "1",
            sm: "2",
          }}
          gridColumnEnd={{
            initial: "2",
            sm: "4",
          }}
          gridRowStart={{
            initial: "4",
            sm: "2",
          }}
          gridRowEnd={{
            initial: "5",
            sm: "3",
          }}
        >
          <Accordion.Root type="multiple">
            <Separator orientation="horizontal" my="1" size="4" />
            <MyAccordionItem title="Delivery Options" value="item-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ex ullam sed atque! Deleniti omnis, praesentium libero
              explicabo veniam dicta maxime corrupti dignissimos dolor aperiam.
            </MyAccordionItem>

            <Separator orientation="horizontal" my="1" size="4" />
            <MyAccordionItem title="Materials" value="item-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ex ullam sed atque! Deleniti omnis, praesentium libero
              explicabo veniam dicta maxime corrupti dignissimos dolor aperiam.
            </MyAccordionItem>

            <Separator orientation="horizontal" my="1" size="4" />
            <MyAccordionItem title="Care" value="item-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ex ullam sed atque! Deleniti omnis, praesentium libero
              explicabo veniam dicta maxime corrupti dignissimos dolor aperiam.
            </MyAccordionItem>
            <Separator orientation="horizontal" my="1" size="4" />
            <MyAccordionItem title="Cod Policy" value="item-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ex ullam sed atque! Deleniti omnis, praesentium libero
              explicabo veniam dicta maxime corrupti dignissimos dolor aperiam.
            </MyAccordionItem>
          </Accordion.Root>
        </Box>
      </Grid>
    </div>
  );
};

export default RadixUICard;
