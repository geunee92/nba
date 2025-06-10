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
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: buttonLabel,
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
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
