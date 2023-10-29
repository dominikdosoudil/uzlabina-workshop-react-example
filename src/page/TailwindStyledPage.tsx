import PageTitle from "../components/PageTitle.tsx";
import "./tailwind.css";

const TailwindStyledPage = () => {
  return (
    <div className="font-sans p-4">
      <PageTitle usedStylingName="tailwind" />
      <section className="flex flex-col gap-4">
        <article className="border-solid border-2 border-sky-500 p-4">
          <h3>Surviving the Long Haul</h3>
          <p>Life for women in the trucking industry.</p>
          <time className="text-gray-500">Jul 2016</time>
        </article>
        <article className="border-solid border-2 border-sky-500 p-4">
          <h3>The Interior Stadium</h3>
          <p>The joys of watching baseball.</p>
          <time className="text-gray-500">Feb 1971</time>
        </article>
        <article className="border-solid border-2 border-sky-500 p-4">
          <h3>Searching for Robert Johnson</h3>
          <p>The legacy of a phantom bluesman.</p>
          <time className="text-gray-500">Nov 2008</time>
        </article>
      </section>
    </div>
  );
};

export default TailwindStyledPage;
