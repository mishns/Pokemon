declare module "*.css" {
  const styles: { [key: string]: string };
  export = styles;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.jpeg";

declare module "*.jpg";

declare module "*.png";

declare module "*.svg";

declare module "*.mp3";
