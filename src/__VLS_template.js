import { RouterView } from 'vue-router';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VCard', typeof __VLS_localComponents, "VCard", "vCard", "v-card"> &
__VLS_WithComponent<'VLayout', typeof __VLS_localComponents, "VLayout", "vLayout", "v-layout"> &
__VLS_WithComponent<'VAppBar', typeof __VLS_localComponents, "VAppBar", "VAppBar", "V-app-bar"> &
__VLS_WithComponent<'VBtn', typeof __VLS_localComponents, "VBtn", "vBtn", "v-btn"> &
__VLS_WithComponent<'VMain', typeof __VLS_localComponents, "VMain", "vMain", "v-main"> &
__VLS_WithComponent<'VContainer', typeof __VLS_localComponents, "VContainer", "vContainer", "v-container"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "RouterView", "RouterView">;
__VLS_components.VCard; __VLS_components.VCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components["v-card"]; __VLS_components["v-card"];
// @ts-ignore
[VCard, VCard,];
__VLS_components.VLayout; __VLS_components.VLayout; __VLS_components.vLayout; __VLS_components.vLayout; __VLS_components["v-layout"]; __VLS_components["v-layout"];
// @ts-ignore
[VLayout, VLayout,];
__VLS_components.VAppBar; __VLS_components.VAppBar; __VLS_components["V-app-bar"]; __VLS_components["V-app-bar"];
// @ts-ignore
[VAppBar, VAppBar,];
({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template;
__VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"];
// @ts-ignore
[VBtn, VBtn, VBtn, VBtn, VBtn, VBtn,];
__VLS_components.VMain; __VLS_components.VMain; __VLS_components.vMain; __VLS_components.vMain; __VLS_components["v-main"]; __VLS_components["v-main"];
// @ts-ignore
[VMain, VMain,];
__VLS_components.VContainer; __VLS_components.VContainer; __VLS_components.vContainer; __VLS_components.vContainer; __VLS_components["v-container"]; __VLS_components["v-container"];
// @ts-ignore
[VContainer, VContainer,];
__VLS_components.RouterView;
// @ts-ignore
[RouterView,];
{
let __VLS_0!: 'VCard' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VCard : 'vCard' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vCard : 'v-card' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-card'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VCard'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, elevation: ("3"), maxWidth: ("1200"), class: ("mx-auto"), }));
({} as { VCard: typeof __VLS_0; }).VCard;
({} as { VCard: typeof __VLS_0; }).VCard;
const __VLS_2 = __VLS_1({ ...{}, elevation: ("3"), maxWidth: ("1200"), class: ("mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, elevation: ("3"), maxWidth: ("1200"), class: ("mx-auto"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'VLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VLayout : 'vLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vLayout : 'v-layout' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-layout'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VLayout'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { VLayout: typeof __VLS_5; }).VLayout;
({} as { VLayout: typeof __VLS_5; }).VLayout;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
let __VLS_10!: 'VAppBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VAppBar : 'V-app-bar' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['V-app-bar'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VAppBar'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, color: ("cyan-accent-2"), }));
({} as { VAppBar: typeof __VLS_10; }).VAppBar;
({} as { VAppBar: typeof __VLS_10; }).VAppBar;
const __VLS_12 = __VLS_11({ ...{}, color: ("cyan-accent-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, color: ("cyan-accent-2"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_13.slots!).prepend;
{
let __VLS_18!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-btn'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBtn'];
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{}, to: (({ name: __VLS_ctx.home })), }));
({} as { VBtn: typeof __VLS_18; }).VBtn;
({} as { VBtn: typeof __VLS_18; }).VBtn;
const __VLS_20 = __VLS_19({ ...{}, to: (({ name: __VLS_ctx.home })), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, to: (({ name: __VLS_ctx.home })), });
const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)!;
let __VLS_22!: __VLS_NormalizeEmits<typeof __VLS_21.emit>;
(__VLS_21.slots!).default;
}
}
}
{
const __VLS_23 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_24 = __VLS_elementAsFunctionalComponent(__VLS_23);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_25 = __VLS_24({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_24));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_23, typeof __VLS_25> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_13.slots!).append;
{
let __VLS_26!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-btn'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBtn'];
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, to: (({ name: __VLS_ctx.home })), }));
({} as { VBtn: typeof __VLS_26; }).VBtn;
({} as { VBtn: typeof __VLS_26; }).VBtn;
const __VLS_28 = __VLS_27({ ...{}, to: (({ name: __VLS_ctx.home })), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, to: (({ name: __VLS_ctx.home })), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
(__VLS_29.slots!).default;
}
{
let __VLS_31!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-btn'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VBtn'];
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{}, to: (({ name: '/login' })), }));
({} as { VBtn: typeof __VLS_31; }).VBtn;
({} as { VBtn: typeof __VLS_31; }).VBtn;
const __VLS_33 = __VLS_32({ ...{}, to: (({ name: '/login' })), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, to: (({ name: '/login' })), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
(__VLS_34.slots!).default;
}
}
}
}
{
let __VLS_36!: 'VMain' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VMain : 'vMain' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vMain : 'v-main' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-main'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VMain'];
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, }));
({} as { VMain: typeof __VLS_36; }).VMain;
({} as { VMain: typeof __VLS_36; }).VMain;
const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
{
let __VLS_41!: 'VContainer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VContainer : 'vContainer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vContainer : 'v-container' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-container'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VContainer'];
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, }));
({} as { VContainer: typeof __VLS_41; }).VContainer;
({} as { VContainer: typeof __VLS_41; }).VContainer;
const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
{
let __VLS_46!: 'RouterView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterView : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterView'];
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, }));
({} as { RouterView: typeof __VLS_46; }).RouterView;
const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
}
(__VLS_44.slots!).default;
}
(__VLS_39.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[home, home, home, home, home, home,];
return __VLS_slots;
}
