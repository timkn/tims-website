"use client";

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { useState } from "react";
import { IconLaurelWreath, IconSearch, IconX } from "@tabler/icons-react";

export default function NudgeSense() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageIndex: number) => {
    setSelectedImage(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10 lg:mb-20">
        <div className="flex items-center justify-center">
          <Badge className="p-2 px-3 text-sm mb-6 font-mono bg-dark-sky-foreground text-white-sky dark:bg-white-sky-foreground dark:text-dark-sky flex items-center justify-center gap-2 text-center leading-tight">
            <IconLaurelWreath className="flex-shrink-0" />
            <span className="sm:hidden">Swift Student Challenge Winner</span>
            <span className="hidden sm:inline">
              Apple Swift Student Challenge 2025 Winner
            </span>
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 font-mono">
          NudgeSense
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          NudgeSense empowers users to identify and counteract subtle digital
          influences that manipulate their decision-making, enabling more
          informed and autonomous choices.
        </p>
      </div>

      {/* Apple Banner Section Separator */}
      <div className="relative flex items-center justify-center mb-20">
        <div className="w-full max-w-md mx-auto">
          <img
            src="/SSC2025_16x9.jpg"
            alt="Apple Swift Student Challenge Banner"
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>

      {/* Screenshots */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 font-mono">
          Interface
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto px-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative cursor-pointer group"
              onClick={() => openModal(num)}
            >
              <img
                src={`/sc${num}.png`}
                alt={`NudgeSense Screenshot ${num}`}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3">
                  <IconSearch className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close button - always visible in top right */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 z-60 bg-black/50 hover:bg-black/70 text-white/90 hover:text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200"
          >
            <IconX className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl max-h-full">
            <img
              src={`/sc${selectedImage}.png`}
              alt={`NudgeSense Screenshot ${selectedImage}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* About */}
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 font-mono">
          About
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 px-4">
          <p>
            In today's digital landscape, subtle cues and design techniques
            influence our decisions often without our awareness. NudgeSense
            empowers you to uncover these hidden influences and take control of
            your choices through interactive education and real-time analysis.
          </p>
          <p>
            The app teaches behavioral psychology concepts while demonstrating
            how nudging works through its own design. Features like XP systems,
            level progression, and streak tracking use the very principles
            you're learning about making the educational experience both
            engaging and self-reflective.
          </p>
          <p>
            Built entirely with Apple's native frameworks, NudgeSense processes
            everything on-device for complete privacy. No registration required,
            no data leaves your device just immediate access to tools that help
            you recognize when you're being nudged across digital platforms and
            make more informed, autonomous decisions.
          </p>
        </div>
      </div>

      {/* Design Philosophy */}
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 font-mono">
          Design Philosophy
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 px-4">
          <p>
            An outstanding user experience was particularly important, which is
            why I followed Apple's design guidelines and used SwiftUI. My goal
            was to develop an intuitive and aesthetically pleasing app that
            works without extensive explanations, incorporating a short and
            concise onboarding for first-time users.
          </p>
          <p>
            SwiftUI enabled me to quickly prototype a clean, responsive user
            interface that feels natural and self-explanatory. Through SwiftUI's
            declarative nature, I could implement a consistent, modern design
            that works seamlessly across all devices.
          </p>
          <p>
            I placed particular emphasis on text readability with large fonts,
            clear colors, and consistent color schemes. I also focused on
            accessibility by choosing high-contrast colors and supporting
            Dynamic Type, allowing users to adjust font sizes.
          </p>
        </div>
      </div>

      {/* Technical Approach */}
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 font-mono">
          Technical Approach
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 px-4">
          <p>
            For text analysis, I used Apple's Natural Language Framework, which
            provides powerful NLP functions like lemma extraction and pattern
            matching directly on the device. This on-device processing is not
            only fast and reliable but also works completely offline,
            significantly improving privacy.
          </p>
          <p>
            Since these built-in functions were completely sufficient, I
            deliberately avoided external AI tools. It was also important to me
            that users don't need to register anywhere and can start
            immediately, with only technically necessary data being stored.
          </p>
          <p>
            The app is optimized for both iPad and iPhone, making thoughtful use
            of screen real estate for example, in landscape mode on iPad,
            elements are displayed side by side to optimally utilize the width.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 font-mono">
          Built with
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto px-4">
          {[
            "Swift",
            "iOS",
            "SwiftUI",
            "Core ML",
            "Natural Language framework",
          ].map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-base px-4 py-2"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 font-mono">
          Learn More
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center max-w-sm sm:max-w-2xl mx-auto px-4">
          <Button
            asChild
            className="group text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
          >
            <a
              href="https://developer.apple.com/swift-student-challenge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Swift Student Challenge
            </a>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
          >
            <a
              href="https://developer.apple.com/wwdc25/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WWDC25
            </a>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
          >
            <a
              href="https://www.linkedin.com/posts/timkn_swiftstudentchallenge-apple-wwdc25-activity-7311401367053488130-6-cE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI9i8oBI_G7jtUd5zdkz2fjV1jecsNOolo"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Post
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
