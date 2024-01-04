// declare global {
//   interface Window {
//     FB: {
//       init: (params: {
//         appId: string;
//         xfbml: boolean;
//         version: string;
//       }) => void;
//       // Aquí puedes agregar más métodos según sea necesario
//     };
//     fbAsyncInit?: () => void;
//   }
// }
declare const window: Window &
  typeof globalThis & {
    FB: any;
    fbAsyncInit: () => void;
  };
