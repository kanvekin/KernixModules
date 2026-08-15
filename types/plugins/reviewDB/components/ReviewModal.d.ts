import { ReviewType } from "../entities";
export declare const Paginator: import("../../../utils/react").LazyComponentWrapper<import("react").ComponentType<{
    currentPage: number;
    maxVisiblePages: number;
    pageSize: number;
    totalCount: number;
    className?: string;
    onPageChange?(page: number): void;
    hideMaxPage?: boolean;
}>>;
export declare const requirePaginator: () => Promise<boolean>;
export declare function openReviewsModal(discordId: string, name: string, type: ReviewType): void;
