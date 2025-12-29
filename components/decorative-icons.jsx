"use client"

import { Brain, Database, Code2, Cpu, Network, Zap, BarChart3, GitBranch } from "lucide-react"

export function DecorativeIcons() {
  const icons = [
    {
      Icon: Brain,
      className: "top-[20%] left-[8%] md:left-[15%] lg:left-[18%]",
      delay: "0s",
      size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    },
    {
      Icon: Database,
      className: "top-[30%] left-[5%] md:left-[12%] lg:left-[15%]",
      delay: "0.2s",
      size: "w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16",
    },
    {
      Icon: Code2,
      className: "top-[18%] right-[8%] md:right-[15%] lg:right-[18%]",
      delay: "0.4s",
      size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    },
    {
      Icon: Cpu,
      className: "top-[38%] right-[6%] md:right-[12%] lg:right-[15%]",
      delay: "0.6s",
      size: "w-11 h-11 md:w-15 md:h-15 lg:w-18 lg:h-18",
    },
    {
      Icon: Network,
      className: "bottom-[28%] left-[7%] md:left-[14%] lg:left-[17%]",
      delay: "0.8s",
      size: "w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16",
    },
    {
      Icon: Zap,
      className: "bottom-[40%] left-[10%] md:left-[18%] lg:left-[22%]",
      delay: "1s",
      size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20",
    },
    {
      Icon: BarChart3,
      className: "bottom-[32%] right-[8%] md:right-[14%] lg:right-[17%]",
      delay: "1.2s",
      size: "w-11 h-11 md:w-15 md:h-15 lg:w-18 lg:h-18",
    },
    {
      Icon: GitBranch,
      className: "bottom-[22%] right-[12%] md:right-[18%] lg:right-[22%]",
      delay: "1.4s",
      size: "w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16",
    },
  ]

  return (
    <>
      {icons.map(({ Icon, className, delay, size }, index) => (
        <div
          key={index}
          className={`absolute ${className} opacity-40 md:opacity-35 animate-float hidden sm:block`}
          style={{ animationDelay: delay }}
        >
          <Icon className={`${size} text-purple-500`} strokeWidth={1.5} />
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
