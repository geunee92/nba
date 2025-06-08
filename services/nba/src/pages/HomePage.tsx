import { useNavigate } from "react-router-dom";
import { HeroSection } from "../components/home/HeroSection";
import { FeatureCardGrid } from "../components/home/FeatureCardGrid";
import { CTASection } from "../components/home/CTASection";
import styled from "@emotion/styled";

function HomePage() {
  const navigate = useNavigate();

  function handleStart() {
    navigate("/lineup");
  }

  return (
    <Wrapper>
      <HeroSection onStart={handleStart} />
      <FeatureCardGrid />
      <CTASection onStart={handleStart} />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
