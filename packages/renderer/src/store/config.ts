import type { Config } from 'node-ssh';
import { defineStore } from 'pinia';
import { store } from '../utils/electron-store';
import type { ConfigState, ServerExtra, Translate } from 'dst';

export const useConfigStore = defineStore('config', {
  state: (): ConfigState => ({
    server: {},
    serverExtra: {},
    translate: {},
    lockFunc: false,
  }),
  getters: {},
  actions: {
    async initState() {
      this.server = await store.get('config-server');
      this.serverExtra = { ...this.serverExtra, ...(await store.get('config-server-extra')) };
      this.translate = await store.get('config-translate');
    },

    async updateServer(value: Config) {
      this.server = value;
      store.set('config-server', toRaw(value));
    },

    async updateTranslate(value: Translate) {
      this.translate = value;
      store.set('config-translate', toRaw(value));
    },

    async updateServerExtra(value: ServerExtra) {
      this.serverExtra = value;
      store.set('config-server-extra', toRaw(value));
    },

    setLockFunc(lockFunc: boolean): boolean {
      this.lockFunc = lockFunc;
      return lockFunc;
    },
  },
});

export { Translate };
