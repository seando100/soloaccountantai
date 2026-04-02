import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Phone, ArrowRight, Briefcase, Heart, ChevronRight, Globe, Clock, Upload, Shield, Brain, Sparkles, Link2, Zap, Rss } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Reusable benefit card components
const AccountantCard = ({ title, body, label }: { title: string; body: string; label: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
        <Briefcase className="h-4 w-4 text-[#0F2745]" />
      </div>
      <span className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const ClientCard = ({ title, body, label }: { title: string; body: string; label: string }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 max-w-sm w-full shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
        <Heart className="h-4 w-4 text-violet-600" />
      </div>
      <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
  </div>
);

const StepIcon = ({ icon: Icon, label, showLine = true }: { icon: React.ElementType; label: string; showLine?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 rounded-full bg-[#0F2745] flex items-center justify-center shadow-lg ring-4 ring-[#0F2745]/10">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <p className="text-xs font-bold text-[#0F2745] mt-3 text-center">{label}</p>
    {showLine && <div className="hidden md:block w-px h-8 bg-slate-200 mt-3" />}
  </div>
);

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t('benefits.heroTitle')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('benefits.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{t('benefits.journey.title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t('benefits.journey.subtitle')}</p>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 md:gap-y-0">
            {/* Step 1 */}
            <div className="flex md:justify-end">
              <AccountantCard label={t('benefits.forYou')} title={t('benefits.step1.youTitle')} body={t('benefits.step1.youBody')} />
            </div>
            <StepIcon icon={Phone} label={t('benefits.step1.label')} />
            <div className="flex md:justify-start">
              <ClientCard label={t('benefits.forClients')} title={t('benefits.step1.clientTitle')} body={t('benefits.step1.clientBody')} />
            </div>

            {/* Step 2 */}
            <div className="flex md:justify-end">
              <AccountantCard label={t('benefits.forYou')} title={t('benefits.step2.youTitle')} body={t('benefits.step2.youBody')} />
            </div>
            <StepIcon icon={MessageSquare} label={t('benefits.step2.label')} />
            <div className="flex md:justify-start">
              <ClientCard label={t('benefits.forClients')} title={t('benefits.step2.clientTitle')} body={t('benefits.step2.clientBody')} />
            </div>

            {/* Step 3 */}
            <div className="flex md:justify-end">
              <AccountantCard label={t('benefits.forYou')} title={t('benefits.step3.youTitle')} body={t('benefits.step3.youBody')} />
            </div>
            <StepIcon icon={FileText} label={t('benefits.step3.label')} />
            <div className="flex md:justify-start">
              <ClientCard label={t('benefits.forClients')} title={t('benefits.step3.clientTitle')} body={t('benefits.step3.clientBody')} />
            </div>

            {/* Step 4 */}
            <div className="flex md:justify-end">
              <AccountantCard label={t('benefits.forYou')} title={t('benefits.step4.youTitle')} body={t('benefits.step4.youBody')} />
            </div>
            <StepIcon icon={ChevronRight} label={t('benefits.step4.label')} showLine={false} />
            <div className="flex md:justify-start">
              <ClientCard label={t('benefits.forClients')} title={t('benefits.step4.clientTitle')} body={t('benefits.step4.clientBody')} />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{t('benefits.additional.title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t('benefits.additional.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Globe,        titleKey: 'benefits.bilingual.title',     youKey: 'benefits.bilingual.youBody',     clientKey: 'benefits.bilingual.clientBody' },
              { icon: Phone,        titleKey: 'benefits.phone.title',         youKey: 'benefits.phone.youBody',         clientKey: 'benefits.phone.clientBody',         badge: 'Pro+' },
              { icon: Upload,       titleKey: 'benefits.docIntel.title',      youKey: 'benefits.docIntel.youBody',      clientKey: 'benefits.docIntel.clientBody',      badge: 'Pro+' },
              { icon: Clock,        titleKey: 'benefits.triage.title',        youKey: 'benefits.triage.youBody',        clientKey: 'benefits.triage.clientBody' },
              { icon: Shield,       titleKey: 'benefits.security.title',      youKey: 'benefits.security.youBody',      clientKey: 'benefits.security.clientBody' },
              { icon: MessageSquare, titleKey: 'benefits.widget.title',       youKey: 'benefits.widget.youBody',        clientKey: 'benefits.widget.clientBody' },
              { icon: Brain,        titleKey: 'benefits.aiBrief.title',       youKey: 'benefits.aiBrief.youBody',       clientKey: 'benefits.aiBrief.clientBody',       badge: 'Pro+' },
              { icon: Sparkles,     titleKey: 'benefits.marketingKit.title',  youKey: 'benefits.marketingKit.youBody',  clientKey: 'benefits.marketingKit.clientBody',  badge: 'Pro' },
              { icon: Link2,        titleKey: 'benefits.crm.title',           youKey: 'benefits.crm.youBody',           clientKey: 'benefits.crm.clientBody' },
              { icon: Zap,          titleKey: 'benefits.zapier.title',        youKey: 'benefits.zapier.youBody',        clientKey: 'benefits.zapier.clientBody' },
              { icon: Rss,          titleKey: 'benefits.blogGen.title',       youKey: 'benefits.blogGen.youBody',       clientKey: 'benefits.blogGen.clientBody',       badge: 'Pro' },
            ].map(({ icon: Icon, titleKey, youKey, clientKey, badge }) => (
              <div key={titleKey} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0F2745]/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#0F2745]" />
                  </div>
                  <h3 className="text-base font-semibold">{t(titleKey)}</h3>
                  {badge && (
                    <span className="text-[10px] font-semibold text-[#0F2745] bg-[#0F2745]/8 px-2 py-0.5 rounded-full uppercase tracking-wide">{badge}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[#0F2745] uppercase tracking-wider mb-1">{t('benefits.forYou')}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{t(youKey)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-1">{t('benefits.forClients')}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{t(clientKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{t('benefits.bottom.title')}</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">{t('benefits.bottom.body')}</p>
          <p className="text-sm text-slate-500 mb-10">{t('benefits.bottom.tagline')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#waitlist"
              className="bg-[#0F2745] text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-[#0C2038] transition inline-flex items-center gap-2"
            >
              {t('nav.joinWaitlist')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
            >
              {t('benefits.bottom.seeFeatures')}
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">{t('benefits.bottom.trialNote')}</p>
        </div>
      </section>
    </>
  );
};

export default Benefits;
