import React from "react";
import style from "./Direktorat.module.css";
import sultanovDR from "../../../../assets/img/sultanovDR.jpg";
import nurxodjayevDR from "../../../../assets/img/nurxodjayevDR.jpg";
import yusupovDR from "../../../../assets/img/yusupovDR.jpg";
import { Link } from "react-router-dom";

const DirektoratEng = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Directorate</h2>
          <p>
          Specialized branch of Tashkent State Law University
             Directorate of the President of the Republic of Uzbekistan 2019
             February 7, “Crime Prevention and Public Safety
             to improve the system of training in the field of supply
             No. PQ-4166 on Additional Measures for
             established in accordance with the decision of the Commission. {""}
          </p>
        </div>
        <div className={style.users}>
          <div className={style.user}>
            <img src={sultanovDR} alt="sultanovDR" />
            <p>
              <strong>Sultanov Muhammad Allayorovich</strong> – Chief Engineer,
               Level 3 lawyer.
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="muhammadsultanov190@gmail.com">
                  muhammadsultanov190@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={nurxodjayevDR} alt="nurxodjayevDR" />
            <p>
              <strong> Nurxodjaev Zoxiddin Ziyaviddin ogli </strong> – head
               energetic.
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="zoxiddin.94@gmail.com ">zoxiddin.94@gmail.com</Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={yusupovDR} alt="yusupovDR" />
            <p>
              <strong>Yusupov Qodirjon Qobiljon ogli </strong> – the press
               secretary
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="qodirjonyusupov25@gmail.com">
                  qodirjonyusupov25@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>

        <div className={style.paragraf}>
          <h5>Chief Engineer Service Duties:</h5>
          <ul>
            <li>
            Available internal resources of the branch or contracting organizations
               with reconstruction, capital and current repairs
               negotiation;
            </li>
            <li>
            including design estimates for capital repairs
               preparation of the building and its evacuation plan;
            </li>
            <li>
            For each object on the material and technical base of the branch
               compiling and preparing a list of individual materials;
            </li>
            <li>
            renovation of existing facilities and expensive and bulky
               to adapt the equipment to the installation in buildings
               participation in problem solving;
            </li>
            <li>
            the technical condition and equipment of the buildings and in a timely manner
               repair control;
            </li>
            <li>
            to occupational safety regulations
               organization of training;
            </li>
            <li>
            Material and technical base of the branch and fuel and energy
               provide timely reports on the use of resources
               to reach;
            </li>
            <li>
            redevelopment and operation of facilities
               make recommendations on compliance;
            </li>
            <li>
            Action against persons who have damaged the property of the branch
               make visual suggestions;
            </li>
            <li>
            Measures to prepare the branch for the autumn-winter season
               make it happen;
            </li>
            <li>
            Branch facilities and services have security features
               check their condition, check their suitability
               to go;
            </li>
            <li>
            orders for necessary materials and equipment
               clearance, material and technical means stored in the warehouse
               carries out accounting work.
            </li>
          </ul>
        </div>
        <div className={style.paragraf}>
          <h5>General energy service functions:</h5>
          <ul>
            <li>
            developing energy efficiency measures
               output, targeting energy between Branch objects
               distribution control;
            </li>
            <li>
            power outages and breakdowns
               accounting and analysis of incoming funds;
            </li>
            <li>
            rules of conduct by subordinates and
               monitoring compliance with instructions;
            </li>
            <li>
            Branch energy consumption accounting,
               Preparation of energy balance of the branch;
            </li>
            <li>
            on energy consumption with relevant organizations
               execution of contracts;
            </li>
            <li>
            energy, as well as telephone, radio,
               automated calls and alarms
               maintenance and repair of systems
               timely and quality execution and their technical condition
               exercise control over;
            </li>
            <li>
            electrical and gas equipment, ventilation equipment, etc.
               operational and subordinate personnel
               development of job descriptions;
            </li>
            <li>
            Measures to prepare the branch for the autumn-winter season
               make it happen;
            </li>
            <li>
            Branch facilities and services have security features
               check their condition, check their suitability
               to go;
            </li>
            <li>
            the initial of the insulation resistance of power systems and devices
               and organizing regular inspections;
            </li>
            <li>
            orders for necessary materials and equipment
               clearance, material and technical means stored in the warehouse
               accounting;
            </li>
            <li>
            reconstruction and modernization of energy facilities
               ordering and works of design organizations
               performance monitoring;
            </li>
            <li>
            resulting from a violation of instructions and rules
               to take action against irregularities
               submits documents to management.
            </li>
          </ul>
        </div>
        <div className={style.paragraf}>
          <h5>The main responsibilities of the press secretary:</h5>
          <ul>
            <li>
            Information policy set by the branch management
               participation in the formation and implementation;
            </li>
            <li>
            Implementation of a unified state policy in the field of information
               Information Service of the Ministry of Higher and Secondary Special Education
               and information services of state and public organizations
               ensuring effective and practical cooperation;
            </li>
            <li>
            Branch activities of the general public, normative and legal in the field
               Impartial, high-quality and prompt notification of documents,
               collaboration with the media, on a regular basis
               forming a circle of journalists working together,
               dissemination of information messages;
            </li>
            <li>
            With the staff of the designated departments of the branch
               joint news for national and foreign media,
               information materials, reviews and information-analytical
               preparation of materials;
            </li>
            <li>
            The state of public opinion in relation to the activities of the branch and
               Institute for Media Analysis and Information
               informing the director;
            </li>
            <li>
            Text, photo, audio and video related to the field of activity of the branch
               create and maintain a database of materials
               does its job.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DirektoratEng;
