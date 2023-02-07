import styled from "@emotion/styled";

export const MoviesWrap = styled.div``;
export const MoviesUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
`;

export const MovieLi = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: start;
  color: #2f4f4f;
  width: 150px;
  height: 320px;
  font-size: 12px;
  padding: 10px;
  letter-spacing: 0.2px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;
export const FrontShrink = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: start;
  gap: 5px;
`;

export const Poster = styled("img")`
  text-align: center;
  max-height: ${(props) => (props.flipped ? "75px" : "100%")};
  max-width: auto;
  vertical-align: middle;
`;
export const TitleWrap = styled.div`
  margin-top: -10px;
  font-size: 10px;
  line-height: 10px;
`;

export const FavButton = styled.button`
  padding: 2px 5px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

export const HeartImg = styled.img`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #000;
`;
