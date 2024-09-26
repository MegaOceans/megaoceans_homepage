import Questions from "./questions/questions";

export default function Faq() {
  return (
    <div className="w-full flex flex-col items-center gap-12 text-white ">
      <p className="text-5xl font-extrabold">FaQ</p>
      <div className="w-view flex flex-col items-center gap-6">
        <Questions
          question={"Why wouldn't I just hire a full-time instead?"}
          answer={
            "The cost of hiring a full-time senior-level designer/developer now exceeds $100,000 annually, plus benefits. Additionally, there may be periods when you don't have enough work to keep them busy, resulting in paying for unused time. However, with the monthly plan, you have the flexibility to pause and resume your subscription as needed, ensuring that you only pay for the service when you have work available."
          }
        />
        <Questions
          question={"What is included in a custom project?"}
          answer={
            "For custom projects, we provide a tailored approach to meet your specific design needs. This could include UX/UI design, Webflow development, branding, and more. We work closely with you to define the scope, timeline, and deliverables."
          }
        />
        <Questions
          question={"Why wouldn't I just hire a full-time instead?"}
          answer={
            "The cost of hiring a full-time senior-level designer/developer now exceeds $100,000 annually, plus benefits. Additionally, there may be periods when you don't have enough work to keep them busy, resulting in paying for unused time. However, with the monthly plan, you have the flexibility to pause and resume your subscription as needed, ensuring that you only pay for the service when you have work available."
          }
        />
      </div>
    </div>
  );
}
