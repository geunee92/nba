// PopularLineups.tsx
import React, { useEffect, useState } from "react";

import { Card, Flex, Grid, Text } from "@nba-design/ui";
import {
  getPopularLineupList,
  GroupedLineup,
} from "src/remote/getPopularLineupList";
import { PlayerCard } from "src/components/PlayerCard";

export default function PopularLineupList() {
  const [topLineups, setTopLineups] = useState<GroupedLineup[]>([]);

  useEffect(() => {
    getPopularLineupList().then((data) => setTopLineups(data));
  }, []);

  return (
    <Grid columns={[1, 2, 3]} gap="lg">
      {topLineups.map(({ count, players }, i) => (
        <Card key={i} padding="md" shadow radius="lg">
          <Text weight="bold">
            🔥 {i + 1}위 ({count}회 선택)
          </Text>

          <Flex flexWrap="wrap" gap="sm">
            {players.map((p) => (
              <PlayerCard key={p.id} player={p} isSelected />
            ))}
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
