"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About Image"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            excepturi! Rem, perferendis error? Consequatur, amet. Aut nostrum
            iste perspiciatis corporis, aliquid, nam voluptate velit nulla
            quaerat reiciendis, veritatis molestias dolore maxime ducimus! Nihil
            ullam, quam quod eos doloremque eaque mollitia laborum nesciunt
            dolores maiores, quasi enim, beatae quae nulla at?
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
           
          </div>
        </div>
      </div>
    </section>
  );
}
