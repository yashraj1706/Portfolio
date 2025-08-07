import React from "react";
import { Tilt } from "react-tilt";
import { useNavigate } from "react-router-dom";

const CertCategoryCard = ({ id, title, description, color }) => {
  const navigate = useNavigate();
  return (
    <Tilt
      options={{ scale: 1, max: 25, speed: 400 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full cursor-pointer hover:shadow-lg transition"
    >
      <div className="flex flex-col items-center justify-center h-full"
        onClick={() => navigate(`/certifications/${id}`)}
      >
        <h3 className="text-[24px] font-bold" style={{ color }}>{title}</h3>
        <p className="mt-2 text-secondary text-[14px] text-center">{description}</p>
      </div>
    </Tilt>
  );
};

export default CertCategoryCard;