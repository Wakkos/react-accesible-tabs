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
      aria-selected={isSelected}
      aria-controls={`tabpanel-${title}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
