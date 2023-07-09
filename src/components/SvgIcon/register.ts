const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('@/assets/svg', true, /\.svg$/));
} catch (error) {
    console.log(error);
}
export {}