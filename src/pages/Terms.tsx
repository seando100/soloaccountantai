import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  const s3Items = t('terms.s3.items', { returnObjects: true }) as string[];
  const s5Items = t('terms.s5.items', { returnObjects: true }) as string[];
  const s7Items = t('terms.s7.items', { returnObjects: true }) as string[];
  const s8Items = t('terms.s8.items', { returnObjects: true }) as string[];
  const s9Items = t('terms.s9.items', { returnObjects: true }) as string[];

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('terms.title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t('terms.lastUpdated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s1.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s1.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s2.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s2.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s3.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s3.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {s3Items.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
            <p className="text-muted-foreground mt-4">{t('terms.s3.footer')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s4.title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s4.1.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s4.1.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s4.2.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s4.2.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s4.3.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s4.3.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s4.4.title')}</h3>
            <p className="text-muted-foreground">{t('terms.s4.4.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s5.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s5.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {s5Items.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s6.title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s6.1.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s6.1.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s6.2.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s6.2.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s6.3.title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s6.3.body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s6.4.title')}</h3>
            <p className="text-muted-foreground">{t('terms.s6.4.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s7.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s7.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {s7Items.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s8.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s8.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {s8Items.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s9.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s9.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              {s9Items.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
            <p className="text-muted-foreground">{t('terms.s9.footer')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s10.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s10.p1')}</p>
            <p className="text-muted-foreground">{t('terms.s10.p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s11.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s11.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s12.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s12.p1')}</p>
            <p className="text-muted-foreground">{t('terms.s12.p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s13.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s13.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s14.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s14.p1')}</p>
            <p className="text-muted-foreground mb-4">{t('terms.s14.p2')}</p>
            <p className="text-muted-foreground">{t('terms.s14.p3')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s15.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s15.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s16.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s16.p1')}</p>
            <p className="text-muted-foreground">{t('terms.s16.p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s17.title')}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('terms.s17.entire').split(':')[0]}:</strong>{t('terms.s17.entire').split(':').slice(1).join(':')}</li>
              <li><strong>{t('terms.s17.severability').split(':')[0]}:</strong>{t('terms.s17.severability').split(':').slice(1).join(':')}</li>
              <li><strong>{t('terms.s17.waiver').split(':')[0]}:</strong>{t('terms.s17.waiver').split(':').slice(1).join(':')}</li>
              <li><strong>{t('terms.s17.assignment').split(':')[0]}:</strong>{t('terms.s17.assignment').split(':').slice(1).join(':')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s18.title')}</h2>
            <p className="text-muted-foreground">{t('terms.s18.body')}</p>
            <p className="text-muted-foreground mt-2">{t('terms.s18.email')}</p>
            <p className="text-muted-foreground mt-2" style={{ whiteSpace: 'pre-line' }}>{t('terms.s18.address')}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Terms;
