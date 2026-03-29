import { useState } from 'react';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuyera-cyan/20 via-fuyera-slate/20 to-fuyera-dark" />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuyera-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-fuyera-cyan/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-fuyera-cyan/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to ship like a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
            team of 20?
          </span>
        </h2>

        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join 2,400+ OPC operators building on Fuyera. Start free, no credit card required.
        </p>

        {/* Email form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 bg-fuyera-dark/50 border-white/10 text-white placeholder:text-slate-500 focus:border-fuyera-cyan focus:ring-fuyera-cyan/20"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 px-6 bg-fuyera-cyan text-fuyera-dark hover:bg-fuyera-cyan-glow font-semibold group"
            >
              {isSubmitted ? (
                'Welcome aboard!'
              ) : (
                <>
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Secondary CTA */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
          <span>Already building?</span>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-fuyera-cyan hover:text-fuyera-cyan-glow transition-colors"
          >
            Read the docs
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span>Free forever plan</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
