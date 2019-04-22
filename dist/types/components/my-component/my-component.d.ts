import '../../stencil.core';
export declare class MyComponent {
    /**
     * The first name
     */
    first: string;
    /**
     * The middle name
     */
    middle: string;
    /**
     * The last name
     */
    last: string;
    columns: string;
    userReviews: Array<any>;
    componentWillLoad(): Promise<void>;
    stars(score: any, start: any, end: any): JSX.Element;
    render(): JSX.Element;
}
