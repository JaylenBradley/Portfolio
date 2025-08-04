import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <main className="px-4 flex-1 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full py-14">
        <h1 className="text-4xl text-text w-full text-center md:text-left">
          My Projects
        </h1>
      </div>
      <Projects/>
    </main>
  );
}