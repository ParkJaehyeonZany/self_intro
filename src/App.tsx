/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Quote } from "lucide-react";

const questions = [
  {
    id: "01",
    question: "나는 어떤 사람인가?",
    summary: "누군가 덜 헤매게 만드는 걸 좋아하는 사람",
    description: "나는 내가 잘하는 것보다, 누군가 덜 힘들게 만드는 것에 더 관심이 많다. 그래서 문제를 같이 풀어주거나 방향을 잡아주는 역할에 자연스럽게 끌린다."
  },
  {
    id: "02",
    question: "나는 왜 이런 걸 하게 됐을까?",
    summary: "도움을 많이 못 받고 여기까지 왔기 때문에",
    description: "나는 누군가가 쉽게 알려줬다면 덜 힘들었을 것들을 혼자서 찾아가며 배운 시간이 많았다. 그래서 뒤에 오는 사람들은 조금 더 편하게 갔으면 한다."
  },
  {
    id: "03",
    question: "나는 언제 가장 재밌는가?",
    summary: "누군가 막혀 있을 때",
    description: "방향을 못 잡고 있거나, 어디서부터 시작해야 할지 모르는 상황에서 내가 길을 열어줄 때 가장 몰입한다."
  },
  {
    id: "04",
    question: "나는 어떤 방식으로 움직이는가?",
    summary: "감으로 두지 않고 구조로 바꾼다",
    description: "문제를 그냥 두지 않고 정리하고, 반복되는 건 자동화하고, 다른 사람이 이해할 수 있게 설명하는 방식으로 풀어낸다."
  },
  {
    id: "05",
    question: "나는 앞으로 어떤 사람이 되고 싶은가?",
    summary: "누군가의 시간을 줄여주는 사람",
    description: "내가 겪었던 시행착오를 줄여주고, 더 빠르게 성장할 수 있게 돕는 사람이 되고 싶다."
  }
];

const keywords = [
  "조직문화", "사람", "몰입", "문제 해결", "구조화", "자동화", "멘토링", "성장", "방향"
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  return (
    <div className="bg-bg min-h-screen selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="scroll-section relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-muted text-sm tracking-widest uppercase mb-6 block">
            Personal Record / Interview
          </span>
          <h1 className="font-serif text-4xl md:text-7xl mb-8 leading-tight">
            박재현이라는 사람을 <br />
            <span className="italic opacity-70">5가지 질문</span>으로 설명한다면
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 text-ink/80">
            “나는 누군가 덜 헤매게 만드는 사람이다”
          </p>
          <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            사람을 도와주고, 막힌 걸 풀어주고, <br />
            더 나은 방향을 같이 찾는 걸 좋아한다.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0"
        >
          <div className="flex flex-col items-center md:items-start gap-4 text-muted">
            <span className="text-xs font-mono uppercase tracking-widest">Scroll to read</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Question Sections */}
      {questions.map((q, index) => (
        <section key={q.id} className="scroll-section border-t border-accent/30">
          <motion.div {...fadeIn}>
            <div className="question-number">Question {q.id}</div>
            <h2 className="question-title">{q.question}</h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
              <div className="flex-1">
                <p className="answer-summary">{q.summary}</p>
                <p className="answer-description">{q.description}</p>
              </div>
              <div className="hidden lg:block opacity-10">
                <Quote size={120} />
              </div>
            </div>
          </motion.div>
        </section>
      ))}

      {/* Keywords Section */}
      <section className="scroll-section border-t border-accent/30 bg-accent/5">
        <motion.div {...fadeIn}>
          <span className="question-number">Keywords</span>
          <h2 className="question-title italic">생각의 조각들</h2>
          <div className="flex flex-wrap gap-3 max-w-3xl mt-8">
            {keywords.map((word) => (
              <span key={word} className="keyword-tag">
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Ending Section */}
      <section className="scroll-section border-t border-accent/30 text-center items-center">
        <motion.div 
          {...fadeIn}
          className="max-w-2xl"
        >
          <p className="font-serif text-2xl md:text-4xl leading-relaxed mb-12">
            결국 나는, <br />
            사람이 <span className="italic">덜 헤매고</span> <br />
            더 잘 나아가도록 돕는 역할을 <br />
            계속 하고 싶다.
          </p>
          <div className="h-px w-12 bg-muted mx-auto mb-8 opacity-30"></div>
          <p className="font-mono text-xs text-muted tracking-widest uppercase">
            © 2026 Jaehyun Park. All rights reserved.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
