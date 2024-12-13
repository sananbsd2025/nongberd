"use client";

import React from "react";

const DownloadPage: React.FC = () => {
  const handleDownload = async () => {
    const response = await fetch("/api/generate-pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>ดาวน์โหลดข้อมูลเป็น PDF</h1>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default DownloadPage;
