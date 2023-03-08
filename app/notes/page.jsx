import Link from "next/link";

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

const getNotes = async () => {
  const result = await fetch("http://127.0.0.1:8090/api/collections/notes");
  const data = await result.json();

  return data;
};

const NotesPage = async () => {
  const notes = await getNotes();

  console.log(notes);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-medium">
              this is <span className="font-bold text-6xl">Note</span>{" "}
              <span className="font-bold text-6xl">App</span>.
            </h1>
            <p className="py-6 leading-8 tracking-wide">
              the World finest piece of technology is here. maybe ;)
              <br />
              You can <span className="text-lg underline">create</span>,{" "}
              <span className="text-lg underline">update</span> and{" "}
              <span className="text-lg underline">delete</span> your notes in
              here.
              <br />
              Don&apos;t worry, We&apos;ll save your data via LocalStorage API,
              so You&apos;ll never lose them.
              <br />
              ❤️
            </p>
            <Link href="/notes">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
