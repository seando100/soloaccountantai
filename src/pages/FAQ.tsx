import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const SECTION_LABEL = "text-xs font-semibold uppercase tracking-widest text-slate-400 pt-10 pb-2 px-1 border-b border-slate-100 mb-2";

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">Everything you need to know about SoloAccountantAI.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className={SECTION_LABEL}>How It Works</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="how-1">
              <AccordionTrigger>How does the AI client intake work?</AccordionTrigger>
              <AccordionContent>When a prospective client visits your unique intake link, they're guided through a conversational intake experience. The AI asks about their financial situation, service needs (tax prep, bookkeeping, advisory), business type, and timeline. Answers are structured into a clean engagement summary delivered to your inbox.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-2">
              <AccordionTrigger>What happens after a client submits?</AccordionTrigger>
              <AccordionContent>You receive a detailed email with contact info, financial situation summary, and AI-generated insights (complexity flags, multi-state filing indicators, entity-type considerations). The client receives a confirmation email. All submissions are stored in your admin portal.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-3">
              <AccordionTrigger>Does the AI give tax or financial advice?</AccordionTrigger>
              <AccordionContent>No. The AI is strictly an intake tool. It doesn't provide tax advice, financial recommendations, or filing guidance. All AI-generated notes are internal analytical aids for your eyes only.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-4">
              <AccordionTrigger>Does it handle both personal and business clients?</AccordionTrigger>
              <AccordionContent>Yes. The AI adapts its questions based on whether the client needs personal tax prep, business accounting, payroll, advisory services, or multiple. Each path captures the relevant details for your review.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Setup & Customization</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="setup-1">
              <AccordionTrigger>How long does setup take?</AccordionTrigger>
              <AccordionContent>Most accountants are set up within 10 minutes. Enter your firm name, upload your logo, select service specializations, write a greeting, add custom questions, and connect your scheduling link.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="setup-2">
              <AccordionTrigger>What specializations are supported?</AccordionTrigger>
              <AccordionContent>Tax preparation, bookkeeping, payroll, business advisory, audit, forensic accounting, estate planning, nonprofit accounting, and more. You can also add custom specializations.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Plans & Billing</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="billing-1">
              <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
              <AccordionContent>Yes. 14-day free trial with full access. Credit card required but not charged until day 15.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="billing-2">
              <AccordionTrigger>What is the difference between plans?</AccordionTrigger>
              <AccordionContent>Starter ($49/month) — 50 intakes, full intake system. Pro ($79/month) — 150 intakes + Marketing Kit. Pro+ ($119/month) — unlimited intakes + AI phone line + Document Intelligence.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Security & Privacy</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sec-1">
              <AccordionTrigger>Is financial data secure?</AccordionTrigger>
              <AccordionContent>Yes. All data encrypted in transit (TLS) and at rest (AES-256). Client data scoped to your account. No data shared across accounts or used to train AI models. Financial information is treated with the highest level of care.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className={SECTION_LABEL}>Support</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="support-1">
              <AccordionTrigger>Is this only for solo accountants?</AccordionTrigger>
              <AccordionContent>Built for solo practitioners and small firms. Each account is one accountant, one intake link, one inbox. Multi-partner firms can each set up individual accounts.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="support-2">
              <AccordionTrigger>What if I need help?</AccordionTrigger>
              <AccordionContent>Reach us at <strong>sean@solosolutionsai.com</strong>. We respond within one business day. You can also use the <Link to="/contact" className="underline text-[#0F2745]">contact form</Link>.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">We're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist" className="bg-[#0F2745] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0C2038] transition inline-flex items-center justify-center">Join the Waitlist</a>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors inline-flex items-center justify-center px-6 py-3">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
