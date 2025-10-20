const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border-b-2 border-primary pb-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
          <p className="text-sm tracking-widest text-muted-foreground uppercase mt-2">
            Background & Journey
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6 text-justify">
            After high school, I enlisted in the Army infantry and was selected for security details with high-ranking officials, including a former U.S. President. That experience sparked my love of learning—I'd spend free time at libraries around the city and at University of Colorado.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-justify">
            When I transitioned out, I started studying finance but family circumstances required us to move to Mobile, Alabama. With one young child and being at a non-target, I leveraged my veteran network to get my foot in the door with investment banking, private equity, and wealth management internships. However, <b>in 2020, my junior year, COVID-19 froze the internship and analyst hiring pipelines. With much uncertainty and two small children, I decided to pivot and take a full-time strategic sales role to provide immediate stability for my family.</b>
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-accent p-6 my-8">
            <p className="text-lg leading-relaxed italic text-justify">
              Instead, I spent four years in tech sales as a business advisor/consultant, then launched my own restoration company in April 2024. I raised $300k in capital and grew from zero to $100k monthly revenue in five months. However, we faced 90-120 day collection cycles with insurance carriers, creating severe cash flow constraints despite our growth.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-6 text-justify">
            After 18 months of managing creditor negotiations, vendor payment terms, and seeking additional capital, we had to liquidate while we could still return most investor capital.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-justify font-semibold">
            That experience gave me firsthand insight into financial distress—managing liquidity crunches, negotiating with creditors, and making tough operational decisions under pressure. This invaluable, hands-on perspective now fuels my drive to pursue what I'm genuinely passionate about: helping companies navigate similar situations from the capital provider side.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <p className="text-3xl font-bold text-primary mb-2">$300K</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Capital Raised</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-primary mb-2">5 Months</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">0 to $100K MRR</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-primary mb-2">18 Months</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Distressed Ops</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-primary mb-2">3.5 Years</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Army Infantry</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
