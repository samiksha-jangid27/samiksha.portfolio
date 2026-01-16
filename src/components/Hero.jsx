"use client";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] px-8 py-20">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center gap-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] gap-4">

          {/* LEFT */}
          <div className="lg:col-span-3 lg:row-span-3 flex flex-col gap-4">
            <div className="bg-neutral-800 rounded-3xl p-8 flex-2">
              building
            </div>
            <div className="bg-neutral-800 rounded-3xl p-8 flex-1">
              skills
            </div>
          </div>

          {/* CENTER TOP row 1 */}
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8">
            github
          </div>
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8">
            linkedin
          </div>

          {/* intro card */}
          <div className="lg:col-span-5 lg:row-span-2 bg-neutral-800 rounded-3xl p-8">
            samiksha
          </div>

          {/* CENTER SECOND row 2 */}
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8">
            resume
          </div>
          <div className="lg:col-span-2 bg-neutral-800 rounded-3xl p-8">
            mail
          </div>

          {/* projects card */}
          <div className="lg:col-start-4 lg:col-span-9 lg:row-start-3 bg-neutral-800 rounded-3xl p-8">
            project
          </div>

        </div>
      </div>
    </section>
  );
}
