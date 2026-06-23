import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { profile } from "@/data/profile";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-5xl px-6">
        <PageTitle
          title="Profile"
          description="自己紹介、学習中の技術、興味のある分野についてまとめています。"
        />

        <section className="space-y-10 pb-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-950">About me</h2>
            <p className="mt-4 leading-8 text-gray-600">
              {profile.description}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-950">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
