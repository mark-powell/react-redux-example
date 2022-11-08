export enum Page {
    HOME,
    ANIMALS,
    PEOPLE,
    NEW_PAGE,
}

export interface NavigationState {
    currentPage: Page;
}