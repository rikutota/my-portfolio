import { profile } from "@/data/profile";

export function Skills() {
  return (
    <section className="border-t border-gray-200 py-16">
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
    </section>
  );
}