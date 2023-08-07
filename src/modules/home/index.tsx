import Title from "./components/Title";
import Description from "./components/Description";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-between my-auto gap-16">
      <main className="flex flex-col items-center">
        <Title content={"NextJS Project Structure Templates"} />
        <Description content={"Please follows the instruction which you can find on readme.md on the folder root"} />
      </main>
      <footer className="mt-auto text-center p-4">
        <p>© {new Date().getFullYear()} Created by <Link
          href={'github.com/nooglersoon'}
        >
          rupawarna.studio</Link></p>
      </footer>
    </div>
  );
}
