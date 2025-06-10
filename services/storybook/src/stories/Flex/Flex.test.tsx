import { Flex } from "@nba-design/ui";
import { render, screen } from "../../test/test-utils"; // ✅ utils 기반으로 변경

describe("🧪 Flex 컴포넌트", () => {
  it("자식 요소를 정상적으로 렌더링해야 한다", () => {
    render(
      <Flex data-testid="flex">
        <div>child1</div>
        <div>child2</div>
      </Flex>,
    );

    expect(screen.getByText("child1")).toBeInTheDocument();
    expect(screen.getByText("child2")).toBeInTheDocument();
  });

  it("정렬 속성이 올바르게 적용되어야 한다", () => {
    render(
      <Flex data-testid="flex" justifyContent="center" flexDirection="column">
        <div>content</div>
      </Flex>,
    );

    const flex = screen.getByTestId("flex");
    expect(flex).toHaveStyle("justify-content: center");
    expect(flex).toHaveStyle("flex-direction: column");
  });
});
