export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
        Hi 👋! Welcome to I_Rate_Players - Your League of Legends Grading Platform.{" "}
        <a href="https://nextjs.org/">Review</a> previous matchese and file reports.{" "}
        <a href="https://www.netlify.com/products/functions/">
          I_Rate_Players
        </a>
        , <a href="https://www.netlify.com/products/forms/">submit a report</a>, and{" "}
        <a href="https://docs.netlify.com/routing/redirects/">crowd source</a>. Our
        aim is to unite the league community and hit the ground running
        with a few fun features.
      </p>

      <p>
        You can find the code for this project on GitHub at{" "}
        <a href="https://github.com/mlabenski/irateplayers">
            https://github.com/mlabenski/irateplayers
        </a>
        ! Happy coding!
      </p>
    </>
  );
}
