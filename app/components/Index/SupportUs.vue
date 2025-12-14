<script setup lang="ts">
defineProps<{
    content: any,
}>()
</script>

<template>

    <UPageSection id="support-us" class="mb-32 overflow-hidden" :title="content.title"
        :description="content.description" :plans="content.plans"
        :ui="{ title: 'text-left @container relative', description: 'text-left' }">
        <template #title>
            <MDC :value="content.title" />

            <div class="hidden @min-[1120px]:block">
                <UColorModeImage light="/images/light/line-4.svg" dark="/images/dark/line-4.svg"
                    class="absolute top-0 right-0 size-full transform translate-x-[60%]" />
            </div>
        </template>

        <UPricingPlans scale>
            <UPricingPlan v-for="(plan, index) in content.plans" :key="index" :title="plan.title"
                :description="plan.description" :price="plan.price" :billing-period="plan.billing_period"
                :billing-cycle="plan.billing_cycle" :highlight="plan.highlight" :scale="plan.highlight" variant="soft"
                :features="plan.features" :button="plan.button" />
        </UPricingPlans>
    </UPageSection>

</template>