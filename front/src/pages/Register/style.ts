import styled from "styled-components";

export const RegisterContainer = styled.div`
  padding: 50px 0px;
  background: var(--color-gray-4);
  height: 100vh;
  overflow-y: scroll;

  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    width: 88vw;
    max-width: 370px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    height: 31.95px;

    background: var(--color-gray-3);
    border-radius: 4px;

    text-decoration: none;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;

    color: var(--color-gray-0);
  }

  a:hover {
    background: var(--color-gray-2);
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33.6911px 17.6477px;
    gap: 17.65px;
    margin: auto;
    width: 88vw;
    max-width: 370px;

    background: var(--color-gray-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
  }

  h3 {
    font-weight: 700;
    font-size: 14.439px;
    line-height: 22px;

    color: var(--color-gray-0);
  }

  p {
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;

    color: var(--color-gray-1);
  }

  .formContainer form {
    display: flex;
    flex-direction: column;
    width: 76vw;
    max-width: 330px;
  }

  .formContainer input {
    padding: 0px 13.0293px;
    gap: 8.14px;
    height: 38.5px;

    color: var(--color-gray-0);
    background: var(--color-gray-2);

    border: 0.973988px solid var(--color-gray-2);
    border-radius: 3.19812px;
  }

  select {
    padding: 0px 13.0293px;
    gap: 8.14px;
    height: 38.5px;

    background: var(--color-gray-2);
    color: var(--color-gray-1);

    border: 0.973988px solid var(--color-gray-2);
    border-radius: 3.19812px;
  }

  option {
    color: var(--color-gray-1);
  }

  .formContainer label {
    text-align: start;
    padding: 10px 0px;

    font-weight: 400;
    font-size: 9.772px;
    color: var(--color-gray-0);
  }

  button {
    padding: 0px 22.3336px;
    gap: 10.15px;
    margin-top: 20px;

    min-height: 38.5px;

    background: var(--color-primary-negative);

    border: 1.2182px solid var(--color-primary-negative);
    border-radius: 4px;

    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;

    color: #ffffff;
  }

  span {
    font-weight: 400;
    font-size: 9.772px;
    color: var(--color-gray-0);
  }
`;
