import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "1.welcome",
  "2.mission",
  "3.history",
  "4.choose",
  "5.hdpe",
  "5.hdpe2",
  "6.sprikler",
  "6.sprikler2"
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "FrontPage",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://sunrisepipes.vercel.app/"
        >
          {/* <img className="w-20" src="/images/LOGO_TEXT.png" /> */}
          <div className="text-white text-2xl">Sunrise Pipes</div>
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

       {/* <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative font-rubic">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              DortexAI
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Ui/Ux Designer
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Digital Marketer
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Web Designer
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Graphic Designer
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              3d Artist
            </h2>
            
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              DortexAI
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Ui/Ux Designer
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Digital Marketer
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Web Designer
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
            3d Artist
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
            Graphic Designer
            </h2>
             <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              3d Generalist
            </h2>
            
          </div>
        </div>
      </div> */}
    </>
  );
};
