import { Card, Heading, Text, Grid } from "@nba-design/ui";

export function FeatureCardGrid() {
  return (
    <Grid columns={[1, 2, 3]} gap="lg">
      <Card>
        <Heading size="base">선수 선택</Heading>

        <Text size="sm">가격대를 고려해 5명의 선수를 선택하세요.</Text>
      </Card>

      <Card>
        <Heading size="base">라인업 저장</Heading>

        <Text size="sm">선택한 팀을 저장하고 공유할 수 있어요.</Text>
      </Card>

      <Card>
        <Heading size="base">인기 선수 확인</Heading>

        <Text size="sm">다른 유저들이 고른 선수 순위를 확인해보세요.</Text>
      </Card>
    </Grid>
  );
}
