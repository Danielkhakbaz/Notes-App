import Link from "next/link";

export const metadata = {
  title: "Home | Notes App",
  description:
    "a Note-app using LocalStorage API, so your data will never be removed unless you choose to remove it.",
  icons: {
    icon: "/notes-icon.png",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "Home | Notes App",
    "twitter:description":
      "a Note-app using LocalStorage API, so your data will never be removed unless you choose to remove it.",
    "twitter:url": "https://danial-notes-app.vercel.app/",
    "twitter:domain": "danial-notes-app.vercel.app",
    "twitter:image": "https://danieloo.vercel.app/notes-icon.png",
    "twitter:card": "summary_large_image",
    "og:title": "Home | Notes App",
    "og:description":
      "a Note-app using LocalStorage API, so your data will never be removed unless you choose to remove it.",
    "og:url": "https://danial-notes-app.vercel.app/",
    "og:image": "https://danieloo.vercel.app/notes-icon.png",
    "og:type": "website",
  },
};

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-medium text-2xl md:text-4xl">
              this is{" "}
              <span className="font-bold text-5xl md:text-6xl">Note App.</span>
            </h1>
            <p className="text-sm leading-6 tracking-wide py-6 md:text-lg md:leading-8">
              the World finest piece of technology is here. maybe ;)
              <br />
              You can{" "}
              <span className="text-sm underline md:text-lg">create</span>,{" "}
              <span className="text-sm underline md:text-lg">update</span> and{" "}
              <span className="text-sm underline md:text-lg">delete</span> your
              notes in here.
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

export default Home;
