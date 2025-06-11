import { useCallback } from "react";

interface ShareProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel?: string;
}

function useShare() {
  const shareToKakao = useCallback(
    ({
      title,
      description,
      imageUrl,
      buttonLabel = "나도 만들기",
    }: ShareProps) => {
      const shareUrl = "https://nba-blush.vercel.app";

      if (!window.Kakao || !window.Kakao.isInitialized()) {
        console.warn("Kakao SDK가 초기화되지 않았습니다.");
        return;
      }

      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title,
          description,
          imageUrl,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: buttonLabel,
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    },
    [],
  );

  return shareToKakao;
}

export default useShare;
