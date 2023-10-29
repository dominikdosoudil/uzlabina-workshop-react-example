import PageTitle from "../components/PageTitle.tsx";
import classes from "./scss-styles.module.scss";

const ScssStyledPage = () => {
  return (
    <div className={classes.pageContainer}>
      <PageTitle usedStylingName="SCSS" />
      <section className={classes.articles}>
        <article>
          <h3>Surviving the Long Haul</h3>
          <p>Life for women in the trucking industry.</p>
          <time>Jul 2016</time>
        </article>
        <article>
          <h3>The Interior Stadium</h3>
          <p>The joys of watching baseball.</p>
          <time>Feb 1971</time>
        </article>
        <article>
          <h3>Searching for Robert Johnson</h3>
          <p>The legacy of a phantom bluesman.</p>
          <time>Nov 2008</time>
        </article>
      </section>
    </div>
  );
};

export default ScssStyledPage;
