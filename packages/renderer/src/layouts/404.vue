<template>
  <div class="result-container">
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <n-button @click="back">
          {{ t('button.back') }}
        </n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts" name="404">
const router = useRouter()
const { t } = useI18n()

const back = () => router.back()
</script>

<style>
.result-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>
