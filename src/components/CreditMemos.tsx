import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, ArrowRight } from "lucide-react";
import { useState } from "react";

const memos = [
  {
    title: "When Your White Knight Is Actually a Vulture",
    subtitle: "Kirkland Lake Gold: A case study in rescue financing gone wrong",
    date: "Oct 2025",
    description: "Deep dive into Kirkland Lake Gold's distressed financing, examining how rescue capital can transform into predatory terms. Analysis covers the fulcrum security, capital structure priorities, and creditor dynamics in stressed situations.",
    tags: ["Distressed Debt", "Mining", "Fulcrum Security"],
    file: "/kirkland-memo.html"
  },
  {
    title: "The Second Restructuring",
    subtitle: "Lycra: When the first fix doesn't stick",
    date: "Oct 2025",
    description: "Comprehensive analysis of Lycra's repeat restructuring, exploring why initial solutions failed and examining the challenges of sustained operational turnarounds in specialty materials. Includes detailed covenant analysis and recovery scenarios.",
    tags: ["Restructuring", "Chemicals", "Repeat Distress"],
    file: "/lycra-memo.html"
  },
  {
    title: "Party City: Post-Mortem Analysis",
    subtitle: "The anatomy of a retail liquidation",
    date: "Oct 2025",
    description: "Post-mortem examination of Party City's liquidation, analyzing the intersection of secular retail decline, overleveraged balance sheets, and COVID-accelerated changes in consumer behavior. Recovery analysis across the capital structure.",
    tags: ["Retail", "Liquidation", "Post-Mortem"],
    file: "/partycity-memo.html"
  }
];

const CreditMemos = () => {
  const [selectedMemo, setSelectedMemo] = useState<typeof memos[0] | null>(null);

  return (
    <section id="memos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="border-b-2 border-primary pb-4 mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Credit Analysis</h2>
          <p className="text-sm tracking-widest text-muted-foreground uppercase mt-2">
            Featured Memos
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {memos.map((memo, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <FileText className="w-8 h-8 text-primary" />
                  <span className="text-xs text-muted-foreground">{memo.date}</span>
                </div>
                <CardTitle className="text-2xl mb-2 leading-tight">{memo.title}</CardTitle>
                <CardDescription className="text-base italic">{memo.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-sm mb-4 text-justify leading-relaxed">{memo.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {memo.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  onClick={() => setSelectedMemo(memo)}
                >
                  Read Analysis <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary/80 text-lg font-semibold group"
            onClick={() => {/* Future: Navigate to all memos page */}}
          >
            View All Memos <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedMemo} onOpenChange={() => setSelectedMemo(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 gap-0 flex flex-col">
          <DialogHeader className="px-6 py-4 border-b shrink-0">
            <DialogTitle className="text-2xl">{selectedMemo?.title}</DialogTitle>
          </DialogHeader>
          <iframe
            src={selectedMemo?.file}
            className="w-full flex-1 border-0"
            title={selectedMemo?.title}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CreditMemos;
