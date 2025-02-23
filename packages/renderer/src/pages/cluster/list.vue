<template>
  <div class="cluster-list-container">
    <template v-if="configStore.server.host">
      <n-breadcrumb>
        <n-breadcrumb-item href="/">
          {{ t('breadcrumb.home') }}
        </n-breadcrumb-item>
        <n-breadcrumb-item>{{ t('breadcrumb.cluster') }}</n-breadcrumb-item>
        <n-breadcrumb-item>{{ t('breadcrumb.list') }}</n-breadcrumb-item>
      </n-breadcrumb>
      <LockFunc>
        <n-list v-if="clusterStore.list.length > 0" bordered>
          <template v-for="item in clusterStore.list" :key="item.id">
            <n-list-item v-if="item.config">
              <n-thing>
                <template #avatar>
                  <n-avatar :size="50">
                    <n-icon>
                      <carbon:task-tools />
                    </n-icon>
                  </n-avatar>
                </template>
                <template #header>
                  {{ item.config?.NETWORK?.cluster_name || t('result.empty-cluster-name') }}
                </template>
                <template #header-extra>
                  <ListBtnGroup :cluster="item.id" />
                </template>
                <template #description>
                  {{ item.config?.NETWORK?.cluster_description || t('result.empty-cluster-description') }}
                </template>
                <n-space>
                  <n-tag v-if="item.config?.GAMEPLAY?.game_mode" size="small" type="success">
                    {{ t('tag.game-mode') }}:
                    {{ t(`tag.game-mode-${item.config?.GAMEPLAY?.game_mode}`) }}
                  </n-tag>
                  <n-tag v-if="item.config?.GAMEPLAY?.max_players" size="small" type="warning">
                    {{ t('tag.max-players') }}:
                    {{ item.config?.GAMEPLAY?.max_players }}
                  </n-tag>
                  <n-tag v-if="item.config?.GAMEPLAY?.pvp === 'true'" size="small" type="error">
                    {{ t('tag.pvp') }}
                  </n-tag>
                </n-space>
              </n-thing>
            </n-list-item>
          </template>
        </n-list>
        <AddCluster />
        <n-empty v-if="clusterStore.list.length === 0" size="huge" :description="t('result.empty-cluster')" />
      </LockFunc>
    </template>
    <n-empty v-else class="no-server" size="large" :description="t('result.empty-cluster')" />
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import { useClusterStore } from '../../store/cluster';
import { useConfigStore } from '../../store/config';
import ListBtnGroup from './components/ListBtnGroup.vue';
import AddCluster from './components/AddCluster.vue';

const { t } = useI18n();
const message = useMessage();
const clusterStore = useClusterStore();
const configStore = useConfigStore();

if (clusterStore.list.length === 0) clusterStore.getClusterList();

if (!configStore.server.host) message.error(t('alert.no-server'));
</script>

<style lang="scss">
.steam-desc-container {
  width: 100%;

  .n-empty {
    margin-top: 20vh;
  }
}

.no-server {
  margin-top: 30vh;
}

.n-back-top {
  z-index: 100;
}
</style>
