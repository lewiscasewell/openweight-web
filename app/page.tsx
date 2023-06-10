import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen items-center">
      <div className="w-full lg:w-1/2 p-12 flex justify-center items-center">
        <Image
          src="/home-screen.png"
          alt="home-screen"
          width={300}
          height={600}
          className="rounded-3xl shadow-lg"
        />
      </div>
      <div className="p-12 w-full lg:w-1/2">
        <div className="flex flex-col items-center space-y-4 pt-10">
          <Image
            src="/openweight-logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <h1 className="text-4xl font-extrabold text-center">Openweight</h1>
          <p className="text-center">
            Openweight is a bodyweight tracking app that allows you to track
            your weight and see your progress over time.
          </p>
        </div>
        <ul className="mt-12 list-disc font-semibold">
          <li className="mr-4">
            Track weights in <strong>kg</strong> and see your progress over time
          </li>
          <li className="mr-4">
            Calculate daily calorie target based on your lifestyle and genetics
          </li>
          <li className="mr-4">
            Calculate how many days until you reach your goal weight
          </li>
        </ul>
        <div className="my-10">
          <Link
            target="_blank"
            href="https://apps.apple.com/us/app/openweight/id1586430229"
          >
            Click here to view in app store
          </Link>
        </div>
      </div>
    </main>
  );
}
