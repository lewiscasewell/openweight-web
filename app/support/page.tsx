import Link from "next/link";

export default function Support() {
  return (
    <main className="pt-20 min-h-screen items-center px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-10">Support</h1>
      <p>
        For support, please email{" "}
        <Link href="mailto:lewiscasewell@hotmail.co.uk">
          lewiscasewell@hotmail.co.uk
        </Link>
      </p>
    </main>
  );
}
