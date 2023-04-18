import styled from "styled-components";

export const LoginContainer = styled.div`
  padding-top: 80px;
  background: var(--color-gray-4);
  height: 100vh;
  overflow: auto;

  .logo {
    padding: 10px;
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

    border: 1.2182px solid var(--color-gray-2);
    border-radius: 4px;
  }

  .formContainer input:focus {
    border: 1.2182px solid var(--color-gray-0);
  }

  span {
    font-weight: 400;
    font-size: 9.772px;
    color: var(--color-gray-0);
  }

  .formContainer .label {
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

    background: var(--color-primary);

    border: 1.2182px solid var(--color-primary);
    border-radius: 4.06066px;

    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;

    color: #ffffff;
  }

  button:hover {
    background: var(--color-primary-focus);

    border: 1.2182px solid var(--color-primary-focus);
    border-radius: 4px;
  }

  p {
    margin-top: 27px;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;

    color: var(--color-gray-1);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 17px;
    padding: 0px 22.3336px;
    gap: 10.15px;

    min-height: 38.5px;

    background: var(--color-gray-1);

    border: 1.2182px solid var(--color-gray-1);
    border-radius: 4px;

    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    text-decoration: none;

    color: var(--color-gray-0);
  }

  a:hover {
    background: var(--color-gray-2);
    border: 1.2182px solid var(--color-gray-2);
    border-radius: 4px;
  }
`;
