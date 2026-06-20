import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";

export default function Home() {
  return (
    <div>
      <PageTitle
        title="Home"
        description="Next.js, TypeScript, Tailwind CSS を使ってWebアプリを作っています。"
      />

      <section className="grid gap-6 pb-16 md:grid-cols-3">
        <Link
          href="/profile"
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-gray-950">Profile</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            自己紹介や学習中の技術についてまとめています。
          </p>
        </Link>

        <Link
          href="/works"
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-gray-950">Works</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            制作物や参加したプロジェクトを掲載しています。
          </p>
        </Link>

        <Link
          href="/contact"
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold text-gray-950">Contact</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            連絡先やSNSリンクを掲載しています。
          </p>
        </Link>
      </section>
    </div>
  );
}