import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import i18n from "i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="Projects">
        <h1>Projects</h1>
    </div>
  );
}

export default Projects;
