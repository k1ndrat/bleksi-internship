import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import "./styles.css";
import { Box, Text } from "@radix-ui/themes";

interface props {
  title: string;
  value: string;
  children: React.ReactNode;
}

const MyAccordionItem = ({ title, children, value }: props) => {
  return (
    <Accordion.Item value={value} className="AccordionItem">
      <Accordion.Trigger className="AccordionTrigger  flex justify-between content-center	w-full">
        <Text className="p-4">{title}</Text>
        <Box className="p-4 AccordionChevron">
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Box>
      </Accordion.Trigger>
      <Accordion.Content className="AccordionContent">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default MyAccordionItem;
