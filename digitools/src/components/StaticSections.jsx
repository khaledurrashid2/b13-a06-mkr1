export function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-purple-600 py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-3 text-center text-white">
        <div>
          <p className="text-3xl md:text-4xl font-extrabold">50K+</p>
          <p className="text-violet-200 text-sm mt-1">Active Users</p>
        </div>
        <div className="border-x border-violet-400">
          <p className="text-3xl md:text-4xl font-extrabold">200+</p>
          <p className="text-violet-200 text-sm mt-1">Premium Tools</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-extrabold">4.9</p>
          <p className="text-violet-200 text-sm mt-1">Rating</p>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { num: "01", icon: "👤", title: "Create Account", desc: "Sign up for free in seconds. No credit card required to get started." },
    { num: "02", icon: "📦", title: "Choose Products", desc: "Browse our catalog and select the tools that fit your needs." },
    { num: "03", icon: "🚀", title: "Start Creating", desc: "Download and start using your premium tools immediately." },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4" id="features">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">

              <div className="absolute top-4 right-4 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{step.num}</span>
              </div>

              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                {step.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/Month",
      desc: "Perfect for getting started",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/Month",
      desc: "Best for professionals",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/Month",
      desc: "For teams and businesses",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white px-4" id="pricing">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs. Upgrade or downgrade any time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 text-left border ${
                plan.popular
                  ? "bg-violet-600 text-white border-violet-600 shadow-2xl scale-105"
                  : "bg-white text-gray-900 border-gray-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-white text-violet-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-xs mb-4 ${plan.popular ? "text-violet-200" : "text-gray-400"}`}>
                {plan.desc}
              </p>
              <div className="mb-6">
                <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "text-violet-200" : "text-gray-400"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${plan.popular ? "text-violet-100" : "text-gray-600"}`}>
                    <span className={plan.popular ? "text-white" : "text-violet-600"}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-bold transition ${
                  plan.popular
                    ? "bg-white text-violet-600 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction({ setActiveTab }) {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-violet-200 mb-8 text-lg">
          Join thousands of professionals who are already using DigiTools to work smarter. Start
          your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setActiveTab("products")}
            className="px-8 py-3 bg-white text-violet-600 font-bold rounded-full hover:bg-violet-50 transition shadow"
          >
            Explore Products
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-violet-600 transition">
            View Pricing
          </button>
        </div>
        <p className="text-violet-300 text-sm mt-5">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-violet-400 font-extrabold text-xl">Digi</span>
            <span className="text-white font-extrabold text-xl">Tools</span>
          </div>
          <p className="text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Templates", "Integrations"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
          { title: "Resources", links: ["Documentation", "Help Center", "Community", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-bold mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-violet-400 transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-white font-bold mb-4">Social Links</h4>
          <div className="flex gap-3">
            {["𝕏", "▶️", "𝐟"].map((icon, i) => (
              <a key={i} href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition text-sm">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-600">
        © 2026 DigiTools. All rights reserved. · Privacy Policy · Terms of Service
      </div>
    </footer>
  );
}