import { createI18n } from 'vue-i18n';
import type { UserModule } from '../types';

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(([key, value]: [key: string, value: any]) => {
    const yaml = key.endsWith('.yaml');
    return [key.slice(14, yaml ? -5 : -4), value.default];
  })
);

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages,
});

export const install: UserModule = ({ app }) => {
  app.use(i18n);
};
