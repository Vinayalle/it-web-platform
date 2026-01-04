import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { features } from "../data/features";
// import { CountUp } from "react-countup";

const Home = () => {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="text-white bg-gray-950">
        <div className="px-6 mx-auto text-center max-w-7xl py-28">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Build Product-Grade Software <br />
            With Modern Engineering
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
            Scalable, secure and performance-driven solutions using
            Java, Spring Boot, React and Cloud.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <button className="px-6 py-3 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-700 rounded-lg">
              View Docs
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white">
        <div className="grid grid-cols-2 gap-8 px-6 py-16 mx-auto text-center max-w-7xl md:grid-cols-4">
          {[
            { value: 100000, label: "Users", suffix: "+" },
            { value: 99.9, label: "Uptime", suffix: "%" },
            { value: 1000000, label: "Requests / Day", suffix: "+" },
            { value: 50, label: "Enterprise Clients", suffix: "+" }
          ].map((item) => (
            <div key={item.label}>
              <h3 className="text-3xl font-bold">{item.value}
                {/* <CountUp
                  end={item.value}
                  duration={2}
                  separator=","
                  decimals={item.value % 1 !== 0 ? 1 : 0}
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                /> */}
              </h3>
              <p className="mt-1 text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50">
        <div className="px-6 py-24 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center">
            Why Teams Choose Us
          </h2>

          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = f.icon;

              return (
                <div
                  key={i}
                  className="p-6 transition bg-white shadow-sm rounded-2xl hover:shadow-md"
                >
                  <Icon className="w-8 h-8 mb-4 text-blue-600" />
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white">
        <div className="px-6 py-24 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center">
            How It Works
          </h2>

          <div className="grid gap-10 mt-16 text-center md:grid-cols-3">
            {["Plan & Design", "Build & Deploy", "Scale & Optimize"].map((step, i) => (
              <div key={step}>
                <div className="text-4xl font-bold text-indigo-600">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Industry best practices with proven workflows.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-50">
        <div className="max-w-5xl px-6 py-24 mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Trusted by Engineers
          </h2>

          <Swiper className="mt-12" slidesPerView={1} loop>
            {[
              "Amazing architecture and clean code standards.",
              "Helped us scale to millions of users smoothly.",
              "Production-ready solutions with best practices."
            ].map((text, i) => (
              <SwiperSlide key={i}>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  “{text}”
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-white bg-indigo-600">
        <div className="px-6 py-20 mx-auto text-center max-w-7xl">
          <h2 className="text-3xl font-bold">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-indigo-100">
            Start building scalable products with confidence.
          </p>

          <button className="px-8 py-3 mt-8 font-medium text-indigo-600 bg-white rounded-lg">
            Start Free Trial
          </button>
        </div>
      </section>

    </main>
  );
};

export default Home;
