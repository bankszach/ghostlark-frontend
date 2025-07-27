import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, FileText, Rocket } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <section id="hero" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-semibold text-black tracking-tight">
                Launch Private. Operate Powerful.
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-inter text-gray">
                We form your NM LLC, mask your identity, and ship a live web app—under one invoice.
              </p>
              <div className="mt-8 flex space-x-6">
                <Button size="lg" variant="default" className="rounded-full px-8 py-3 font-poppins">
                  Get Started Anonymously
                </Button>
                <a href="#how-it-works" className="text-base font-inter text-black underline">
                  How It Works
                </a>
              </div>
            </div>
            <div className="w-full flex justify-center lg:justify-end">
              <div className="bg-black rounded-2xl flex items-center justify-center" style={{ width: 320, height: 320 }}>
                <img src="/ghostlark-lark-only-white.png" alt="GhostLark White Lark" className="h-40 w-40 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="trust-badges" className="py-4 overflow-x-auto bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex space-x-8 whitespace-nowrap">
          <span className="text-sm font-inter text-gray uppercase">New Mexico SOS</span>
          <span className="text-sm font-inter text-gray uppercase">Stripe Verified Partner</span>
          <span className="text-sm font-inter text-gray uppercase">AWS Activate</span>
          <span className="text-sm font-inter text-gray uppercase">PrivacyGuides Listed</span>
        </div>
      </section>
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-center text-center px-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mint">
                <ShieldCheck className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="mt-4 text-lg font-poppins font-semibold text-black">Organizer Cloak</h2>
              <p className="mt-2 text-base font-inter text-gray">GhostLark signs the Articles, your name appears <strong>0</strong> times on public records.</p>
            </div>
            <div className="flex flex-col items-center text-center px-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mint">
                <FileText className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="mt-4 text-lg font-poppins font-semibold text-black">Invisible Billing</h2>
              <p className="mt-2 text-base font-inter text-gray">We pay state & RA fees up front; your card never hits a government ledger.</p>
            </div>
            <div className="flex flex-col items-center text-center px-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-mint">
                <Rocket className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="mt-4 text-lg font-poppins font-semibold text-black">Instant Web App</h2>
              <p className="mt-2 text-base font-inter text-gray">Pre-built Next.js site deployed to Vercel in &lt; 5&nbsp;min—fully yours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-black sm:text-4xl font-poppins">
                Start Your Anonymous LLC & Web App Today
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray font-inter">
                GhostLark handles your LLC formation, privacy, and web launch in one seamless process. No paperwork, no exposure—just your business, live and protected.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  variant="default"
                  className="text-lg rounded-full font-poppins px-8 py-3"
                  asChild
                >
                  <a href="/sign-up">
                    Get Started Anonymously
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <div className="bg-black rounded-2xl flex items-center justify-center" style={{ width: 120, height: 120 }}>
                <img src="/ghostlark-lark-only-white.png" alt="GhostLark White Lark" className="h-16 w-16 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
