import React, { useState } from "react";

interface TabProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  title?: string;
}

export const Tab = ({ children, isSelected, onClick, title }: TabProps) => {
  return (
    <button
      role="tab"
      className={`tab ${isSelected ? "tab--selected" : ""}`}
      aria-selected={isSelected}
      aria-controls={`tabpanel-${title}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
