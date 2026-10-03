import { useRef, useState } from "react";
import AlbumGrid from "./components/Album/Albuns";
import IntroScreen from "./components/Intro/IntroScreen";
import ProjectPlayerView from "./components/Tracklist/ProjectPlayerView";
import Tracklist from "./components/Tracklist/Tracklist";

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
    <div className="min-h-screen bg-[#0b0b0e] text-white font-mono overflow-y-auto relative flex flex-col items-center select-none">
      
      <div 
        className="fixed inset-0 bg-[linear-gradient(to_right,#1f1a3a_1px,transparent_1px),linear-gradient(to_bottom,#1f1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15 pointer-events-none"
        style={{ transform: "perspective(500px) rotateX(60deg)", transformOrigin: "top" }}
      />

      {currentProject ? (
        <div className="w-full min-h-screen z-20 bg-[#0b0b0e]">
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
            className="min-h-screen w-full flex items-center justify-center z-10 p-6 sm:p-12 shrink-0 bg-[#0c0c10]/40 backdrop-blur-sm border-t border-purple-500/10"
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
    </div>
  );
}
