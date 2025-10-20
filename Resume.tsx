import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const experience = [
  [
    {
      "title": "Managing Director & Partner",
      "company": "Best Option Restoration",
      "period": "Apr 2024 – Oct 2025",
      "location": "Mobile, AL (implied from context)",
      "highlights": [
        "Raised $300K from institutional and individual investors",
        "Managed complex capital structure under distressed conditions",
        "Scaled business from $0 to $100K monthly revenue in 5 months"
      ]
    },
    {
      "title": "Strategic Sales & Account Executive",
      "company": "Technology Sales (Splunk, FullStory, Revenue Grid, Better.com)",
      "period": "Mar 2020 – Apr 2024",
      "location": "Various Locations",
      "highlights": [
        "Consistently exceeded quotas (117%-138%) selling complex B2B solutions",
        "Sold complex B2B solutions to Fortune 500 enterprises and mid-market companies across financial services, manufacturing, and fintech sectors"
      ]
    },
    {
      "title": "Investment Banking Winter Analyst",
      "company": "BlockCrowd Financial Group",
      "period": "Nov 2019 – Feb 2020",
      "location": "New York, NY",
      "highlights": [
        "Prepared pitch books, offering memoranda, and financial models to support M&A transactions and capital raises for middle-market clients",
        "Conducted market research and valuation analysis to identify potential buyers and investors for client transactions",
        "Participated in client meetings and due diligence processes, coordinating across legal, accounting, and compliance teams"
      ]
    },
    {
      "title": "Summer Insight Program - Sales & Trading",
      "company": "Goldman Sachs",
      "period": "Jun 2019 – Aug 2019",
      "location": "New York, NY",
      "highlights": [
        "Selected from 2,800+ applicants for intensive program covering sales methodologies, client relationship management, and financial markets analysis",
        "Gained exposure to trading floor operations and client-facing sales strategies across fixed income and equities divisions"
      ]
    },
    {
      "title": "Private Equity Spring Analyst",
      "company": "Pivoton Capital",
      "period": "Mar 2019 – May 2019",
      "location": "Stamford, CT",
      "highlights": [
        "Performed LBO modeling and DCF valuation analysis for Voxco acquisition ($34M transaction), projecting free cash flows and determining enterprise value",
        "Prepared due diligence reports, executive summaries, and investment memoranda for potential acquisitions",
        "Conducted trading comps and precedent transaction analysis; company successfully exited via sale in 2024"
      ]
    },
    {
      "title": "Investment Banking Early ID Program",
      "company": "Citi",
      "period": "Jan 2019 – Mar 2019",
      "location": "New York, NY",
      "highlights": [
        "Selected for competitive early identification program providing mentorship and insight into investment banking divisions",
        "Participated in technical training covering financial modeling, valuation methodologies, and deal processes"
      ]
    },
    {
      "title": "Wealth Management Winter Analyst",
      "company": "Morgan Stanley",
      "period": "Dec 2018 – Mar 2019",
      "location": "Mobile, AL",
      "highlights": [
        "Supported financial advisors in portfolio construction, asset allocation strategies, and client relationship management for high-net-worth individuals"
      ]
    },
    {
      "title": "Investment Banking Military Early Insight Program",
      "company": "Morgan Stanley",
      "period": "Nov 2018",
      "location": "New York, NY",
      "highlights": [
        "Participated in veteran-focused program providing exposure to M&A advisory, capital markets, and industry coverage teams"
      ]
    },
    {
      "title": "Specialist",
      "company": "United States Army, 4th Infantry Division",
      "period": "Dec 2013 – Apr 2017",
      "location": "Fort Carson, CO",
      "highlights": [
        "Supported high-level security and access control for government officials, including a former U.S. President, within a 14,000+ personnel division.",
        "Demonstrated immediate leadership and critical judgment by assuming the role of Shift Lead after relieving a derelict supervisor, ensuring continuous mission integrity."
      ]
    }
  ]

  return (
    <section id="resume" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="border-b-2 border-primary pb-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience</h2>
          <p className="text-sm tracking-widest text-muted-foreground uppercase mt-2">
            Professional Background
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border-l-4 border-primary shadow-sm">
                  <div className="flex items-start gap-4">
                    <Briefcase className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-base text-muted-foreground mb-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground italic mb-3">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm flex items-start">
                            <span className="text-primary mr-2 mt-1">▪</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-card p-6 rounded-lg border-2 border-border shadow-sm sticky top-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <p className="font-semibold mb-2">University of Mobile</p>
              <p className="text-sm text-muted-foreground mb-1">BSc in Business Administration</p>
              <p className="text-sm text-muted-foreground mb-1">Major: Finance</p>
              <p className="text-sm text-primary font-semibold mb-6">GPA: 3.71/4.0 | Dec 2026</p>

              <div className="border-t pt-6 mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["LBO Modeling", "DCF", "Valuation", "Credit Analysis", "Excel", "Trading Comps"].map((skill, index) => (
                    <span key={index} className="text-xs px-3 py-1 bg-muted text-foreground rounded-full border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => window.open('/Zachary_Smith_Resume.pdf', '_blank')}
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
