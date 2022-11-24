import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const CardImage: FC<PropsWithChildren<object>> = ({
  children,
}: PropsWithChildren<object>) => <CardImageStyled>{children}</CardImageStyled>;

const CardImageStyled = styled.div`
  width: 300px;
  height: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #d0d0d0;
`;

export default CardImage;
