import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  const s4Items = t('privacy.s4.items', { returnObjects: true }) as string[];
  const s6Items = t('privacy.s6.items', { returnObjects: true }) as string[];

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('privacy.title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t('privacy.lastUpdated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s1.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s1.p1')}</p>
            <p className="text-muted-foreground mt-4">{t('privacy.s1.p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s2.title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.1.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2.1.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.2.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2.2.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.3.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2.3.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.4.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2.4.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2.5.title')}</h3>
            <p className="text-muted-foreground">{t('privacy.s2.5.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s3.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s3.body')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('privacy.s3.ssn').split(' — ')[0]}</strong> — {t('privacy.s3.ssn').split(' — ')[1]}</li>
              <li><strong>{t('privacy.s3.cc').split(' — ')[0]}</strong> — {t('privacy.s3.cc').split(' — ')[1]}</li>
              <li><strong>{t('privacy.s3.bank').split(' — ')[0]}</strong> — {t('privacy.s3.bank').split(' — ')[1]}</li>
              <li><strong>{t('privacy.s3.govId').split(' — ')[0]}</strong> — {t('privacy.s3.govId').split(' — ')[1]}</li>
            </ul>
            <p className="text-muted-foreground mt-4">{t('privacy.s3.footer')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s4.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s4.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {s4Items.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s5.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s5.intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.1.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5.1.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.2.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5.2.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.3.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5.3.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.4.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5.4.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.5.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5.5.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5.6.title')}</h3>
            <p className="text-muted-foreground">{t('privacy.s5.6.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s6.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s6.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {s6Items.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s7.title')}</h2>
            <p className="text-muted-foreground mb-4"><strong>{t('privacy.s7.professional').split(':')[0]}:</strong>{t('privacy.s7.professional').split(':').slice(1).join(':')}</p>
            <p className="text-muted-foreground mb-4"><strong>{t('privacy.s7.client').split(':')[0]}:</strong>{t('privacy.s7.client').split(':').slice(1).join(':')}</p>
            <p className="text-muted-foreground mb-4"><strong>{t('privacy.s7.documents').split(':')[0]}:</strong>{t('privacy.s7.documents').split(':').slice(1).join(':')}</p>
            <p className="text-muted-foreground mb-4"><strong>{t('privacy.s7.integration').split(':')[0]}:</strong>{t('privacy.s7.integration').split(':').slice(1).join(':')}</p>
            <p className="text-muted-foreground"><strong>{t('privacy.s7.deletion').split(':')[0]}:</strong>{t('privacy.s7.deletion').split(':').slice(1).join(':')} <a href="mailto:privacy@solosolutionsai.com" className="text-primary hover:underline">privacy@solosolutionsai.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s8.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s8.intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.1.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8.1.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.2.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8.2.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.3.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8.3.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.4.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8.4.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.5.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8.5.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8.6.title')}</h3>
            <p className="text-muted-foreground">{t('privacy.s8.6.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s9.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s9.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('privacy.s9.access').split(':')[0]}:</strong>{t('privacy.s9.access').split(':').slice(1).join(':')}</li>
              <li><strong>{t('privacy.s9.correction').split(':')[0]}:</strong>{t('privacy.s9.correction').split(':').slice(1).join(':')}</li>
              <li><strong>{t('privacy.s9.deletion').split(':')[0]}:</strong>{t('privacy.s9.deletion').split(':').slice(1).join(':')}</li>
              <li><strong>{t('privacy.s9.portability').split(':')[0]}:</strong>{t('privacy.s9.portability').split(':').slice(1).join(':')}</li>
              <li><strong>{t('privacy.s9.objection').split(':')[0]}:</strong>{t('privacy.s9.objection').split(':').slice(1).join(':')}</li>
              <li><strong>{t('privacy.s9.restriction').split(':')[0]}:</strong>{t('privacy.s9.restriction').split(':').slice(1).join(':')}</li>
              <li><strong>{t('privacy.s9.withdrawal').split(':')[0]}:</strong>{t('privacy.s9.withdrawal').split(':').slice(1).join(':')}</li>
            </ul>
            <p className="text-muted-foreground mt-4">{t('privacy.s9.footer')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s10.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s10.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('privacy.s10.ccpa').split(':')[0]}:</strong>{t('privacy.s10.ccpa').split(':').slice(1).join(':')}</li>
              <li><strong>{t('privacy.s10.other').split(':')[0]}:</strong>{t('privacy.s10.other').split(':').slice(1).join(':')}</li>
            </ul>
            <p className="text-muted-foreground mt-4">{t('privacy.s10.footer')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s11.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s11.intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.1.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s11.1.body1')}</p>
            <p className="text-muted-foreground mb-4">{t('privacy.s11.1.body2')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.2.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s11.2.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11.3.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s11.3.body')}</p>
            <p className="text-muted-foreground">{t('privacy.s11.consent')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s12.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s12.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s13.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s13.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s14.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s14.body')}</p>
            <p className="text-muted-foreground mt-2">{t('privacy.s14.email')}</p>
            <p className="text-muted-foreground mt-2" style={{ whiteSpace: 'pre-line' }}>{t('privacy.s14.address')}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
