// hack-fix for scss declarations
declare module "*.module.scss" {
    const classes: { [key: string]: string };

    export default classes;
}
