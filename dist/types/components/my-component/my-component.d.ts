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
    componentWillLoad(): void;
    items(): ({
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "publisher": {
            "@type": string;
            "name": string;
        };
        "image": string;
        "name"?: undefined;
        "reviewBody"?: undefined;
        "datePublished"?: undefined;
    } | {
        "@context": string;
        "@type": string;
        "itemReviewed": {
            "@type": string;
            "name": string;
        };
        "author": {
            "@type": string;
            "name": string;
        };
        "reviewRating": {
            "@type": string;
            "ratingValue": string;
            "bestRating": string;
        };
        "name": string;
        "reviewBody": string;
        "datePublished": string;
        "publisher": {
            "@type": string;
            "name": string;
        };
        "image"?: undefined;
    })[];
    stars(score: any, start: any, end: any): JSX.Element;
    render(): JSX.Element;
}
