/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Quote, Sparkles } from "lucide-react";
import { useRef } from "react";

const questions = [
  {
    id: "01",
    question: "나는 어떤 사람인가?",
    summary: "누군가 덜 헤매게 만드는 걸 좋아하는 사람",
    description: "나는 내가 잘하는 것보다, 누군가 덜 힘들게 만드는 것에 더 관심이 많다. 그래서 문제를 같이 풀어주거나 방향을 잡아주는 역할에 자연스럽게 끌린다.",
    image: "https://picsum.photos/seed/direction/1200/1200"
  },
  {
    id: "02",
    question: "나는 왜 이런 걸 하게 됐을까?",
    summary: "도움을 많이 못 받고 여기까지 왔기 때문에",
    description: "나는 누군가가 쉽게 알려줬다면 덜 힘들었을 것들을 혼자서 찾아가며 배운 시간이 많았다. 그래서 뒤에 오는 사람들은 조금 더 편하게 갔으면 한다.",
    image: "https://picsum.photos/seed/journey/1200/1200"
  },
  {
    id: "03",
    question: "나는 언제 가장 재밌는가?",
    summary: "누군가 막혀 있을 때",
    description: "방향을 못 잡고 있거나, 어디서부터 시작해야 할지 모르는 상황에서 내가 길을 열어줄 때 가장 몰입한다.",
    image: "https://picsum.photos/seed/insight/1200/1200"
  },
  {
    id: "04",
    question: "나는 어떤 방식으로 움직이는가?",
    summary: "감으로 두지 않고 구조로 바꾼다",
    description: "문제를 그냥 두지 않고 정리하고, 반복되는 건 자동화하고, 다른 사람이 이해할 수 있게 설명하는 방식으로 풀어낸다.",
    image: "https://picsum.photos/seed/structure/1200/1200"
  },
  {
    id: "05",
    question: "나는 앞으로 어떤 사람이 되고 싶은가?",
    summary: "누군가의 시간을 줄여주는 사람",
    description: "내가 겪었던 시행착오를 줄여주고, 더 빠르게 성장할 수 있게 돕는 사람이 되고 싶다.",
    image: "https://picsum.photos/seed/future/1200/1200"
  }
];

const keywords = [
  "조직문화", "사람", "몰입", "문제 해결", "구조화", "자동화", "멘토링", "성장", "방향"
];

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div ref={containerRef} className="bg-bg min-h-screen selection:bg-white selection:text-black relative">
      <div className="atmosphere" />
      
      {/* Hero Section */}
      <section className="scroll-section">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="question-number flex items-center gap-2">
                <Sparkles size={14} className="text-white" />
                Personal Record / Interview
              </span>
              <h1 className="question-title">
                박재현이라는 사람을 <br />
                <span className="italic text-white/40">5가지 질문</span>으로 <br />
                설명한다면
              </h1>
              <p className="text-2xl md:text-3xl font-light mb-8 text-white/80 leading-snug">
                “나는 누군가 <span className="text-white font-medium">덜 헤매게</span> 만드는 사람이다”
              </p>
              <p className="text-lg md:text-xl text-muted max-w-md leading-relaxed">
                사람을 도와주고, 막힌 걸 풀어주고, <br />
                더 나은 방향을 같이 찾는 걸 좋아한다.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="image-container rotate-3 scale-110">
              <img 
                src="https://picsum.photos/seed/park-jaehyun/1200/1200" 
                alt="Hero" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="image-overlay" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs">
              <p className="text-sm italic text-muted">
                "방향을 못 잡고 있을 때, 내가 길을 열어줄 때 가장 몰입한다."
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-4 text-muted/40">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Scroll Down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Question Sections */}
      {questions.map((q, index) => (
        <div key={q.id}>
          <section className="scroll-section">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <motion.div 
                {...fadeIn}
                className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
              >
                <div className="glass-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-700">
                    <Quote size={120} />
                  </div>
                  <div className="question-number">Question {q.id}</div>
                  <h2 className="question-title text-3xl md:text-5xl lg:text-6xl">{q.question}</h2>
                  <p className="answer-summary">{q.summary}</p>
                  <p className="answer-description">{q.description}</p>
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="image-container group">
                  <img 
                    src={q.image} 
                    alt={q.question} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="image-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="font-mono text-xs tracking-widest uppercase bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                      View Insight
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          <div className="section-divider" />
        </div>
      ))}

      {/* Keywords Section */}
      <section className="scroll-section bg-white/[0.02]">
        <motion.div 
          {...fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="question-number">Keywords</span>
          <h2 className="question-title italic mb-12">생각의 조각들</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {keywords.map((word, i) => (
              <motion.span 
                key={word} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="keyword-tag"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Ending Section */}
      <section className="scroll-section">
        <motion.div 
          {...fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-16 opacity-20">
            <Quote size={60} className="mx-auto" />
          </div>
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] mb-16 tracking-tight">
            결국 나는, <br />
            사람이 <span className="italic text-white/60 underline underline-offset-8 decoration-white/20">덜 헤매고</span> <br />
            더 잘 나아가도록 돕는 역할을 <br />
            <span className="font-light">계속 하고 싶다.</span>
          </p>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left">
              <p className="font-mono text-[10px] text-muted tracking-[0.4em] uppercase mb-2">Location</p>
              <p className="text-sm">Seoul, South Korea</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block" />
            <div className="text-center">
              <p className="font-mono text-[10px] text-muted tracking-[0.4em] uppercase mb-2">Status</p>
              <p className="text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for Collaboration
              </p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block" />
            <div className="text-right">
              <p className="font-mono text-[10px] text-muted tracking-[0.4em] uppercase mb-2">Contact</p>
              <p className="text-sm">star3175@gmail.com</p>
            </div>
          </div>
          
          <p className="mt-24 font-mono text-[9px] text-muted/30 tracking-[0.5em] uppercase">
            © 2026 Jaehyun Park. Crafted with Intention.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
