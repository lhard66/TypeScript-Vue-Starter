// 在TypeScript中的文件(.vue等)要使用vue，需在此配置。我们不需要引入，会自动被TypeScript包含。
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}