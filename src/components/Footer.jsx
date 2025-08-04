import Socials from "./Socials";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mt-6 px-4 max-w-3xl mx-auto flex flex-row items-center justify-between py-14">
        {/* Left: copyright */}
        <section className="text-left">
          <p className="text-text text-xs text-muted-foreground flex items-center gap-1">
            <Icon name="copyright" className="size-4" />
            {new Date().getFullYear()}{" "}
            <a className="link text-text hover:text-text/50 font-bold ml-1 transition" href="/">
              jaylen-bradley-portfolio.vercel.app
            </a>
          </p>
        </section>
        {/* Right: socials */}
        <Socials variant="button"/>
      </div>
    </footer>
  );
}