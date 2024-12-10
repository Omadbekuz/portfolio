import React, { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Demo uchun har bir yuklanganda tasodifiy sonni qo'shamiz
    const randomVisitors = Math.floor(Math.random() * 1000) + 1;
    setVisitors(randomVisitors);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <p style={{ fontSize: "18px", color: "#555" }}>
        💻 Saytga tashrif buyurganlar soni: <strong>{visitors}</strong>
      </p>
    </div>
  );
};

export default VisitorCounter;
