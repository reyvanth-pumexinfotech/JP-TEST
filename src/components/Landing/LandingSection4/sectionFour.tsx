"use client";
import { useState, useRef, useCallback, useEffect, memo } from "react";
import Image from "next/image";
import "./sectionFour.css";


type Step = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Project Briefing",
    image: "https://d2l4gl47o0xxs9.cloudfront.net/ProjectBriefing.jpg",
    description:
      "We initiate our journey by conducting an in-depth consultation to understand your requirements. During this phase, we carefully explore your vision, strategic objectives, and specific preferences.",
  },
  {
    id: 2,
    title: "Strategic Planning",
    image: "https://d2l4gl47o0xxs9.cloudfront.net/strategicPlanning.jpg",
    description:
      "We carefully assess your project scope and create a strategic roadmap to guide execution. This involves planning key milestones, deliverables, and aligning resources to meet your objectives.",
  },
  {
    id: 3,
    title: "Design & Development",
    image: "https://d2l4gl47o0xxs9.cloudfront.net/Development.jpg",
    description:
      "Our creative and development teams collaborate to bring your vision to life. We ensure an iterative process with your feedback at every stage to refine and perfect the project.",
  },
  {
    id: 4,
    title: "Product Delivery",
    image: "https://d2l4gl47o0xxs9.cloudfront.net/productDelivery.jpg",
    description:
      "We finalize and deliver your project with utmost precision, ensuring quality assurance and seamless deployment for a successful launch.",
  },
];


const StepNumber = memo(({ 
  id, 
  isActive, 
  onClick 
}: { 
  id: number; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <div
    className={`number-selections ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    <h1>{isActive ? `Step ${id}` : id}</h1>
  </div>
));

StepNumber.displayName = "StepNumber";

function SectionFour() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observersRef = useRef<IntersectionObserver[]>([]);
  
  const handleStepClick = useCallback((step: number) => {
    setActiveStep(step);
    const targetSection = sectionRefs.current[step - 1];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  // Intersection observers for each card
  useEffect(() => {
    // Cleanup previous observers
    observersRef.current.forEach(observer => observer.disconnect());
    observersRef.current = [];
    

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveStep(index + 1);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "-20% 0px"
        }
      );
      
      observer.observe(section);
      observersRef.current.push(observer);
    });
    
 
    return () => {
      observersRef.current.forEach(observer => observer.disconnect());
    };
  }, []);

 
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const halfWindowHeight = windowHeight / 2;

      let closestSection = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - halfWindowHeight);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });

    
      if (closestSection + 1 !== activeStep) {
        setActiveStep(closestSection + 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeStep]);

  return (
    <div 
      className="landing-section-four-main-div"
      style={{
        backgroundImage: `url("https://d2l4gl47o0xxs9.cloudfront.net/landing-assets/Landing-section-one-bg.svg")`,
      }}
    >
      <div className="landing-section-four-main-div-left">
        <div className="how-we-do-it-tag-div">
          <h2>How we do it</h2>
        </div>
        <h1>
          Transform your vision into reality with a seamless and exciting journey!
        </h1>

        <div className="landing-number-swap-div">
          {STEPS.map(({ id }) => (
            <StepNumber
              key={id}
              id={id}
              isActive={activeStep === id}
              onClick={() => handleStepClick(id)}
            />
          ))}
        </div>
      </div>

      <div className="landing-section-four-main-div-right">
        {STEPS.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="landing-scroll-cards"
          >
            <div className="landing-how-card-image">
              <Image
                src={step.image}
                alt={step.title}
                width={500}
                height={300}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className="landing-how-card-details">
              <h2>Step {step.id}</h2>
              <h1>{step.title}</h1>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionFour;