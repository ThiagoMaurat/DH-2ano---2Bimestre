import { FC } from "react";
import { useLanguage } from "features/language/index";
import styled from "styled-components";

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();

  interface ButtonStyledInterface {
    isActive: boolean;
  }

  const ButtonStyled = styled.button<ButtonStyledInterface>`
    background-color: ${({ isActive }) => (isActive ? "#17589f" : "white")};
    padding: ${({ isActive }) => (isActive ? "0px" : "4px 2px")};
    margin-right: ${({ isActive }) => (isActive ? "0px" : "10px")};
  `;
  return (
    <div className={"language"}>
      <ButtonStyled
        isActive={language === "SPANISH"}
        onClick={() => setLanguage("SPANISH")}
        className={
          language === "SPANISH" ? "language-button active" : "language-button"
        }
      >
        {t("language.spanish")}
      </ButtonStyled>
      <ButtonStyled
        isActive={language === "ENGLISH"}
        onClick={() => setLanguage("ENGLISH")}
        className={
          language === "ENGLISH" ? "language-button active" : "language-button"
        }
      >
        {t("language.english")}
      </ButtonStyled>
      <ButtonStyled
        isActive={language === "PORTUGUESE"}
        onClick={() => setLanguage("PORTUGUESE")}
        className={
          language === "PORTUGUESE"
            ? "language-button active"
            : "language-button"
        }
      >
        {t("language.portuguese")}
      </ButtonStyled>
    </div>
  );
};
export default LanguageComponent;
