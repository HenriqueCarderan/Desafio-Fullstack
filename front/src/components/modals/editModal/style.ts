import styled from "styled-components";

export const ContainerEditModal = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: transparent;

  .content {
    width: 100%;
    max-width: 96vw;
    padding-bottom: 24px;

    gap: 17.65px;

    background: var(--color-gray-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
  }

  .headerContainer {
    display: flex;
    justify-content: space-between;
    padding: 9.62602px 16.0434px;
    gap: 8.02px;

    background: var(--color-gray-2);
    border-radius: 3.20867px 3.20867px 0px 0px;
  }

  h2 {
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;

    color: var(--color-gray-0);
  }

  .headerContainer button {
    font-weight: 600;
    font-size: 12.8347px;
    line-height: 21px;
    background: none;
    border: none;

    color: var(--color-gray-1);
  }
  .formContainer {
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    min-width: 90%;
  }

  form label {
    text-align: start;
    padding: 10px 0px;

    font-weight: 400;
    font-size: 9.772px;
    color: var(--color-gray-0);
  }

  form input {
    padding: 0px 13.0293px;
    gap: 8.14px;
    height: 38.5px;

    color: var(--color-gray-0);
    background: var(--color-gray-2);

    border: 0.973988px solid var(--color-gray-2);
    border-radius: 3.19812px;
  }

  form select {
    padding: 0px 13.0293px;
    gap: 8.14px;
    height: 38.5px;

    color: var(--color-gray-0);
    background: var(--color-gray-2);

    border: 0.973988px solid var(--color-gray-2);
    border-radius: 3.19812px;
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }

  .editButton {
    padding: 0px 22.3336px;
    gap: 10.15px;
    height: 38.5px;

    color: var(--color-gray-0);
    background: var(--color-primary-negative);

    border: 1.2182px solid var(--color-primary-negative);
    border-radius: 4.06066px;
  }

  .removeButton {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    width: 32%;
    height: 38.37px;

    color: #ffffff;
    background: var(--color-gray-1);

    border: 1.2182px solid var(--color-gray-1);
    border-radius: 4px;
  }

  .removeButton:hover {
    background: var(--color-gray-2);

    border: 1.2182px solid var(--color-gray-2);
  }

  span {
    font-weight: 400;
    font-size: 9.772px;
    color: var(--color-gray-0);
  }

  @media (min-width: 370px) {
    .content {
      max-width: 370px;
    }
  }
  @media (max-width: 280px) {
    .buttonContainer {
      flex-direction: column;
    }

    .editButton {
      width: 100%;
      margin-bottom: 12px;
    }

    .removeButton {
      width: 100%;
    }
  }
`;
