import React, { useState,
useEffect } from "react";
import { slice, concat } from "lodash";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import i18n from "i18next";
import Projects from "../Data/projects";

function Project() {
  const { t } = useTranslation();

  const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(Projects) : setFilteredImages(Projects.filter(x => x.category === tag));
		},
		[tag]
	);

  const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

  return (
    <>
      <div className="utility">
        <div className="container">
          <div className="ul">
            <h1>{t("projects")}</h1>
            <span>
              {t("home")} <i className="fa fa-chevron-right"></i> {t("projects")}
            </span>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> 
              <TagButton name="Social" tagActive={tag === 'Social' ? true : false} handleSetTag={setTag} /> 
              <TagButton name="Branding" tagActive={tag === 'Branding' ? true : false} handleSetTag={setTag} /> 
              <TagButton name="Website" tagActive={tag === 'Website' ? true : false} handleSetTag={setTag} /> 
              <TagButton name="MOBILE" tagActive={tag === 'MOBILE' ? true : false} handleSetTag={setTag} />
            </div>
            {filteredImages.map((x, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <Link to={`/SingleProject/${x.id}`}>
                    <div className="pro" style={{ backgroundImage: `url(${x.src})` }}>
                      <div>
                        <h1>{x.step}</h1>
                        <span>{x.name}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
