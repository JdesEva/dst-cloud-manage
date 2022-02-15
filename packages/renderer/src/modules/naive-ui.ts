import {
  NAlert,
  NAvatar,
  NBackTop,
  NBadge,
  NBreadcrumb,
  NBreadcrumbItem,
  NButton,
  NCard,
  NCheckbox,
  NCheckboxGroup,
  NCol,
  NCollapse,
  NCollapseItem,
  NConfigProvider,
  NDataTable,
  NDatePicker,
  NDescriptions,
  NDescriptionsItem,
  NDialogProvider,
  NDivider,
  NDrawer,
  NDrawerContent,
  NDropdown,
  NElement,
  NForm,
  NFormItem,
  NGrid,
  NGridItem,
  NH1,
  NIcon,
  NInput,
  NInputGroup,
  NInputNumber,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NList,
  NListItem,
  NLoadingBarProvider,
  NMenu,
  NMessageProvider,
  NModal,
  NNotificationProvider,
  NPagination,
  NPopover,
  NProgress,
  NRadio,
  NRadioGroup,
  NResult,
  NRow,
  NSelect,
  NSkeleton,
  NSpace,
  NSpin,
  NStep,
  NSteps,
  NSwitch,
  NTabPane,
  NTable,
  NTabs,
  NTag,
  NText,
  NThing,
  NTimePicker,
  NTooltip,
  NTree,
  NUpload,
  create,
} from 'naive-ui'

import type { UserModule } from '../types'

export const install: UserModule = ({ app }) => {
  const naive = create({
    components: [
      NMessageProvider,
      NDialogProvider,
      NConfigProvider,
      NInput,
      NButton,
      NForm,
      NFormItem,
      NCheckboxGroup,
      NCheckbox,
      NIcon,
      NLayout,
      NLayoutHeader,
      NLayoutContent,
      NLayoutFooter,
      NLayoutSider,
      NMenu,
      NBreadcrumb,
      NBreadcrumbItem,
      NDropdown,
      NSpace,
      NTooltip,
      NAvatar,
      NTabs,
      NTabPane,
      NCard,
      NRow,
      NCol,
      NDrawer,
      NDrawerContent,
      NDivider,
      NSwitch,
      NBadge,
      NAlert,
      NElement,
      NTag,
      NNotificationProvider,
      NProgress,
      NDatePicker,
      NGrid,
      NGridItem,
      NList,
      NListItem,
      NThing,
      NDataTable,
      NPopover,
      NPagination,
      NSelect,
      NRadioGroup,
      NRadio,
      NSteps,
      NStep,
      NInputGroup,
      NResult,
      NDescriptions,
      NDescriptionsItem,
      NTable,
      NInputNumber,
      NLoadingBarProvider,
      NModal,
      NUpload,
      NText,
      NTree,
      NSpin,
      NTimePicker,
      NBackTop,
      NSkeleton,
      NH1,
      NCollapse,
      NCollapseItem,
    ],
  })
  app.use(naive)
}
