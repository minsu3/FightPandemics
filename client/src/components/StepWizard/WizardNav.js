import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ICONS
import SvgIcon from "../Icon/SvgIcon";
import nextArrow from "assets/icons/next-arrow.svg";
import backArrow from "assets/icons/back-arrow.svg";

const StyledWizardNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 1rem;
  width: 100%;

  & + div {
    display: flex;
    flex-flow: row wrap;
    max-height: calc(100% - 8rem); /* align-items: stretch; */

    & > div {
      min-height: 100%;
    }
  }
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  color: black;
  display: flex;
  flex-flow: row no-wrap;
  align-items: center;
  justify-content: flex-start;
  width: 50%;

  p {
    margin: 1rem;
  }
`;

const NextButtonWrapper = styled(ButtonWrapper)`
  background-color: #425af2;
  width: 40%;
  color: white;
  border-radius 50px;
  padding: 0 5px;
  justify-content: center;
`;

const PrevButton = styled(SvgIcon)`
  cursor: pointer;
`;

const NextButton = styled(SvgIcon)`
  cursor: pointer;
`;

const WizardNav = ({ currentStep, nextStep, previousStep, totalSteps }) => (
  <StyledWizardNav>
    {currentStep > 1 ? (
      <ButtonWrapper onClick={previousStep}>
        <PrevButton
          src={backArrow}
          a11yTitle={`Navigate to step ${currentStep - 1}`}
        />
        <p>Back</p>
      </ButtonWrapper>
    ) : (
      <Link to={"/"}>
        <PrevButton src={backArrow} a11yTitle="Navigate to the homepage" /> Back
      </Link>
    )}
    {currentStep < totalSteps && (
      <NextButtonWrapper onClick={nextStep}>
        <p>Next</p>
        <NextButton src={nextArrow} />
      </NextButtonWrapper>
    )}
  </StyledWizardNav>
);

export default WizardNav;
