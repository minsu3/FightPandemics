import React from 'react';
import styled from "styled-components";
import { NoticeBar } from 'antd-mobile';

import { theme, mq } from "../../constants/theme";


const { colors } = theme;
const { typography } = theme;
const { xlarge, xxlarge, medium } = typography.size;
const { royalBlue } = colors;

const EmergencyLine = styled(NoticeBar)`
     height: auto;
     background-color: #D1222C;
     color: #fff;
     margin-top: 3rem;
     position: relative;
     box-shadow: 0px 4px 1rem rgba(0, 0, 0, 0.05);
     border-radius: 0px 0px .4rem .4rem;
     font-size: ${xlarge};
     .am-notice-bar-content {
       padding-left: 1rem 4rem;
       font-weight: normal;
     }
     .am-notice-bar-operation {
       display: block;
       position: absolute;
       top: .5rem;
       right: .5rem;
     }
     h4 {
       color: #fff;
       margin-bottom: 0;
     }
     h3 {
       color: #fff
     }
    @media screen and (min-width: ${mq.phone.wide.maxWidth}) {

        border: 1px solid rgba(185, 185, 185, 0.5);
        padding: 2rem;
        padding-left: 4rem;
        background-color: #fff;
        height: auto;
        box-shadow: none;
        .am-notice-bar-operation {
          display: none;
        }
        h4 {
          font-weight: bold;
          color: #000;
          font-size: ${medium}
        }
        h3 {
          font-weight: bold;
          color: ${royalBlue};
          border-bottom: 1px solid ${royalBlue};
          display: inline;
          font-size: ${xxlarge};
          border-radius: 2px;
          padding: 0 .4rem;
        }

      }

      @media screen and (max-width: ${mq.tablet.wide.maxWidth}) {
        padding: 0;
        padding-left: 0;
      }

`;


const LocalEmergencyNumber = props => {

  return (
    <EmergencyLine mode="closable" icon={null} {...props}>
       <h4>Local emergency number</h4>
       <h3>911</h3>
    </EmergencyLine>
  )
}


export default LocalEmergencyNumber;
