import React, { useState } from "react";

interface TabProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export const Tab = ({ children, isSelected, onClick }: TabProps) => {
  return (
    <button
      role="tab"
      className={`tab ${isSelected ? "tab--selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
