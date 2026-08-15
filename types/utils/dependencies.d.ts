import type StylusRenderer = require("stylus/lib/renderer");
import type LessStatic from "less";
export declare const shikiWorkerSrc: string;
export declare const shikiOnigasmSrc = "https://cdn.jsdelivr.net/npm/@vap/shiki@0.10.3/dist/onig.wasm";
export declare const getStegCloak: () => Promise<any>;
export declare const getStylus: () => Promise<typeof StylusRenderer>;
export declare const getLess: () => Promise<LessStatic>;
