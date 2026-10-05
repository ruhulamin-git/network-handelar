import Link from "next/link";
import {
    Activity,
    ArrowLeft,
    ArrowRight,
    Cpu,
    Database,
    Gauge,
    Globe,
    Layers3,
    RadioTower,
    ShieldCheck,
    Sparkles,
    Wifi,
} from "lucide-react";

const metrics = [
    { value: "99.98%", label: "Uptime-ready monitoring and alerting" },
    { value: "18ms", label: "Fast edge response for connected devices" },
    { value: "240+", label: "Asset signals unified into one control layer" },
];

const capabilities = [
    {
        icon: RadioTower,
        title: "Device telemetry",
        description: "Stream live status, health, and event data from sensors, gateways, and connected assets.",
    },
    {
        icon: ShieldCheck,
        title: "Secure connectivity",
        description: "Protect device traffic with managed authentication, encryption, and policy controls.",
    },
    {
        icon: Layers3,
        title: "System orchestration",
        description: "Coordinate workflows across factories, buildings, fleets, and distributed environments.",
    },
    {
        icon: Database,
        title: "Operational analytics",
        description: "Turn raw machine data into dashboards, trends, and decisions your teams can act on.",
    },
];

const steps = [
    {
        title: "Connect",
        description: "Link devices, gateways, protocols, and existing enterprise systems into one environment.",
    },
    {
        title: "Observe",
        description: "Track device behavior, performance anomalies, and critical alerts in real time.",
    },
    {
        title: "Optimize",
        description: "Use the collected data to reduce downtime, improve efficiency, and plan smarter operations.",
    },
];

const useCases = [
    "Smart buildings",
    "Industrial automation",
    "Fleet monitoring",
    "Predictive maintenance",
    "Energy optimization",
    "Remote asset management",
];

export default function Page() {
    return (
        <main className="relative overflow-hidden bg-[#03111a] text-white mt-20">
    <section className="relative overflow-hidden bg-white py-12">
  <div className="container-premium">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-cyan-700 text-sm font-semibold">
          <Wifi size={16} />
          Connected Operations Platform
        </div>

        <h1 className="mt-6 text-4xl lg:text-6xl text-slate-900 leading-tight">
          IoT Intelligence
          <span className="block text-cyan-600">
            Built for Modern Operations
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
          Connect devices, monitor assets, automate workflows,
          and transform operational data into actionable insights
          from a single intelligent platform.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-200"
          >
            Get Started
          </Link>

          <Link
            href="#capabilities"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-px hover:bg-slate-50"
          >
            Explore Features
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="/images/products/hero-iot.jpeg"
          alt="IoT Platform"
          className="rounded-3xl shadow-2xl w-full object-cover"
        />
      </div>

    </div>
  </div>
</section>

<section className="py-24 bg-white">
  <div className="container-premium">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Image */}
      <div className="relative">
        <img
          src="/images/products/iot-usecase.jpeg"
          alt="IoT Use Cases"
          className="rounded-[32px] shadow-xl w-full object-cover"
        />

        <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-lg">
          <p className="text-sm text-slate-500">Connected Devices</p>
          <h4 className="text-3xl text-slate-900">1,284+</h4>
        </div>
      </div>

      {/* Right Content */}
      <div>
        <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
          Industry Applications
        </span>

        <h2 className="mt-6 text-5xl text-slate-900 leading-tight">
          Built for real-world operations.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Monitor assets, automate maintenance, reduce downtime,
          and improve visibility across every connected environment.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {useCases.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
<section className="py-24 bg-slate-50">
  <div className="container-premium">

    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
        How It Works
      </span>

      <h2 className="mt-6 text-5xl text-slate-900">
        From Device To Insight
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        Connect, monitor, and optimize your IoT ecosystem through a
        streamlined workflow.
      </p>
    </div>

    <div className="mt-20 grid lg:grid-cols-4 gap-8">
      {[
        {
          number: "01",
          title: "Connect",
          text: "Integrate sensors, gateways, and enterprise systems."
        },
        {
          number: "02",
          title: "Monitor",
          text: "Track device status and health in real time."
        },
        {
          number: "03",
          title: "Automate",
          text: "Trigger alerts and workflows automatically."
        },
        {
          number: "04",
          title: "Optimize",
          text: "Use insights to improve operations and efficiency."
        }
      ].map((step) => (
        <div
          key={step.number}
          className="relative rounded-3xl bg-white p-8 shadow-sm border border-slate-200"
        >
          <div className="text-6xl text-[#131313] ">
            {step.number}
          </div>

          <h3 className="mt-4 text-2xl text-slate-900">
            {step.title}
          </h3>

          <p className="mt-4 text-slate-600 leading-7">
            {step.text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


        </main>
    );
}