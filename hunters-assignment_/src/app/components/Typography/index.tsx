import * as React from "react";

import styled from "styled-components";

const headingDefaults = `
	color: #001147;
	font-family: "Montserrat";
	font-weight: 800;
`;

export const HeadingOne = styled.h1`
  ${headingDefaults}
  font-size: 60px;
  line-height: 100px;
  letter-spacing: 2.15px;
	margin: 0;
	overflow-wrap: break-word;
`;

export const HeadingTwo = styled.h2`
  ${headingDefaults}
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 1.15px;
`;

export const HeadingThree = styled.h3`
	font-family: "Montserrat";
  font-weight: 600;
	color: #fff;
	font-size: 22px;
	line-height: 25px;
	letter-spacing: 1.15px;
`;

export const HeadingFourLight = styled.h3`
  font-family: "Montserrat";
	font-weight: 550;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: 1.15px;
  color:#ffd11a;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.65px;
  line-height: 32px;
  font-family: "Montserrat";
  padding:3px;
`;
export const ParagraphTiny = styled.p`
  color: #001147;
  font-weight: 500;
  letter-spacing: 0.65px;
  line-height: 20px;
  font-size:12px;
  font-family: "Montserrat";
  padding:5px;
  margin-left:5px;
`;