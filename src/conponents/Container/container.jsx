import React from "react";

const About = () => {
  return (
    <div className="w-screen h-screen bg-[#999999] flex items-center justify-center">
      <div className="text-center px-5">
        <p className="text-sm md:text-base font-medium text-[#313433] mb-4">
          Varför välja mig?
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#313433] mb-6">
          JAG ÄR MYCKET KVALIFICERAD ATT HJÄLPA DIG!
        </h1>
        <p className="text-sm md:text-lg mx-auto max-w-3xl text-[#313433] leading-relaxed">
          Med en tvåårig KYH-examen i frontend-utveckling och expertis inom
          UX/UI-design har jag utvecklat webbapplikationer med React, Angular,
          TypeScript och .NET på företag som Great-IT och Medexa Diagnostisk
          Service AB. Jag är också passionerad för sociala medier och kombinerar
          tekniska färdigheter med kreativt berättande för att hantera
          plattformar och driva engagemang. Känd för mitt proaktiva tänkesätt
          och lagarbete, håller jag mig uppdaterad med trender inom både
          webbutveckling och sociala medier.
        </p>
      </div>
    </div>
  );
};

export default About;
