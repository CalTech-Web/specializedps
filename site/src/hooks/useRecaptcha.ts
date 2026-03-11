"use client";

import { useCallback } from "react";

const RECAPTCHA_SITE_KEY = "6LdWv4UsAAAAADqB8J_eoc35dvvOon1lnd98nT9f";

export function useRecaptcha() {
  const getToken = useCallback(async (action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error("reCAPTCHA not loaded"));
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action })
          .then(resolve)
          .catch(reject);
      });
    });
  }, []);

  return { getToken };
}
