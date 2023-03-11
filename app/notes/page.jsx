import { v4 as uuidv4 } from "uuid";
import LayoutContainer from "./layout/layout-container";

export const metadata = {
  title: "Notes | Notes App",
  icons: {
    icon: "/notes-icon.png",
    shortcut: "/notes-icon.png",
    apple: "/notes-icon.png",
    other: {
      rel: "notes-icon",
      url: "/notes-icon.png",
    },
  },
};

const NotesPage = async () => {
  const notes = [
    {
      id: uuidv4(),
      title: "The Important Note",
      text: "LA Lakers is the best team in the world! LA Lakers is the best team in the world! LA Lakers is the best team in the world!",
      size: "small",
    },
    {
      id: uuidv4(),
      title: "2",
      text: "22",
      size: "medium",
    },
    {
      id: uuidv4(),
      title: "3",
      text: "33",
      size: "large",
    },
    {
      id: uuidv4(),
      title: "4",
      text: "44",
      size: "small",
    },
    {
      id: uuidv4(),
      title: "5",
      text: "55",
      size: "medium",
    },
    {
      id: uuidv4(),
      title: "6",
      text: "66",
      size: "large",
    },
    {
      id: uuidv4(),
      title: "7",
      text: "77",
      size: "small",
    },
    {
      id: uuidv4(),
      title: "8",
      text: "88",
      size: "medium",
    },
    {
      id: uuidv4(),
      title: "9",
      text: "99",
      size: "large",
    },
    {
      id: uuidv4(),
      title: "0",
      text: "00",
      size: "small",
    },
    {
      id: uuidv4(),
      title: "4",
      text: "44",
      size: "medium",
    },
    {
      id: uuidv4(),
      title: "5",
      text: "55",
      size: "large",
    },
    {
      id: uuidv4(),
      title: "6",
      text: "66",
      size: "small",
    },
    {
      id: uuidv4(),
      title: "7",
      text: "77",
      size: "medium",
    },
    {
      id: uuidv4(),
      title: "8",
      text: "88",
      size: "large",
    },
    {
      id: uuidv4(),
      title: "9",
      text: "99",
      size: "small",
    },
    {
      id: uuidv4(),
      title: "0",
      text: "00",
      size: "medium",
    },
    {
      id: uuidv4(),
      title: "3",
      text: "33",
      size: "large",
    },
    {
      id: uuidv4(),
      title: "4",
      text: "44",
      size: "small",
    },
    {
      id: uuidv4(),
      title: "5",
      text: "55",
      size: "medium",
    },
    {
      id: uuidv4(),
      title: "6",
      text: "66",
      size: "large",
    },
  ];

  return (
    <>
      <LayoutContainer notes={notes} />
    </>
  );
};

export default NotesPage;
