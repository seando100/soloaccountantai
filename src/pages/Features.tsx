import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart3, Mail, Shield, ArrowRight, Sparkles, Phone, Upload, FileSearch, Clock, Brain, Link2, Rss, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandSettingsIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Panel header */}
      <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-700">Profile Settings</p>
        <div className="flex items-center gap-2">
          <div className="h-5 px-3 rounded bg-[#0F2745] flex items-center">
            <span className="text-white text-[9px] font-semibold">Save Changes</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-slate-100">
        {/* Left — settings fields */}
        <div className="p-4 space-y-4">
          {/* Logo upload */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Practice Logo</p>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-3 flex items-center gap-3 bg-slate-50">
              <div className="w-10 h-10 rounded bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-[#0F2745] uppercase">Logo</span>
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-700">summit-financial-logo.png</p>
                <p className="text-[9px] text-slate-400">Click to replace</p>
              </div>
            </div>
          </div>
          {/* Practice name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Practice Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Summit Financial Group</p>
            </div>
          </div>
          {/* Assistant name */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Assistant Name</p>
            <div className="border border-slate-200 rounded-md px-2.5 py-1.5 bg-white">
              <p className="text-[11px] text-slate-800">Avery</p>
            </div>
          </div>
          {/* Vanity URL */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Your Intake URL</p>
            <div className="border border-slate-200 rounded-md overflow-hidden flex text-[10px]">
              <span className="bg-slate-50 px-2 py-1.5 text-slate-400 border-r border-slate-200 whitespace-nowrap">.com/</span>
              <span className="px-2 py-1.5 text-[#0F2745] font-semibold">summitfinancial</span>
            </div>
            <p className="text-[9px] text-violet-600 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
              soloaccountantai.com/summitfinancial is live
            </p>
          </div>
          {/* Calendly */}
          <div>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Scheduling</p>
            <div className="flex items-center gap-2 border border-violet-200 bg-violet-50 rounded-md px-2.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
              <p className="text-[10px] text-violet-700 font-medium">Calendly connected</p>
            </div>
          </div>
        </div>
        {/* Right — live preview */}
        <div className="p-4 bg-slate-50/50">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-2.5">Client Preview</p>
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">
            {/* Mini browser bar */}
            <div className="bg-slate-100 px-2 py-1 flex items-center gap-1.5 border-b border-slate-200">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 text-[8px] text-slate-400 font-mono">
                soloaccountantai.com/summitfinancial
              </div>
            </div>
            {/* Mini client intake page */}
            <div className="bg-[#0F2745] px-3 py-2.5 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[7px] font-bold text-white">SF</span>
              </div>
              <div>
                <p className="text-white text-[9px] font-semibold leading-tight">Avery</p>
                <p className="text-white/60 text-[7px] leading-tight">Summit Financial Group</p>
              </div>
            </div>
            <div className="px-3 py-3 space-y-2">
              <div className="bg-white rounded-xl rounded-bl-sm border border-slate-100 px-2.5 py-1.5 shadow-sm max-w-[85%]">
                <p className="text-[9px] text-slate-700 leading-snug">Welcome! I'm Avery with Summit Financial Group. How can I help you with your financial needs today?</p>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#0F2745] rounded-xl rounded-br-sm px-2.5 py-1.5 max-w-[75%]">
                  <p className="text-[9px] text-white leading-snug">I need help with my small business tax filing for this year.</p>
                </div>
              </div>
            </div>
            <div className="px-2 py-2 border-t border-slate-100 bg-white flex items-center gap-1.5">
              <div className="flex-1 bg-slate-50 rounded-full px-2 py-1 border border-slate-200">
                <p className="text-[8px] text-slate-400">Type your response…</p>
              </div>
              <div className="w-5 h-5 rounded-full bg-[#0F2745] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 text-center mt-2">Clients see your brand — never SoloAccountantAI</p>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const ChatModeScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-slate-50">
      {/* App header */}
      <div className="bg-[#0F2745] px-4 py-3 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">SF</span>
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">Avery</p>
          <p className="text-white/60 text-[10px] leading-tight">Summit Financial Group · Intake Assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span className="text-white/60 text-[10px]">Online</span>
        </div>
      </div>
      {/* Chat messages */}
      <div className="px-4 py-4 space-y-3 bg-slate-50">
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">A</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">Hi! I'm Avery, your virtual intake assistant with Summit Financial Group. I'll help gather some information before your consultation.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">A</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">What financial service are you looking for help with today?</p>
          </div>
        </div>
        {/* Client bubble */}
        <div className="flex justify-end">
          <div className="bg-[#0F2745] rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
            <p className="text-xs text-white leading-relaxed">I just started an LLC and I'm not sure if I should elect S-Corp status. We did about $350K in revenue last year and I want to make sure we're optimizing our tax situation.</p>
          </div>
        </div>
        {/* AI bubble */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">A</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm border border-slate-100 max-w-[78%]">
            <p className="text-xs text-slate-700 leading-relaxed">That's a smart question to be asking — entity election can make a significant difference at that revenue level. In which state is your LLC registered?</p>
          </div>
        </div>
        {/* Typing indicator */}
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#0F2745] flex-shrink-0 flex items-center justify-center mb-0.5">
            <span className="text-white text-[8px] font-bold">A</span>
          </div>
          <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm border border-slate-100">
            <div className="flex gap-1 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Input bar */}
      <div className="px-3 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
          <p className="text-[11px] text-slate-400">Type your response…</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#0F2745] flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const IntakeSummaryScreenshot = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
      {/* Email header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Logo</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#0F2745] uppercase tracking-wider leading-tight">Summit Financial Group</p>
            <p className="text-[10px] text-slate-400 leading-tight">New Client Intake — March 5, 2026</p>
          </div>
        </div>
        <span className="text-[10px] bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-2.5 py-0.5 font-medium">New</span>
      </div>
      {/* Engagement details table */}
      <div className="px-6 pt-4 pb-3">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Engagement Details</p>
        <div className="rounded-lg border border-slate-100 overflow-hidden text-[11px]">
          {[
            ['Client', 'James Rivera'],
            ['Email', 'james.rivera@email.com'],
            ['Phone', '(415) 555-0198'],
            ['Location', 'San Francisco, CA'],
            ['Service Type', 'Tax Planning / Entity Election'],
            ['Financial Situation', 'LLC — $350K revenue, considering S-Corp election'],
            ['Desired Outcome', 'Entity optimization and multi-state filing guidance'],
          ].map(([label, value], i) => (
            <div key={label} className={`flex ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
              <span className="w-[36%] px-3 py-1.5 text-slate-500 font-medium flex-shrink-0">{label}</span>
              <span className="px-3 py-1.5 text-slate-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* AI context notes */}
      <div className="px-6 pb-5">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">AI Context Notes</p>
        <div className="rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 space-y-1.5">
          {[
            'At $350K revenue, S-Corp election could yield significant self-employment tax savings — model reasonable salary vs. distribution split',
            'LLC registered in Delaware but operating in California — assess CA franchise tax and multi-state nexus implications',
            'Request prior year returns (1065/1040) to evaluate year-over-year growth trajectory and entity election timing',
            'Quarterly estimated tax payments may need adjustment if entity change is elected mid-year',
          ].map((note) => (
            <div key={note} className="flex gap-2">
              <span className="text-amber-500 font-bold text-[10px] flex-shrink-0 mt-0.5">•</span>
              <p className="text-[10px] text-amber-900 leading-snug">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const MarketingKitIllustration = () => (
  <div className="relative">
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5">
      {/* Social card mock — horizontal layout */}
      <div className="flex" style={{ height: 210 }}>
        {/* White logo zone */}
        <div className="w-[36%] bg-white flex flex-col items-center justify-center p-5 gap-3 border-r border-slate-100">
          <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center leading-tight">Your<br/>Logo</span>
          </div>
          <p className="text-[8px] font-semibold text-[#0F2745] uppercase tracking-widest text-center leading-tight">
            Summit Financial<br/>Group
          </p>
        </div>
        {/* Navy content zone */}
        <div className="flex-1 bg-[#0F2745] flex flex-col justify-center px-6 py-5">
          <p style={{ fontFamily: 'Georgia, serif' }} className="text-white font-bold text-sm leading-snug mb-2.5">
            Tax season doesn't have to be stressful — let's plan ahead together.
          </p>
          <p className="text-[10px] text-white/50 mb-4 tracking-wide">Tax Planning · Business Advisory</p>
          <div className="border-t border-white/20 pt-3">
            <p className="text-[9px] text-white/40 mb-1">Book your consultation at:</p>
            <p className="text-[11px] text-white font-semibold">soloaccountantai.com/summitfinancial</p>
          </div>
        </div>
      </div>
      {/* Bottom strip — color theme + label */}
      <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center gap-3">
        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Color theme</span>
        <div className="flex gap-1.5">
          {['#0F2745','#1C1C1E','#1A4731','#6B1E2E','#334155'].map(c => (
            <div key={c} className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200" style={{ background: c }} />
          ))}
          <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200 bg-violet-500 relative">
            <span className="absolute -top-1 -right-1 text-[6px] bg-white text-slate-500 rounded-full px-[2px] font-bold leading-none" style={{ paddingTop: 1 }}>B</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
  </div>
);

const Features = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for the Solo Accountant
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Intake by chat, phone, or widget. AI document analysis. Marketing tools. Everything you need — without adding overhead or hiring staff.
          </p>
        </div>

        {/* Feature 1 — AI Client Intake — text left, visual right */}
        <div id="ai-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Intake That Runs Itself
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Clients get a conversational AI intake or a structured form — in English or Spanish.
              You get the details you need. No phone tag, no back-and-forth, no scheduling required on your end.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Conversational AI chat mode and structured form mode</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Give your AI assistant a name — clients meet "Avery" or "Taylor," not a generic bot</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Bilingual — clients choose English or Spanish at the start</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Fully customizable intake questions tailored to your specialties</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your disclaimer presented to every client before they begin</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your logo, practice name, and greeting — clients never see SoloAccountantAI</li>
            </ul>
          </div>
          <ChatModeScreenshot />
        </div>

        {/* Feature 2 — Engagement Summary — visual left, text right */}
        <div id="engagement-summary" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <IntakeSummaryScreenshot />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Know the Engagement Before the Meeting
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every submission arrives with a structured client summary and AI-generated context notes
              — flagging entity-type considerations, multi-state filing complexity, deduction opportunities, and
              suggested follow-up questions — so you're prepared the moment the client sits down.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Organized client profile: name, contact, location, and financial details</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI contextual notes — entity analysis, filing complexity, and advisory suggestions — for your eyes only</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Suggested follow-up questions tailored to the financial situation</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Delivered to your inbox the moment intake is submitted</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Client receives a clean, branded confirmation with their submission summary</li>
            </ul>
          </div>
        </div>

        {/* Feature 3 — Phone Intake — text left, visual right */}
        <div id="phone-intake" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Phone className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Phone Intake — 24/7
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Give your practice a dedicated phone number where callers speak naturally with your AI
              assistant. No hold music, no phone trees — just a professional conversation that captures
              every detail and delivers the same structured summary as chat intake.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Dedicated local phone number for your practice</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Callers speak naturally — your AI assistant guides the conversation</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Same structured summary, AI context notes, and email notifications</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Available 24/7 — never miss an after-hours or weekend call</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Intake source clearly labeled (Web Chat vs. Phone Call) in your portal</li>
            </ul>
          </div>
          {/* Phone illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-[#0F2745] px-5 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <p className="text-white text-sm font-semibold">Your AI Intake Line</p>
                <p className="text-white/50 text-xs mt-0.5">(415) 555-0100</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Simulated transcript */}
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Hi, I'm Avery with Summit Financial Group. I'll gather some information to help your accountant prepare. What financial service are you looking for today?"</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start justify-end">
                  <div className="bg-[#0F2745] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white leading-relaxed">"I need help with my quarterly estimated tax payments. I'm a freelance consultant and I think I'm underpaying."</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-slate-500">C</span>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"I understand — staying on top of quarterly estimates can be tricky. Let me get some details so your accountant is prepared..."</p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-medium">Call in progress — 2:34</span>
                </div>
                <span className="text-[9px] bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-2 py-0.5 font-medium">Phone Call</span>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 4 — Document Intelligence — visual left, text right */}
        <div id="document-intelligence" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            {/* Document Intelligence illustration */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
                <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSearch className="h-4 w-4 text-[#0F2745]" />
                    <p className="text-xs font-semibold text-slate-700">Document Intelligence</p>
                  </div>
                  <span className="text-[9px] bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-2 py-0.5 font-medium">4 of 5 received</span>
                </div>
                <div className="px-5 py-3 space-y-2.5">
                  {[
                    { name: 'W2_2025_Employer.pdf', status: 'ready', summary: 'W-2 from TechCorp Inc. Gross wages $142,500. Federal withholding $28,100. State CA withholding $9,850.' },
                    { name: '1099-NEC_Consulting.pdf', status: 'ready', summary: '1099-NEC from Rivera Consulting LLC. Non-employee compensation $207,500. No withholding reported.' },
                    { name: 'Bank_Statements_Q4.pdf', status: 'ready', summary: 'Chase business checking Oct-Dec 2025. Total deposits $98,200. Recurring expenses flagged: office lease, software subscriptions, contractor payments.' },
                    { name: 'Prior_Year_Return_1040.pdf', status: 'ready', summary: '2024 Form 1040 with Schedule C. AGI $310,400. Self-employment tax $18,900. QBI deduction claimed. Estimated payments: $12,000/quarter.' },
                  ].map((doc) => (
                    <div key={doc.name} className="border border-slate-100 rounded-lg overflow-hidden">
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                        <p className="text-[10px] font-medium text-slate-700 flex-1">{doc.name}</p>
                        <span className="text-[9px] text-violet-600 font-medium">Ready</span>
                      </div>
                      <div className="px-3 py-2">
                        <p className="text-[10px] text-slate-500 leading-relaxed">{doc.summary}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border border-dashed border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <p className="text-[10px] text-slate-400">1099-INT Bank Interest Statement — awaiting upload</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Upload className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Documents In, Insights Out
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Request documents from clients with one click. AI recommends what to ask for based on the
              service type, clients upload securely, and every document is automatically analyzed — key figures,
              deductions, red flags, and an engagement-relevant summary — ready for your review.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI recommends documents based on service type and financial details</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Clients upload securely via a branded, encrypted portal</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI extracts key figures, income sources, and engagement-relevant highlights from each document</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Handles PDFs, images, scanned documents, and Word files</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> 30-day secure retention — pass-through, not a vault</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> No human ever views client documents — fully automated</li>
            </ul>
          </div>
        </div>

        {/* Feature 5 — AI Intelligence Brief — text left, visual right */}
        <div id="intelligence-brief" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Brain className="h-3 w-3" />
              Pro+ Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Intelligence Brief
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every intake automatically generates a deep-dive analysis that goes beyond summarizing what the client said.
              The Intelligence Brief identifies filing complexity, multi-state considerations, entity-type optimization
              opportunities, and suggests the follow-up questions that matter most — so you walk into
              every meeting with the insight of a senior tax advisor.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Filing complexity assessment — flags multi-state, international, or entity-change scenarios</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Entity-type analysis with optimization opportunities based on revenue and structure</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Deduction and credit flags with recommended actions</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Suggested follow-up questions tailored to the specific financial situation</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Delivered alongside the intake summary — no extra step required</li>
            </ul>
          </div>
          {/* Intelligence Brief illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-white px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-[#0F2745]" />
                  <p className="text-xs font-semibold text-slate-700">AI Intelligence Brief</p>
                </div>
                <span className="text-[9px] bg-[#0F2745]/8 text-[#0F2745] rounded-full px-2 py-0.5 font-semibold uppercase tracking-wide">Pro+</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                {/* Filing complexity flags */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Filing Complexity Flags</p>
                  <div className="space-y-1.5">
                    {[
                      { flag: 'Multi-State', note: 'LLC registered in Delaware, operating in California — dual filing requirements. Assess CA franchise tax ($800 min) and apportionment rules.' },
                      { flag: 'Entity Election', note: 'At $350K revenue, S-Corp election could save $8K-$15K annually in SE tax — model reasonable salary threshold.' },
                    ].map((item) => (
                      <div key={item.flag} className="flex gap-2 items-start bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                        <span className="text-[9px] font-semibold text-amber-700 bg-amber-100 rounded px-1.5 py-0.5 flex-shrink-0 mt-px">{item.flag}</span>
                        <p className="text-[10px] text-amber-900 leading-snug">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Financial analysis */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Financial Analysis</p>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-slate-600 leading-snug">Revenue growth from $310K to $350K year-over-year. Mixed income (W-2 + 1099-NEC) suggests transition from employment to full-time consulting. QBI deduction eligibility should be reassessed under new entity structure.</p>
                  </div>
                </div>
                {/* Deadline flag */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Deadline & Compliance Flags</p>
                  <div className="bg-red-50 border border-red-100 rounded-lg px-3 py-2 flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] text-red-800 leading-snug font-medium">S-Corp election (Form 2553) must be filed by March 15 for current tax year. If past deadline, late election relief may be available under Rev. Proc. 2013-30.</p>
                  </div>
                </div>
                {/* Suggested questions */}
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Suggested Follow-Up</p>
                  <div className="space-y-1">
                    {[
                      'Do you plan to continue both W-2 employment and consulting, or transition fully to self-employment?',
                      'Are there any outstanding payroll tax liabilities or IRS notices from the current LLC structure?',
                      'Have you contributed to a retirement plan (SEP-IRA, Solo 401k) for the self-employment income?',
                    ].map((q) => (
                      <div key={q} className="flex gap-2 items-start">
                        <span className="text-[#0F2745] font-bold text-[10px] flex-shrink-0 mt-0.5">?</span>
                        <p className="text-[10px] text-slate-600 leading-snug">{q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 6 — Brand Settings — text left, visual right */}
        <div id="brand-settings" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Your Brand, Your Link
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Clients never see "SoloAccountantAI." They see your practice name, your logo, and your intake
              page — at a URL you control. Every detail is configurable from your admin portal,
              and when they're ready to meet, send a one-click consultation invite.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Your own vanity URL (e.g. soloaccountantai.com/yourpractice)</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Upload your practice logo — shown on every client-facing screen and email</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Set your assistant's name, client greeting, and specialty focus</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Configure disclaimers in English and Spanish</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Pause intake instantly with a custom unavailability message</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Send consultation invites via Calendly or any scheduling link</li>
            </ul>
          </div>
          <BrandSettingsIllustration />
        </div>

        {/* Feature 7 — Marketing Kit — visual left, text right */}
        <div id="marketing-kit" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            <MarketingKitIllustration />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Sparkles className="h-3 w-3" />
              Pro Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Look Professional Online, Instantly
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Marketing Kit generates platform-ready social media posts and professionally branded
              visual cards in seconds — tailored to your practice, your specialties, and your intake link.
              No designer. No copywriter. No extra tools.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI-written post copy for Facebook, Instagram, LinkedIn, and Nextdoor</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Branded visual cards pre-sized for every platform — download as PNG, ready to upload</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Edit the card headline (AI-suggested, fully customizable) to match your voice</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> 5 color themes — or use your brand color pulled automatically from your logo</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Website banner sizes included for your practice's website</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Generate in English or Spanish — bilingual from the start</li>
            </ul>
          </div>
        </div>

        {/* Feature 7 — Integrations — text left, visual right */}
        <div id="integrations" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Connect to the Tools You Already Use
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every completed intake can automatically flow to your CRM, your spreadsheets, your project
              management tools — wherever you need it. No copy-pasting, no manual data entry, no switching
              between tabs.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> <strong>HubSpot CRM</strong> — connect your free HubSpot account and every intake automatically creates a contact with full details and AI context notes</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> <strong>Zapier &amp; Make</strong> — add a webhook URL and every intake fires to 6,000+ apps: Google Sheets, Slack, Mailchimp, and more</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> <strong>Custom webhooks</strong> — send intake data to any endpoint with HMAC-signed payloads for security</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> <strong>Calendly</strong> — send one-click consultation invites with personalized booking links</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Connect and disconnect in seconds — no developer required</li>
            </ul>
          </div>
          {/* Integrations illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2">
                <Link2 className="h-4 w-4 text-[#0F2745]" />
                <p className="text-xs font-semibold text-slate-700">Integrations</p>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ff7a59]/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#ff7a59]">HS</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">HubSpot CRM</p>
                      <p className="text-[10px] text-green-700">Connected · Syncing contacts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-medium text-green-700">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-purple-600">Z</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Zapier Webhook</p>
                      <p className="text-[10px] text-purple-700">→ Google Sheets · Last sync 2m ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-medium text-green-700">200</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-blue-600">Cal</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Calendly</p>
                      <p className="text-[10px] text-slate-500">Connected · Consultation invites</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-medium text-green-700">Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Feature 8 — AI Blog Generation — visual left, text right */}
        <div id="blog-generation" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div className="order-2 md:order-1">
            {/* Blog illustration */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
                <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2">
                  <Rss className="h-4 w-4 text-[#0F2745]" />
                  <p className="text-xs font-semibold text-slate-700">Blog Post Generator</p>
                </div>
                <div className="p-5 space-y-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                    <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Topic</p>
                    <p className="text-xs text-slate-800">Tax Deductions Small Business Owners Miss Every Year</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white border border-slate-100 rounded-lg px-3 py-2">
                      <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Generated Title</p>
                      <p className="text-xs text-slate-800 font-medium">8 Tax Deductions Small Business Owners Miss Every Year — Stop Leaving Money on the Table</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-lg px-3 py-2">
                      <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Social Teaser</p>
                      <p className="text-[10px] text-slate-600">Are you missing out on legitimate deductions? Here are 8 tax breaks small business owners overlook every year. 💰 #TaxTips #SmallBusiness #CPA</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5">tax deductions</span>
                      <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5">small business tax</span>
                      <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5">CPA tips</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2745] bg-[#0F2745]/8 px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              <Rss className="h-3 w-3" />
              Pro Plan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              AI Blog Posts That Bring Clients to You
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Generate SEO-optimized blog posts tailored to your practice, your specialties, and your
              location — in seconds. Each post comes with a title, article, meta description, keywords,
              and a ready-to-post social media teaser. Content marketing without the content struggle.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> AI-suggested topics based on your specialty and location</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Full SEO-optimized article (600-800 words) with meta description and keywords</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Social media teaser ready to post on any platform</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Pro: 3 posts/month · Pro+: 10 posts/month</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Copy any section with one click — paste directly to your website or social</li>
            </ul>
          </div>
        </div>

        {/* Feature 9 — Conversation Transcripts — text left */}
        <div id="transcripts" className="grid md:grid-cols-2 gap-12 items-center mb-24 scroll-mt-24">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Full Conversation History
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every intake conversation — chat or phone — is preserved as a complete transcript.
              See exactly what your client said, how the AI guided the conversation, and review
              the full context before the consultation. Nothing gets lost in translation.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Full chat bubble view of every conversation</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Chat and phone intake transcripts in one place</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Review before the meeting — see exactly what the client described</li>
              <li className="flex items-start gap-2"><span className="text-[#0F2745] font-bold mt-0.5">—</span> Source label: Web Chat vs. Phone Call</li>
            </ul>
          </div>
          {/* Transcript illustration */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 bg-white">
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-[#0F2745]" />
                <p className="text-xs font-semibold text-slate-700">Conversation Transcript</p>
                <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5 ml-auto font-medium">Web Chat</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"Welcome! I'm here to help gather some information for your accountant. What can we help you with today?"</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start justify-end">
                  <div className="bg-[#0F2745] rounded-lg px-3 py-2">
                    <p className="text-[11px] text-white leading-relaxed">"I'm a freelancer and I haven't filed my taxes in two years. I need help getting caught up."</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-slate-500">C</span>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0F2745]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[7px] font-bold text-[#0F2745]">AI</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                    <p className="text-[11px] text-slate-700 leading-relaxed">"I understand — let's get that sorted out. Do you have your 1099 forms and any records of business expenses?"</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0F2745]/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </div>

        {/* Supporting features row */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20 pt-4 border-t border-gray-100">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart3 className="h-4 w-4 text-primary" />
                Admin Portal
              </CardTitle>
              <CardDescription>
                Review every submission, track status, manage documents, and triage your client pipeline in one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Color-coded submission aging and triage</li>
                <li>• Status workflow (new → consultation)</li>
                <li>• Document request and review dashboard</li>
                <li>• Chat and phone intake unified view</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-4 w-4 text-primary" />
                Email Notifications
              </CardTitle>
              <CardDescription>
                You and your client both get a confirmation the moment an intake is submitted.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Instant accountant alert email</li>
                <li>• Professional client confirmation</li>
                <li>• Branded with your practice identity</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="h-4 w-4 text-primary" />
                Security &amp; Data Protection
              </CardTitle>
              <CardDescription>
                Enterprise-grade security with AI-powered data boundary enforcement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• AES-256 encryption at rest, TLS in transit</li>
                <li>• AI detects and blocks SSN, credit card, and government ID data in real time</li>
                <li>• No human review — fully automated AI processing</li>
                <li>• 30-day document retention with deletion rights</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Coming Q3 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#waitlist"
              className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3"
            >
              View Pricing
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
