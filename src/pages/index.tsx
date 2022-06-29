import Link from "next/link";

export default function Home() {
  return (
    <div className="container sb flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <h1 className="">
          Welcome to <span className="text-purple-700">Nextjs</span>,{" "}
          <span className="text-indigo-700">TailwindCSS</span> and{" "}
          <span className="text-gray-700">TypeScript</span>
        </h1>
        <h2 className="">
          Welcome to <span className="text-purple-700">Nextjs</span>,{" "}
          <span className="text-indigo-700">TailwindCSS</span> and{" "}
          <span className="text-gray-700">TypeScript</span>
        </h2>
        <p className="italic">
          Welcome to <span className="text-purple-700">Nextjs</span>,{" "}
          <span className="text-indigo-700">TailwindCSS</span> and{" "}
          <span className="text-gray-700">TypeScript</span>
        </p>
        <button>Make a Donation</button>
        <Link href="#">Click me</Link>
      </main>
    </div>
  );
}
