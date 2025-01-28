/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        "pt-BR": {
            registerTitle: "Crie sua conta",
            doRegister: "CADASTRAR",
            eventfyeHeader: "Inscreva-se em eventos de forma prática",
            eventfyeParagraph: "Cadastre-se na Eventfye e encontre seus eventos de forma simples e rápida.",
            eventfyeHeaderLogin: "Faça seu login na plataforma",
            eventfyeResetPassword: "Recupere a sua senha Eventfye:"
            
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
