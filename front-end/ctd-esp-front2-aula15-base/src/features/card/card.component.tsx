import { FC, PropsWithChildren } from "react";
import CardImage from "features/card/card-image.component";
import CardBody from "features/card/card-body.component";
import styled from "styled-components";

type CompoundCard = FC<PropsWithChildren<object>> & {
  Image: FC<PropsWithChildren<object>>;
  Body: FC<PropsWithChildren<object>>;
};

const Card: CompoundCard = ({ children }: PropsWithChildren<object>) => (
  <CardStyled>{children}</CardStyled>
);

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

Card.Image = CardImage;
Card.Body = CardBody;

export default Card;
