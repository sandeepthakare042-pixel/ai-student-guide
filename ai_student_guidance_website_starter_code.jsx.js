import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StudentAIPlatform() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState(null);

  const handleSearch = () => {
    // Placeholder for AI API (OpenAI / Gemini / Local AI)
    setAnswer({
      title: "Answer (AI Generated)",
      explanation:
        "Ye ek simple explanation hai. AI future me isko aur accurate aur personalized bana sakta hai.",
      steps: [
        "Concept samjho",
        "Example dekho",
        "Practice questions solve karo",
      ],
      next: "Next step: Is topic ke related questions try karo",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          AI Student Guidance Platform
        </h1>
        <p className="text-slate-600 mt-2">
          Ask any question. Get easy answers. Learn step-by-step.
        </p>
      </header>

      {/* Search Box */}
      <div className="max-w-2xl mx-auto mb-6">
        <Input
          placeholder="Type your question or topic (Hindi / English)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="w-full mt-3" onClick={handleSearch}>
          Search with AI
        </Button>
      </div>

      {/* Answer Section */}
      {answer && (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{answer.title}</h2>
            <p className="mb-3 text-slate-700">{answer.explanation}</p>
            <ul className="list-disc ml-5 mb-3 text-slate-700">
              {answer.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <p className="font-medium text-green-700">{answer.next}</p>
          </CardContent>
        </Card>
      )}

      {/* Pages Preview */}
      <section className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-10">
        {[
          "Notes / Topics",
          "Ask a Question",
          "Guidance / How to Learn",
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm text-slate-600 mt-2">
                Student-friendly content with easy language.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center text-sm text-slate-500 mt-12">
        © 2026 AI Education Platform | Future-ready for Chatbot & Admin Panel
      </footer>
    </div>
  );
}
