import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { slice, concat } from "lodash";
import "../translations/i18n";
import Service from "../Data/services";
import i18n from "i18next";
import img from "../img/image-17-copyright-px6a5xgfkxbli55x5ol9l1l5bail6rkjoyxu8r6sra.jpg"
import img1 from "../img/blank-billboard-advertisement-isolated-wall-background-empty-mockup-template-800x449.jpg"
import img2 from "../img/arno-senoner-Ie8k7RgNYmU-unsplash-phvsyth074k90a980fd1yr65e6y76i7zxtv2e8lh04.jpg"
import ContactForm from "../forms/contactForm";

const DATA = Service
const LIMIT = 6;
function Services() {
  const { t } = useTranslation();
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempimgSrc] = useState('')
  const [title, setTitle] = useState('')
  const [header, setHeader] = useState('')

  const getImg = (src, title, header) => {
    setTempimgSrc(src);
    setTitle(title)
    setHeader(header)
    setModel(true)
  }

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + 3;
    const newShowMore = newIndex <= DATA.length - 1;
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };
  return (
    <>
      <div className="utility">
        <div className="container">
          <div className="ul">
            <h1>{t("Services")}</h1>
            <span>
              {t("home")} <i className="fa fa-chevron-right"></i> {t("Services")}
            </span>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("SERVICES")}</h1>
              <p>{t("Services_description")}</p>
            </div>
            {list.map((x, index) => (
                <div className="col-lg-4 col-md-6" key={index} onClick={() => getImg(x.src, x.name, x.span)}>
                  <div className="best">
                    <i className={x.icon}></i>
                    <h1 className="Business">
                      {i18n.language === "en" ? x.span : x.span_ar}
                    </h1>
                    <p className="Business_description">
                      {i18n.language === "en" ? x.name : x.name_ar}
                    </p>
                    <Link to="/Contact" className="LEAREN_MORE">{t("Book_now")}</Link>
                  </div>
                </div>
              ))}
            <div className="col-lg-12 text-center">
              {showMore && (
                <button className="VIEW_MORE" onClick={loadMore}> {t("VIEW_MORE")} </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={model ? "model open" : "model"}>
        <Link onClick={() => setModel(false)}><i className="fa fa-times"></i></Link>
        <div className="row">
          <div className="col-md-6">
            <img src={tempimgSrc} />
          </div>
          <div className="col-md-6">
            <h1 className="Business">
              {header}
            </h1>
            <p className="Business_description">
              {title}
            </p>
            <Link to="/Contact" className="LEAREN_MORE">{t("Book_now")}</Link>
          </div>
        </div>
      </div>
      <div className="design en">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 t">
              <span>{t("CORPORATE")}</span>
              <h1>{t("CORPORATE_header")}</h1>
              <p>{t("Design_des")}</p>
              <ul>
                <li>{t("design_1")}</li>
                <li>{t("design_2")}</li>
                <li>{t("design_3")}</li>
                <li>{t("design_4")}</li>
                <li>{t("design_5")}</li>
                <li>{t("design_6")}</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="design-img">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offer en">
        <div className="container">
          <div className="offer-brand">
            <span>{t("offer")}</span>
            <h1>{t("offer_header")}</h1>
            <h4>{t("offer_price")}</h4>
            <p>{t("offer_des")}</p>
            <div>
              <img src={img1} alt="" />
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="plan en">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img alt="" src={img2} />
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center flex-column h-100">
                <div className="choose">
                  <span>{t("price")}</span>
                  <h1>{t("price_header")}</h1>
                  <p>{t("price_des")}</p>
                </div>
                <div className="d-flex">
                  <div className="price">
                    <i className="fa-solid fa-handshake"></i>
                    <h2>{t("Guarantee")}</h2>
                    <p>{t("Guarantee_des")}</p>
                    <Link className="read" to="/Contact">{t("LEAREN_MORE")}</Link>
                  </div>
                  <div className="price">
                    <i className="fa-solid fa-headset"></i>
                    <h2>{t("Support")}</h2>
                    <p>{t("Support_des")}</p>
                    <Link className="read" to="/Contact">{t("LEAREN_MORE")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="have en">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <span>{t("have")}</span>
                <h1>{t("have_header")}</h1>
                <p>{t("have_des")}</p>
                <h3><i className="fa-solid fa-location-dot"></i>{t("location_des")}</h3>
                <a href="tel: 01154258770"><i className="fa-solid fa-phone-volume"></i>01154258770</a>
                <a href="mailto: info@email.com"><i className="fa-solid fa-envelope-open-text"></i>info@email.com</a>
              </div>
            </div>
            <div className="col-lg-6"><ContactForm /></div>
          </div>
        </div>
      </div>
      <div className="creative">
        <div className="container">
          <h1><span>{t("creative_1")}</span>{t("creative_2")}<br />
          <span>{t("creative_3")}</span>{t("creative_4")}</h1>
        </div>
      </div>
    </>
  );
}

export default Services;
