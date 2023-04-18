import styled from "styled-components";

export const DashboardContainer = styled.div`
  position: relative;
  padding-top: 26px;
  padding-bottom: 16px;
  background: #121214;
  height: 100vh;
  overflow-y: scroll;

  .flexLogo {
    display: flex;
    justify-content: center;
  }

  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 88vw;
    padding-bottom: 30px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 79.54px;
    height: 31.95px;

    background: #212529;
    border-radius: 4px;

    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    color: #f8f9fa;
  }

  a:hover {
    background: #343b41;
  }

  .flexPresentation {
    display: flex;
  }

  .presentationContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-left: 6vw;
    gap: 10px;
    height: 131px;
  }

  .line {
    border-top: 1px solid #212529;
    border-bottom: 1px solid #212529;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
  }

  .developContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tecsHeader {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 88vw;
  }

  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;
  }

  .tecsHeader img {
    padding: 14px;
    background: #212529;
    border-radius: 4px;
  }

  .tecsHeader img:hover {
    background: #343b41;
  }

  ul {
    min-width: 88vw;
    margin-top: 20px;
    padding: 16px 19px;
    background: #212529;
    border-radius: 4px;
  }

  li {
    padding: 12.182px;
    gap: 12.18px;
    min-width: 80vw;
    margin: 10px 0px;

    background: var(--color-gray-4);
    border-radius: 4.06066px;
  }

  li:hover {
    cursor: pointer;
    background: var(--color-gray-2);
  }

  li div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;

    color: #f8f9fa;
  }

  @media (min-width: 768px) {
    .flexPresentation {
      display: flex;
      justify-content: center;
    }

    .presentationContainer {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      min-width: 88vw;
      padding: 0px;
    }
  }
  @media (min-width: 1024px) {
    .logoContainer {
      min-width: 70vw;
    }

    .presentationContainer {
      min-width: 70vw;
    }

    .tecsHeader {
      min-width: 70vw;
    }

    ul {
      min-width: 70vw;
    }

    li {
      min-width: 60vw;
    }
  }
`;
