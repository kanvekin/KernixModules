import { UserstyleHeader } from "usercss-meta";
export declare function usercssParse(text: string, fileName: string): Promise<UserstyleHeader>;
export declare function getUserCssId(header: UserstyleHeader): Promise<string>;
