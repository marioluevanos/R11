/**
 * @returns The current route name
 */
export default function getRouteName() {
    const { $store } = window.$nuxt
    const nextRoute = $store.getters.currentRoute
    const prevRoute = $store.getters.prevRoute
    const curr = nextRoute.name
    const prev = prevRoute.name
    return {current: curr, previous: prev }
}
