import { useEffect } from "react";

function useLoadKakao() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
      }
    };
  }, []);
}

export default useLoadKakao;
