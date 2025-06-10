import { Player } from "../types/player";

export const mockPlayers: Player[] = [
  // PG
  {
    id: "pg1",
    name: "Luka Doncic",
    position: "PG",
    team: "Lakers",
    dollar: 5,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1629029.png", // 높은 PER, 리더십
  },
  {
    id: "pg2",
    name: "Stephen Curry",
    position: "PG",
    team: "Warriors",
    dollar: 4,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/201939.png", // 여전히 엘리트 슈팅
  },
  {
    id: "pg3",
    name: "Kyrie Irving",
    position: "PG",
    team: "Mavericks",
    dollar: 3,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/202681.png", // 안정적인 세컨 볼핸들러
  },
  {
    id: "pg4",
    name: "Chris Paul",
    position: "PG",
    team: "Warriors",
    dollar: 2,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/101108.png", // 베테랑 리더
  },
  {
    id: "pg5",
    name: "Russell Westbrook",
    position: "PG",
    team: "Clippers",
    dollar: 1,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/201566.png", // 식지 않은 에너지
  },

  // SG
  {
    id: "sg1",
    name: "Shai Gilgeous-Alexander",
    position: "SG",
    team: "Thunder",
    dollar: 5,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1628983.png", // 올NBA 1st
  },
  {
    id: "sg2",
    name: "Anthony Edwards",
    position: "SG",
    team: "Timberwolves",
    dollar: 4,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1630162.png", // 플레이오프 슈퍼스타
  },
  {
    id: "sg3",
    name: "Jaylen Brown",
    position: "SG",
    team: "Celtics",
    dollar: 3,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1627759.png", // 양방향 엘리트
  },
  {
    id: "sg4",
    name: "Alex Caruso",
    position: "SG",
    team: "Bulls",
    dollar: 2,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1627936.png", // 수비력 최고
  },
  {
    id: "sg5",
    name: "Seth Curry",
    position: "SG",
    team: "Hornets",
    dollar: 1,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/203552.png", // 벤치 슈터
  },

  // SF
  {
    id: "sf1",
    name: "Jayson Tatum",
    position: "SF",
    team: "Celtics",
    dollar: 5,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1628369.png",
  },
  {
    id: "sf2",
    name: "LeBron James",
    position: "SF",
    team: "Lakers",
    dollar: 4,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/2544.png",
  },
  {
    id: "sf3",
    name: "Kevin Durant",
    position: "SF",
    team: "Suns",
    dollar: 3,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/201142.png",
  },
  {
    id: "sf4",
    name: "Mikal Bridges",
    position: "SF",
    team: "Nets",
    dollar: 2,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1628969.png",
  },
  {
    id: "sf5",
    name: "Dillon Brooks",
    position: "SF",
    team: "Rockets",
    dollar: 1,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1628415.png",
  },

  // PF
  {
    id: "pf1",
    name: "Giannis Antetokounmpo",
    position: "PF",
    team: "Bucks",
    dollar: 5,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/203507.png",
  },
  {
    id: "pf2",
    name: "Anthony Davis",
    position: "PF",
    team: "Mavericks",
    dollar: 4,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/203076.png",
  },
  {
    id: "pf3",
    name: "Aaron Gordon",
    position: "PF",
    team: "Nuggets",
    dollar: 3,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/203932.png",
  },
  {
    id: "pf4",
    name: "Draymond Green",
    position: "PF",
    team: "Warriors",
    dollar: 2,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/203110.png",
  },
  {
    id: "pf5",
    name: "Rui Hachimura",
    position: "PF",
    team: "Lakers",
    dollar: 1,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1629060.png",
  },

  // C
  {
    id: "c1",
    name: "Nikola Jokic",
    position: "C",
    team: "Nuggets",
    dollar: 5,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/203999.png",
  },
  {
    id: "c2",
    name: "Joel Embiid",
    position: "C",
    team: "Sixers",
    dollar: 4,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/203954.png",
  },
  {
    id: "c3",
    name: "Bam Adebayo",
    position: "C",
    team: "Heat",
    dollar: 3,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1628389.png",
  },
  {
    id: "c4",
    name: "Ivica Zubac",
    position: "C",
    team: "Clippers",
    dollar: 2,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1627826.png",
  },
  {
    id: "c5",
    name: "Kevon Looney",
    position: "C",
    team: "Warriors",
    dollar: 1,
    imageUrl: "https://cdn.nba.com/headshots/nba/latest/260x190/1626172.png",
  },
];
