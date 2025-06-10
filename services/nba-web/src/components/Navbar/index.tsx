import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Flex, Text } from "@nba-design/ui";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // 홈(`/`)에서는 네비게이션 바를 숨김
  if (location.pathname === "/") return null;

  return (
    <Flex
      backgroundColor="#000"
      color="#fff"
      alignItems="center"
      justifyContent="space-between"
      padding="8px 16px"
    >
      <Flex alignItems="center" gap="16px">
        <img
          src="/nba-logo.webp"
          alt="NBA 로고"
          style={{ height: 24, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <Text
          size="lg"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/lineup")}
          color="background"
        >
          선수뽑기
        </Text>
        <Text
          size="lg"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/popularLineup")}
          color="background"
        >
          랭킹
        </Text>
      </Flex>
    </Flex>
  );
}
