import { v4 as uuidv4 } from "uuid";
import LayoutContainer from "app/notes/layout/layout-container";

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
  const sizes = ["small", "medium", "large"];

  const notes = [
    {
      id: uuidv4(),
      title: "2",
      text: "22",
      size: sizes[Math.floor(Math.random() * 3)],
    },
    {
      id: uuidv4(),
      title: "The Important Note",
      text: "LA Lakers is the best team in the world! LA Lakers is the best team in the world! LA Lakers is the best team in the world!",
      size: sizes[Math.floor(Math.random() * 3)],
    },
  ];

  return (
    <>
      <LayoutContainer notes={notes} />
    </>
  );
};

export default NotesPage;
