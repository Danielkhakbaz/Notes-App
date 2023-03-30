"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import NoteContainer from "app/notes/note/note-container";

const NotesPage = () => {
  const router = useRouter();

  const sizes = ["small", "medium", "large"];

  useEffect(() => {
    if (!localStorage.getItem("notes")) {
      localStorage.setItem(
        "notes",
        JSON.stringify([
          {
            id: uuidv4(),
            title: "Test",
            text: "This text is for text only.",
            size: sizes[Math.floor(Math.random() * 3)],
          },
        ])
      );
    }

    router.refresh();
  });

  return (
    <>
      <NoteContainer notes={JSON.parse(localStorage?.getItem("notes"))} />
    </>
  );
};

export default NotesPage;
