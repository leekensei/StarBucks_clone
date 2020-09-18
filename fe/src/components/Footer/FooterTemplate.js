import React from "react";
import styled from "styled-components";
import footer_logo from "../../images/footer_logo.png";
import Awards from "./Awards";
import BottomFooter from "./BottomFooter";

const FooterTemplate = () => {
  const StyledFooter = styled.div`
    width: 100vw;
    height: 100vh-120px;
    background: #2c2a29;
    padding: 32px 0px;
    box-sizing: border-box;
    & a {
      &:hover {
        text-decoration: underline;
      }
    }
    & ul {
      padding: 0;
      li {
        list-style: none;
      }
    }
  `;
  const TopFooter = styled.div`
    background: url(${footer_logo}) right 8px no-repeat;
    width: 600px;
    margin: 0px auto;
    padding-bottom: 30px;
    .wrapper {
      display: grid;
      grid-template-columns: 195px 195px 195px;
      row-gap: 25px;
      & span {
        font: 14px arial, HelveticaNeue, DroidSans, Sans-serif, Helvetica;
        color: white;
      }
      & li {
        font: 12px "nbg", "맑은 고딕", HelveticaNeue, DroidSans, Sans-serif,
          Helvetica;
        color: white;
        height: 24px;
      }
      & a {
        font-weight: bold;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  `;
  const MidFooter = styled.div`
    .wrapper {
      width: 620px;

      margin: 0 auto;
    }
    height: 80px;
    padding: 10px;
    background: #282828;
    box-sizing: border-box;
  `;

  return (
    <StyledFooter>
      <TopFooter>
        <div className="wrapper">
          <div className="grid">
            <span>
              <a>COMPANY</a>
            </span>
            <ul>
              <li>
                <a>한눈에 보기</a>
              </li>
              <li>
                <a>스타벅스 사명</a>
              </li>
              <li>
                <a>스타벅스 소개</a>
              </li>
              <li>
                <a>국내 뉴스룸</a>
              </li>
              <li>
                <a>세계의 스타벅스</a>
              </li>
              <li>
                <a>글로벌 뉴스룸</a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <span>
              <a>CORPORATE SALES</a>
            </span>
            <ul>
              <li>
                <a>단체 및 기업 구매 안내</a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <span>
              <a>PARTNERSHIP</a>
            </span>
            <ul>
              <li>
                <a>신규 입점 제외</a>
              </li>
              <li>
                <a>협력 고객사 등록신청</a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <span>
              <a>ONLINE COMMUNITY</a>
            </span>
            <ul>
              <li>
                <a>페이스북</a>
              </li>
              <li>
                <a>트위터</a>
              </li>
              <li>
                <a>유튜브</a>
              </li>
              <li>
                <a>블로그</a>
              </li>
              <li>
                <a>인스타그램</a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <span>
              <a>RECRUIT</a>
            </span>
            <ul>
              <li>
                <a>채용 소개</a>
              </li>
              <li>
                <a>채용 지원하기</a>
              </li>
            </ul>
          </div>
        </div>
      </TopFooter>
      <MidFooter>
        <div className="wrapper">
          <Awards />
        </div>
      </MidFooter>
      <BottomFooter />
    </StyledFooter>
  );
};

export default FooterTemplate;
