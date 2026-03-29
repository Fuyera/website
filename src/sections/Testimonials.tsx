import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "We replaced a $200K/year Salesforce implementation with Fuyera's stack in 48 hours. The multi-agent system handles our entire customer lifecycle now.",
    author: 'Solo founder',
    role: 'B2B SaaS',
    company: 'YC W24',
    location: 'San Francisco',
  },
  {
    id: '2',
    quote: "Anchor changed how I work. As someone with ADHD running a design agency, intention tracking isn't a feature—it's survival infrastructure.",
    author: 'Creative director',
    role: '2-person studio',
    company: 'Independent',
    location: 'London',
  },
  {
    id: '3',
    quote: 'The AI Box let us run LLMs on-premise for medical data compliance. No other vendor offered this flexibility at our scale.',
    author: 'Technical lead',
    role: 'HealthTech startup',
    company: 'Series A',
    location: 'Singapore',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/20 via-transparent to-transparent" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Loved by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              operators
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Real stories from real OPC builders.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Quote icon */}
          <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-fuyera-cyan/10 flex items-center justify-center">
            <Quote className="w-6 h-6 text-fuyera-cyan" />
          </div>

          <div className="p-8 sm:p-12 rounded-2xl bg-fuyera-slate/30 border border-white/5">
            <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-8">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuyera-cyan/20 to-fuyera-cyan/5 flex items-center justify-center border border-fuyera-cyan/20">
                  <span className="text-lg font-semibold text-fuyera-cyan">
                    {current.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-white">{current.author}</div>
                  <div className="text-sm text-slate-400">
                    {current.role}, {current.company}
                  </div>
                  <div className="text-xs text-slate-500">{current.location}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex gap-1">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentIndex ? 'bg-fuyera-cyan' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50">
          <div className="flex items-center gap-2 text-slate-500">
            <div className="w-8 h-8 rounded bg-white/10" />
            <span className="text-sm">Y Combinator</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <div className="w-8 h-8 rounded bg-white/10" />
            <span className="text-sm">Techstars</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <div className="w-8 h-8 rounded bg-white/10" />
            <span className="text-sm">500 Startups</span>
          </div>
        </div>
      </div>
    </section>
  );
}
