import styled from "styled-components";
import { flex, font, tagColor, gray } from "../styled/styled";

const ContentContainer = styled.div`
  ${flex({direction: "column", align: "flex-start", gap: "5"})}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${font(12)}
    color: $tag-color;
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font(18,600)}
  }
  p {
    ${font(12)}
    color: ${gray};
  }
`

export default function Content({ content }) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
