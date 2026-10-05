import { useRef, useState } from "react";
import AlbumGrid from "./components/Album/Albuns";
import IntroScreen from "./components/Intro/IntroScreen";
import ProjectPlayerView from "./components/Tracklist/ProjectPlayerView";
import Tracklist from "./components/Tracklist/Tracklist";
import AmbientSoundControl from "./components/ui/AmbientSoundControl";

export default function App() {
  const albumSectionRef = useRef(null);
  
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

  const scrollToAlbums = () => {
    albumSectionRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-y-auto relative flex flex-col items-center select-none">

      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 45% at 15% 0%, rgba(29,185,84,0.25), transparent 70%), radial-gradient(55% 45% at 85% 8%, rgba(13,107,50,0.30), transparent 70%), linear-gradient(180deg, #06170c 0%, #000000 42%, #000000 100%)",
        }}
      />

      <div 
        className="fixed inset-0 bg-[linear-gradient(to_right,rgba(29,185,84,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,185,84,0.14)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"
        style={{ transform: "perspective(500px) rotateX(60deg)", transformOrigin: "top" }}
      />

      {currentProject ? (
        <div className="w-full min-h-screen z-20 bg-black">
          <ProjectPlayerView 
            project={currentProject} 
            onBack={() => {
              setCurrentProject(null);
              setTimeout(() => scrollToAlbums(), 5);
            }} 
          />
        </div>
      ) : (
        <>
          <section className="min-h-screen w-full flex items-center justify-center z-10 shrink-0 p-6">
            <IntroScreen onEnter={scrollToAlbums} />
          </section>

          <section 
            ref={albumSectionRef} 
            className="min-h-screen w-full flex items-center justify-center z-10 p-6 sm:p-12 shrink-0 bg-black/50 backdrop-blur-sm border-t border-spotify/10"
          >
            {!selectedAlbum ? (
              <AlbumGrid 
                onBack={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                onSelectAlbum={setSelectedAlbum} 
              />
            ) : (
              <Tracklist 
                album={selectedAlbum} 
                onBack={() => setSelectedAlbum(null)} 
                onSelectProject={(proj) => {
                  setCurrentProject(proj); 
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                currentProject={currentProject}
              />
            )}
          </section>
        </>
      )}

      <AmbientSoundControl />
    </div>
  );
}
