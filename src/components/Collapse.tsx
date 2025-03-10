import { useRef } from "react";

interface CollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Collapse = ({ isOpen, children }: CollapseProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        overflow: "hidden",
        transition: "height 0.3s ease",
        height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default Collapse;
